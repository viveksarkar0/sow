import { useEffect, useState } from "react";
import TermsSection from "../components/terms/TermsSection";
import "./Terms.css";
import { NavLink } from "react-router-dom";

export default function Terms({ locale = "en", setLocale }) {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchTerms();
  }, [locale]);

  const fetchTerms = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3002/api/terms?locale=${locale}`
      );
      const data = await response.json();
      setTerms(data.sections || []);
    } catch (error) {
      console.error("Failed to fetch terms:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "sv" : "en");
  };

  const goBack = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div className="terms-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="terms-container">
      {/* Navigation Header */}
      <nav className="top-navigation">
        <div className="nav-container">
          {/* Mobile Menu Button */}
          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>

          {/* Logo */}
          <div className="nav-logo">
            <img
              alt="123 Fakturera"
              src="https://storage.123fakturera.se/public/icons/diamond.png"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="nav-menu">
            <NavLink to="/pricelist" className="nav-link">
              {locale === "en" ? "Home" : "Hem"}
            </NavLink>
            <a href="#" className="nav-link">
              {locale === "en" ? "Order" : "Beställ"}
            </a>
            <a href="#" className="nav-link">
              {locale === "en" ? "Our Customers" : "Våra Kunder"}
            </a>
            <a href="#" className="nav-link">
              {locale === "en" ? "About us" : "Om oss"}
            </a>
            <a href="#" className="nav-link">
              {locale === "en" ? "Contact Us" : "Kontakta oss"}
            </a>

            {/* Language Selector */}
            <div className="nav-language" onClick={toggleLanguage}>
              <span className="lang-text">
                {locale === "en" ? "English" : "Svenska"}
              </span>
              <img
                src={
                  locale === "en"
                    ? "https://storage.123fakturere.no/public/flags/GB.png"
                    : "https://storage.123fakturere.no/public/flags/SE.png"
                }
                alt={locale === "en" ? "English" : "Svenska"}
                className="flag-icon"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <div
              className="mobile-menu-overlay"
              onClick={() => setMenuOpen(false)}
            ></div>
            <div className="mobile-menu-content">
              <NavLink to="/" className="mobile-menu-item">
                {locale === "en" ? "Home" : "Hem"}
              </NavLink>
              <NavLink to="/pricelist" className="mobile-menu-item">
                {locale === "en" ? "Price List" : "Prislista"}
              </NavLink>
              <div className="mobile-menu-item">
                {locale === "en" ? "Order" : "Beställ"}
              </div>
              <div className="mobile-menu-item">
                {locale === "en" ? "Our Customers" : "Våra Kunder"}
              </div>
              <div className="mobile-menu-item">
                {locale === "en" ? "About Us" : "Om oss"}
              </div>
              <div className="mobile-menu-item">
                {locale === "en" ? "Contact Us" : "Kontakta oss"}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">
            {locale === "en" ? "Terms" : "Villkor"}
          </h1>
        </div>

           <div className="close-button-container">
          <NavLink to="/pricelist" className="close-button">
            {locale === "en" ? "Close and Go Back" : "Stäng och gå tillbaka"}
          </NavLink>
        </div>

        <div className="terms-content-box">
          <div className="terms-content">
            {terms.map((section, index) => (
              <TermsSection
                key={section.id || index}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="close-button-container">
          <NavLink to="/pricelist" className="close-button">
            {locale === "en" ? "Close and Go Back" : "Stäng och gå tillbaka"}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
