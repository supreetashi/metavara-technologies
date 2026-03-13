import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSupportAgent } from 'react-icons/md';
import '../styles/CompanyChatbot.css';

const SITE_PAGES = [
  {
    title: 'Home',
    to: '/',
    summary:
      'Landing page with hero banner, latest insights and perspectives, live AI news updates, and services preview.',
    keywords: ['home', 'overview', 'latest', 'news', 'insights']
  },
  {
    title: 'About Metavara',
    to: '/about',
    summary:
      'Company vision, core values, innovation approach, and why Metavara combines global reach with local expertise.',
    keywords: ['about', 'company', 'vision', 'values', 'metavara']
  },
  {
    title: 'Leadership',
    to: '/leadership',
    summary: 'Leadership team details, strategic direction, and leadership profiles.',
    keywords: ['leadership', 'founders', 'management', 'directors']
  },
  {
    title: 'Our People',
    to: '/our-people',
    summary: 'Team profiles, skills, and talent strengths across delivery and engineering.',
    keywords: ['team', 'people', 'employees', 'staff']
  },
  {
    title: 'Services Overview',
    to: '/our-services',
    summary:
      'Complete core services portfolio including AI and ML, consulting, cybersecurity, transformation, and engineering.',
    keywords: ['services', 'offerings', 'portfolio', 'solutions']
  },
  {
    title: 'Application Development',
    to: '/application-development',
    summary: 'Custom web application development with scalability, security, and maintainability.',
    keywords: ['application development', 'web apps', 'software engineering']
  },
  {
    title: 'Mobile App Development',
    to: '/mobile-app-development',
    summary: 'Mobile product engineering for Android and iOS with performance-focused architecture.',
    keywords: ['mobile', 'android', 'ios', 'apps']
  },
  {
    title: 'Cyber Security',
    to: '/cyber-security',
    summary: 'Risk reduction, security hardening, governance, and protection of business-critical systems.',
    keywords: ['cyber', 'security', 'risk', 'vulnerability', 'compliance']
  },
  {
    title: 'AI and ML',
    to: '/ai-ml',
    summary:
      'Artificial intelligence and machine learning solutions for automation, intelligence, and decision support.',
    keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'automation']
  },
  {
    title: 'Digital Transformation',
    to: '/digital-transformation',
    summary: 'Modernization initiatives to transform operations, technology stacks, and digital capabilities.',
    keywords: ['digital transformation', 'modernization', 'enterprise transformation']
  },
  {
    title: 'IT Consulting',
    to: '/it-consulting',
    summary: 'Consulting services for architecture decisions, IT strategy, and technology roadmaps.',
    keywords: ['consulting', 'it strategy', 'technology advisory']
  },
  {
    title: 'Program and Project Management',
    to: '/program-project-management',
    summary: 'Program governance, project planning, and execution support for business outcomes.',
    keywords: ['program management', 'project management', 'delivery governance']
  },
  {
    title: 'Agile Services',
    to: '/agile-services',
    summary: 'Agile implementation support to improve speed, collaboration, and software delivery quality.',
    keywords: ['agile', 'scrum', 'delivery', 'process']
  },
  {
    title: 'Industries',
    to: '/industries',
    summary: 'Industry-focused solutions adapted to domain needs, compliance constraints, and scale.',
    keywords: ['industries', 'domains', 'sectors']
  },
  {
    title: 'Our Partners',
    to: '/our-partners',
    summary: 'Partner ecosystem and collaboration capabilities.',
    keywords: ['partners', 'alliances', 'ecosystem']
  },
  {
    title: 'Our Clients',
    to: '/our-clients',
    summary: 'Client footprint and relationship highlights.',
    keywords: ['clients', 'customers', 'case studies']
  },
  {
    title: 'Careers',
    to: '/careers',
    summary: 'Current openings, application flow, and career opportunities.',
    keywords: ['careers', 'jobs', 'hiring', 'openings', 'apply']
  },
  {
    title: 'Contact',
    to: '/contact',
    summary: 'Contact form, phone, email, and office location details.',
    keywords: ['contact', 'phone', 'email', 'address', 'location']
  },
  {
    title: 'Support',
    to: '/support',
    summary: 'Support channels with call and email options for help requests.',
    keywords: ['support', 'help', 'issue', 'assistance']
  },
  {
    title: 'Blogs',
    to: '/blogs',
    summary: 'Insights, updates, and perspective articles.',
    keywords: ['blogs', 'articles', 'insights']
  },
  {
    title: 'Gallery',
    to: '/gallery',
    summary: 'Media and visual gallery content.',
    keywords: ['gallery', 'photos', 'media']
  },
  {
    title: 'Events',
    to: '/events',
    summary: 'Upcoming events and community activities.',
    keywords: ['events', 'webinars', 'meetups']
  }
];

const CONTACT_DETAILS = {
  phone: '+91 9538027892',
  email: 'mvt.hr@metavaratechnologies.com',
  address: 'Bangalore, Karnataka, India',
  supportHours: '9 AM to 9 PM'
};

const QUICK_PROMPTS = [
  'How can I contact your team?',
  'Do you have job openings?',
  'Tell me about your AI capabilities',
  'Show all company info sections'
];

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'i', 'we', 'you', 'is', 'are', 'do', 'does', 'and', 'for', 'to', 'of',
  'in', 'on', 'with', 'about', 'can', 'me', 'your', 'my', 'our', 'please', 'show', 'tell'
]);

const normalizeText = (value) =>
  (value || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const extractTokens = (value) =>
  normalizeText(value)
    .split(' ')
    .filter((token) => token && token.length > 2 && !STOP_WORDS.has(token));

const scorePage = (query, page) => {
  const normalizedQuery = normalizeText(query);
  const queryTokens = extractTokens(query);
  const haystack = normalizeText(`${page.title} ${page.summary} ${page.keywords.join(' ')}`);

  let score = 0;
  queryTokens.forEach((token) => {
    if (haystack.includes(token)) {
      score += 2;
    }
  });

  if (normalizedQuery.includes(normalizeText(page.title))) {
    score += 4;
  }

  page.keywords.forEach((keyword) => {
    if (normalizedQuery.includes(normalizeText(keyword))) {
      score += 4;
    }
  });

  return score;
};

const searchPages = (query) =>
  SITE_PAGES
    .map((page) => ({ page, score: scorePage(query, page) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.page);

const getBotReply = (userMessage) => {
  const normalizedQuery = normalizeText(userMessage);

  if (!normalizedQuery) {
    return {
      text: 'Please type your question. I can help with services, contact, support, careers, and all website sections.',
      links: []
    };
  }

  if (/^(hi|hello|hey|good morning|good evening)$/.test(normalizedQuery)) {
    return {
      text: 'Hello. I can answer from all key pages on this website. Ask for any section or type "show all company info sections".',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Services', to: '/our-services' },
        { label: 'Contact', to: '/contact' }
      ]
    };
  }

  if (/(all company info|all info|every detail|everything|all sections|full details|show all)/.test(normalizedQuery)) {
    return {
      text: 'Here are the main website sections where all company information is available:',
      links: SITE_PAGES.slice(0, 12).map((page) => ({ label: page.title, to: page.to }))
    };
  }

  if (/(contact|phone|email|reach|call|address|location)/.test(normalizedQuery)) {
    return {
      text: `You can contact Metavara via phone ${CONTACT_DETAILS.phone}, email ${CONTACT_DETAILS.email}, or visit the contact page. Location: ${CONTACT_DETAILS.address}. Support hours: ${CONTACT_DETAILS.supportHours}.`,
      links: [
        { label: 'Contact', to: '/contact' },
        { label: 'Support', to: '/support' }
      ]
    };
  }

  if (/(job|career|hiring|vacancy|openings|apply)/.test(normalizedQuery)) {
    return {
      text: 'Yes, you can view current openings and submit applications through the careers page.',
      links: [{ label: 'Careers', to: '/careers' }]
    };
  }

  const matches = searchPages(userMessage);

  if (matches.length > 0) {
    const primary = matches[0];
    const related = matches.slice(1, 4);
    const relatedText =
      related.length > 0
        ? ` Related sections: ${related.map((item) => item.title).join(', ')}.`
        : '';

    return {
      text: `${primary.title}: ${primary.summary}.${relatedText}`,
      links: matches.slice(0, 4).map((page) => ({ label: page.title, to: page.to }))
    };
  }

  return {
    text:
      'I could not map that exactly yet. Ask by section name (for example: About, Services, AI and ML, Careers, Contact, Support, Partners, Blogs, Events) or type "show all company info sections".',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/our-services' },
      { label: 'Contact', to: '/contact' }
    ]
  };
};

const CompanyChatbot = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      from: 'bot',
      text:
        'Welcome to Metavara Support Assistant. I can help you find details from all main website sections.',
      links: [
        { label: 'Show Company Sections', to: '/' },
        { label: 'Contact', to: '/contact' }
      ]
    }
  ]);
  const messageEndRef = useRef(null);

  const canSend = useMemo(() => message.trim().length > 0 && !isTyping, [message, isTyping]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping, isOpen]);

  const pushBotReply = (text) => {
    const reply = getBotReply(text);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          from: 'bot',
          text: reply.text,
          links: reply.links
        }
      ]);
      setIsTyping(false);
    }, 350);
  };

  const sendMessage = (inputValue) => {
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-user`,
        from: 'user',
        text: trimmed,
        links: []
      }
    ]);
    setMessage('');
    pushBotReply(trimmed);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
  };

  return (
    <div className="company-chatbot-fab-wrap">
      {isOpen && (
        <div className="company-chatbot-window">
          <div className="company-chatbot-topbar">
            <div>
              <p className="company-chatbot-top-tag">Metavara Support</p>
              <p className="company-chatbot-top-sub">Ask anything about the website/company details</p>
            </div>
            <button
              type="button"
              className="company-chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              x
            </button>
          </div>

          <div className="company-chatbot-messages">
            {messages.map((chatMessage) => (
              <div
                className={`chat-bubble ${chatMessage.from === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
                key={chatMessage.id}
              >
                <p>{chatMessage.text}</p>
                {chatMessage.links?.length > 0 && (
                  <div className="chat-links">
                    {chatMessage.links.map((link) => (
                      <Link key={`${chatMessage.id}-${link.to}-${link.label}`} to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble chat-bubble-bot">
                <p className="typing">Typing...</p>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          <div className="chat-quick-prompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="company-chatbot-form" onSubmit={onSubmit}>
            <input
              aria-label="Ask a question about Metavara"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about any page, services, jobs, contact..."
            />
            <button type="submit" disabled={!canSend}>
              Ask
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="company-chatbot-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        <span className="company-chatbot-fab-icon" aria-hidden="true">
          <MdSupportAgent />
        </span>
      </button>
    </div>
  );
};

export default CompanyChatbot;
