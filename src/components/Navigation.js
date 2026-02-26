import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("India");
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const toggleMenu = (menuName) => {
  setOpenMenu(prev => (prev === menuName ? null : menuName));
};

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);

    if (newState) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

const closeMobileMenu = () => {
  setMobileMenuOpen(false);
  setOpenMenu(null);
  document.body.classList.remove("menu-open");
};

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const resetGoogleTranslate = () => {
    document.body.classList.remove("translated-ltr");
    document.body.classList.remove("translated-rtl");

    document.cookie = "googtrans=;path=/";
    document.cookie = "googtrans=;path=/;domain=" + window.location.hostname;

    const banner = document.querySelector(".goog-te-banner-frame");
    if (banner) {
      banner.remove();
    }
  };

  const changeLanguage = (lang, label) => {
    localStorage.setItem("siteLanguage", lang);
    setSelectedLanguage(label);
setOpenMenu(null);
    resetGoogleTranslate();
    document.cookie =
      "googtrans=/en/" + lang + ";path=/;domain=" + window.location.hostname;

    window.location.reload();
  };


  return (
    <nav className="main-nav" ref={navRef}>
      <div className="nav-content">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="/metavara-logo.png"
            alt="Metavara Logo"
            className="logo-image"
          />
          <span className="logo-text">
            <span className="logo-meta">META</span>
            <span className="logo-vara">VARA</span>
            <span className="logo-technologies">TECHNOLOGIES</span>
          </span>
        </Link>
        <button
          className={`menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul
          className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}
          id="navMenu"
        >
<li className="nav-item">
<button
  className={`nav-link dropdown-trigger ${openMenu === "about" ? "active" : ""}`}
  onClick={() => toggleMenu("about")}
  aria-expanded={openMenu === "about"}
>
              About <span className="arrow">▾</span>
            </button>
<div className={`dropdown-menu ${openMenu === "about" ? "show" : ""}`}>              <Link
                className={`dropdown-item ${isActive("/about")}`}
                to="/about"
                onClick={closeMobileMenu}
              >
                About Metavara
              </Link>
              <Link
                className={`dropdown-item ${isActive("/leadership")}`}
                to="/leadership"
                onClick={closeMobileMenu}
              >
                Leadership
              </Link>
              <Link
                className={`dropdown-item ${isActive("/our-people")}`}
                to="/our-people"
                onClick={closeMobileMenu}
              >
                Our People
              </Link>
            </div>
          </li>
 <li className="nav-item">
            <button
className={`nav-link dropdown-trigger ${openMenu === "core" ? "active" : ""}`}
onClick={() => toggleMenu("core")}
aria-expanded={openMenu === "core"}
            >
              Core Services <span className="arrow">▾</span>
            </button>
<div className={`dropdown-menu ${openMenu === "core" ? "show" : ""}`}>
              <Link
                className={`dropdown-item ${isActive("/application-development")}`}
                to="/application-development"
                onClick={closeMobileMenu}
              >
                Application Development
              </Link>
              <Link
                className={`dropdown-item ${isActive("/mobile-app-development")}`}
                to="/mobile-app-development"
                onClick={closeMobileMenu}
              >
                Mobile App Development
              </Link>
              <Link
                className={`dropdown-item ${isActive("/cyber-security")}`}
                to="/cyber-security"
                onClick={closeMobileMenu}
              >
                Cyber Security
              </Link>
              <Link
                className={`dropdown-item ${isActive("/ai-ml")}`}
                to="/ai-ml"
                onClick={closeMobileMenu}
              >
                AI & ML
              </Link>
              <Link
                className={`dropdown-item ${isActive("/digital-transformation")}`}
                to="/digital-transformation"
                onClick={closeMobileMenu}
              >
                Digital Transformation
              </Link>
              <Link
                className={`dropdown-item ${isActive("/it-consulting")}`}
                to="/it-consulting"
                onClick={closeMobileMenu}
              >
                IT Consulting
              </Link>
              <Link
                className={`dropdown-item ${isActive("/program-project-management")}`}
                to="/program-project-management"
                onClick={closeMobileMenu}
              >
                Program & Project Management
              </Link>
              <Link
                className={`dropdown-item ${isActive("/agile-services")}`}
                to="/agile-services"
                onClick={closeMobileMenu}
              >
                Agile Services
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/our-partners")}`}
              to="/our-partners"
              onClick={closeMobileMenu}
            >
              Partners
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/careers")}`}
              to="/careers"
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/contact")}`}
              to="/contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item notranslate">
            <button
className={`nav-link language-trigger ${openMenu === "language" ? "active" : ""}`}
onClick={() => toggleMenu("language")}
aria-expanded={openMenu === "language"}
            >
              🌐 {selectedLanguage} <span className="arrow">▾</span>
            </button>

            <div
              className={`language-panel ${openMenu === "language" ? "show" : ""}`}
              translate="no"
            >
              {/* Default */}
              <div className="language-section-title">Default (English)</div>
              <div className="language-divider"></div>

              {/* INDIA */}
              <div className="language-section-title">India</div>

              <span
                className="language-option"
                onClick={() => changeLanguage("en", "India")}
              >
                India (English)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("hi", "India")}
              >
                India (Hindi)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("te", "India")}
              >
                India (Telugu)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("kn", "India")}
              >
                India (Kannada)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ta", "India")}
              >
                India (Tamil)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ml", "India")}
              >
                India (Malayalam)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("mr", "India")}
              >
                India (Marathi)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("bn", "India")}
              >
                India (Bengali)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ur", "India")}
              >
                India (Urdu)
              </span>

              {/* ASIA PACIFIC */}
              <div className="language-section-title">Asia Pacific</div>

              <span
                className="language-option"
                onClick={() => changeLanguage("zh-CN", "China")}
              >
                China (Chinese)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ja", "Japan")}
              >
                Japan (Japanese)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ko", "South Korea")}
              >
                South Korea (Korean)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("th", "Thailand")}
              >
                Thailand (Thai)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("vi", "Vietnam")}
              >
                Vietnam (Vietnamese)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("id", "Indonesia")}
              >
                Indonesia (Indonesian)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ms", "Malaysia")}
              >
                Malaysia (Malay)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("tl", "Philippines")}
              >
                Philippines (Filipino)
              </span>

              {/* EUROPE */}
              <div className="language-section-title">Europe</div>

              <span
                className="language-option"
                onClick={() => changeLanguage("de", "Germany")}
              >
                Germany (German)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("fr", "France")}
              >
                France (French)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("es", "Spain")}
              >
                Spain (Spanish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("it", "Italy")}
              >
                Italy (Italian)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("nl", "Netherlands")}
              >
                Netherlands (Dutch)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("pl", "Poland")}
              >
                Poland (Polish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("sv", "Sweden")}
              >
                Sweden (Swedish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("cs", "Czech Republic")}
              >
                Czech (Czech)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("hu", "Hungary")}
              >
                Hungary (Hungarian)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ro", "Romania")}
              >
                Romania (Romanian)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("el", "Greece")}
              >
                Greece (Greek)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("da", "Denmark")}
              >
                Denmark (Danish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("fi", "Finland")}
              >
                Finland (Finnish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("no", "Norway")}
              >
                Norway (Norwegian)
              </span>

              {/* AMERICAS */}
              <div className="language-section-title">Americas</div>

              <span
                className="language-option"
                onClick={() => changeLanguage("en", "United States")}
              >
                United States (English)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("es", "Mexico")}
              >
                Mexico (Spanish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("pt", "Brazil")}
              >
                Brazil (Portuguese)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("fr", "Canada")}
              >
                Canada (French)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("qu", "Peru")}
              >
                Peru (Quechua)
              </span>

              {/* MIDDLE EAST & AFRICA */}
              <div className="language-section-title">Middle East & Africa</div>

              <span
                className="language-option"
                onClick={() => changeLanguage("ar", "UAE")}
              >
                UAE (Arabic)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("ar", "Saudi Arabia")}
              >
                Saudi Arabia (Arabic)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("he", "Israel")}
              >
                Israel (Hebrew)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("tr", "Turkey")}
              >
                Turkey (Turkish)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("sw", "Kenya")}
              >
                Kenya (Swahili)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("am", "Ethiopia")}
              >
                Ethiopia (Amharic)
              </span>
              <span
                className="language-option"
                onClick={() => changeLanguage("zu", "South Africa")}
              >
                South Africa (Zulu)
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
