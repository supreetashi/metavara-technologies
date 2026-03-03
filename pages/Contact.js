import React, { useState, useEffect } from "react";
import "../styles/Pages.css";
import "../styles/Contact.css";
import apiService from "../services/api";

const TRANSLITERATE_LANG_MAP = {
  hi: "hi", // Hindi
  te: "te", // Telugu
  ta: "ta", // Tamil
  kn: "kn", // Kannada
  ml: "ml", // Malayalam
  mr: "mr", // Marathi
  bn: "bn", // Bengali
  ur: "ur", // Urdu
  pa: "pa", // Punjabi
  gu: "gu", // Gujarati
  ar: "ar", // Arabic
  he: "he", // Hebrew
  ja: "ja", // Japanese
  ko: "ko", // Korean
  "zh-CN": "zh", // Chinese (Simplified)
  th: "th", // Thai
  vi: "vi", // Vietnamese
  tr: "tr", // Turkish
  am: "am", // Amharic
  el: "el", // Greek
};

const transliterateText = async (text, googleTranslateLang) => {
  const apiLang = TRANSLITERATE_LANG_MAP[googleTranslateLang];

  if (!apiLang || !text || !text.trim()) return text;

  const words = text.trim().split(/\s+/);
  try {
    const transliteratedWords = await Promise.all(
      words.map(async (word) => {
        const url = `https://inputtools.google.com/request?text=${encodeURIComponent(word)}&itc=${apiLang}-t-i0-und&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;
        const res = await fetch(url);
        const data = await res.json();
        if (
          data[0] === "SUCCESS" &&
          data[1] &&
          data[1][0] &&
          data[1][0][1] &&
          data[1][0][1][0]
        ) {
          return data[1][0][1][0];
        }
        return word;
      }),
    );
    return transliteratedWords.join(" ");
  } catch (err) {
    console.error("Transliteration failed:", err);
    return text;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState("en");
  const [isTransliterating, setIsTransliterating] = useState({
    name: false,
    message: false,
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("siteLanguage");
    if (savedLang) setLang(savedLang);

    const handleLangChange = () => {
      const updated = localStorage.getItem("siteLanguage");
      if (updated) setLang(updated);
    };

    window.addEventListener("languageChanged", handleLangChange);
    window.addEventListener("storage", handleLangChange);

    return () => {
      window.removeEventListener("languageChanged", handleLangChange);
      window.removeEventListener("storage", handleLangChange);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTransliterateKeyDown = async (e, fieldName) => {
    if (e.key !== " ") return;
    if (!TRANSLITERATE_LANG_MAP[lang]) return;

    const currentValue = formData[fieldName];
    if (!currentValue || !currentValue.trim()) return;

    const lastSpaceIndex = currentValue.lastIndexOf(" ");
    const lastWord =
      lastSpaceIndex === -1
        ? currentValue
        : currentValue.slice(lastSpaceIndex + 1);
    if (!lastWord.trim()) return;

    e.preventDefault();

    setIsTransliterating((prev) => ({ ...prev, [fieldName]: true }));
    const convertedWord = await transliterateText(lastWord, lang);
    const prefix =
      lastSpaceIndex === -1 ? "" : currentValue.slice(0, lastSpaceIndex + 1);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prefix + convertedWord + " ",
    }));
    setIsTransliterating((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleTransliterateBlur = async (fieldName) => {
    const currentValue = formData[fieldName];
    if (!currentValue || !currentValue.trim()) return;
    if (!TRANSLITERATE_LANG_MAP[lang]) return;

    const lastSpaceIndex = currentValue.lastIndexOf(" ");
    const lastWord =
      lastSpaceIndex === -1
        ? currentValue
        : currentValue.slice(lastSpaceIndex + 1);
    if (!lastWord.trim()) return;

    setIsTransliterating((prev) => ({ ...prev, [fieldName]: true }));
    const convertedWord = await transliterateText(lastWord, lang);
    const prefix =
      lastSpaceIndex === -1 ? "" : currentValue.slice(0, lastSpaceIndex + 1);
    setFormData((prev) => ({ ...prev, [fieldName]: prefix + convertedWord }));
    setIsTransliterating((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiService.submitLead(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", reason: "general", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Failed to submit lead:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const isNonLatinLang = Boolean(TRANSLITERATE_LANG_MAP[lang]);

  return (
    <div className="content-section">
      <h1>Contact Us</h1>
      <p>Get in touch with us. We'd love to hear from you!</p>

      <div className="contact-main-grid">
        <div className="contact-left-column">
          <div className="contact-info-box">
            <h2>Contact Information</h2>
            <p>
              <strong>📞 Phone:</strong>{" "}
              <a
                href="tel:+919538027892"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +91 9538027892
              </a>
            </p>
            <p>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:mvt.hr@metavaratechnologies.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                mvt.hr@metavaratechnologies.com
              </a>
            </p>
          </div>

          <div className="address-box">
            <h2>Our Address</h2>
            <p>HNO:01 SRIMAN NILAYAM</p>
            <p>MEENAKSHI LAYOUT</p>
            <p>SIDDAPURA</p>
            <p>Bangalore, Karnataka – 560066</p>
            <p>India</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <p>✓ Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={(e) => handleTransliterateKeyDown(e, "name")}
                  onBlur={() => handleTransliterateBlur("name")}
                  required
                  placeholder={
                    isNonLatinLang
                      ? "Type phonetically, press Space to convert"
                      : "Your Name"
                  }
                  style={isTransliterating.name ? { opacity: 0.6 } : {}}
                />
                {isNonLatinLang && (
                  <small style={{ color: "#888", fontSize: "0.75rem" }}>
                    {isTransliterating.name
                      ? "⏳ Converting..."
                      : '💡 Type phonetically (e.g. "hello") and press Space to convert each word'}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">Reason *</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="service">Request for Service</option>
                  <option value="career">Join Metavara Technologies</option>
                  <option value="vendor">Vendor Registration</option>
                  <option value="other">Other Requests</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={(e) => handleTransliterateKeyDown(e, "message")}
                  onBlur={() => handleTransliterateBlur("message")}
                  required
                  rows="5"
                  placeholder={
                    isNonLatinLang
                      ? "Type phonetically, press Space to convert each word"
                      : "Your message here..."
                  }
                  style={isTransliterating.message ? { opacity: 0.6 } : {}}
                />
                {isNonLatinLang && (
                  <small style={{ color: "#888", fontSize: "0.75rem" }}>
                    {isTransliterating.message
                      ? "⏳ Converting..."
                      : "💡 Type phonetically — press Space after each word to convert"}
                  </small>
                )}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
