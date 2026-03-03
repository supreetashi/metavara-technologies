const FALLBACK_IMAGE_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d2a4a" />
      <stop offset="100%" stop-color="#1565c0" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)" />
  <g fill="#e8f0fe" opacity="0.85" font-family="Arial, sans-serif" text-anchor="middle">
    <text x="600" y="382" font-size="52" font-weight="700">Image unavailable</text>
    <text x="600" y="435" font-size="28">Metavara Core Services</text>
  </g>
</svg>
`);

export const FALLBACK_IMAGE_SRC = `data:image/svg+xml;charset=utf-8,${FALLBACK_IMAGE_SVG}`;

export function handleImageError(event) {
  if (event.currentTarget.dataset.fallbackApplied === 'true') return;
  event.currentTarget.dataset.fallbackApplied = 'true';
  event.currentTarget.src = FALLBACK_IMAGE_SRC;
}
