const stripHtml = (value) => (value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const safeDate = (value) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatDate = (value) => {
  const parsed = safeDate(value);
  if (!parsed) return "Recent";
  return parsed.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const hostFromUrl = (value) => {
  try {
    return new URL(value).hostname.replace("www.", "");
  } catch {
    return "source";
  }
};

const fetchText = async (url, signal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Feed request failed: ${response.status}`);
  }
  return response.text();
};

const fetchXmlViaProxies = async (rssUrl, signal) => {
  const sources = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
    `https://cors.isomorphic-git.org/${rssUrl}`,
    rssUrl
  ];

  for (const source of sources) {
    try {
      const xmlText = await fetchText(source, signal);
      if (xmlText && xmlText.includes("<item>")) {
        return xmlText;
      }
    } catch {
    }
  }

  throw new Error("Unable to load RSS feed");
};

export const fetchLatestAiNews = async ({ limit = 6, signal } = {}) => {
  const query = encodeURIComponent("(artificial intelligence OR generative ai OR machine learning) when:1d");
  const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=en-US&gl=US&ceid=US:en&_=${Date.now()}`;
  const xmlText = await fetchXmlViaProxies(rssUrl, signal);
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const items = Array.from(xmlDoc.querySelectorAll("item"));

  if (!items.length) {
    throw new Error("No feed items");
  }

  const mapped = items
    .map((item) => {
      const rawTitle = stripHtml(item.querySelector("title")?.textContent || "");
      const title = rawTitle.split(" - ").slice(0, 2).join(" - ").trim();
      const link = item.querySelector("link")?.textContent || "#";
      const description = stripHtml(item.querySelector("description")?.textContent || "");
      const snippet = description.length > 165 ? `${description.slice(0, 162)}...` : description || "Read more on source.";
      const pubDateRaw = item.querySelector("pubDate")?.textContent || "";
      const publishedAt = safeDate(pubDateRaw);

      return {
        title: title || "AI update",
        link,
        snippet,
        source: hostFromUrl(link),
        date: formatDate(pubDateRaw),
        publishedTs: publishedAt ? publishedAt.getTime() : 0
      };
    })
    .filter((item) => item.link && item.link !== "#");

  const deduped = [];
  const seen = new Set();
  for (const item of mapped) {
    const key = `${item.title}::${item.link}`;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(item);
    }
  }

  return deduped
    .sort((a, b) => b.publishedTs - a.publishedTs)
    .slice(0, limit)
    .map(({ publishedTs, ...rest }) => rest);
};
