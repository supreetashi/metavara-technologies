import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const pages = [
  { title: "Home", path: "/" },
  { title: "About Metavara", path: "/about" },
  { title: "Leadership", path: "/leadership" },
  { title: "Digital Transformation", path: "/digital-transformation" },
  { title: "Cyber Security", path: "/cyber-security" },
  { title: "IT Consulting", path: "/it-consulting" },
  { title: "AI Solutions", path: "/ai-solutions" },
  { title: "Careers", path: "/careers" },
  { title: "Contact Details", path: "/contact" }
];

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("q")?.toLowerCase() || "";

  const results = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{searchTerm}"</h2>

      {results.length > 0 ? (
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
