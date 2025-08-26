
import { FiMenu } from 'react-icons/fi'

export default function Header({
  locale = "en",
  onToggleSidebar,
  onToggleLocale,
}) {
  return (
    <div className="header">
      <div className="left-section">
        {/* Avatar + User Info (hidden on small screens) */}
        <div className="user-block">
          <div className="avatar-wrapper">
            <div className="avatar-icon">JA</div>
            <span className="status-dot"></span>
          </div>
          <div className="user-info">
            <span className="user-name">John Andre</span>
            <span className="user-company">Storfjord AS</span>
          </div>
        </div>

        {/* Hamburger (shown only on small screens) */}
        <button
          className="hamburger"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FiMenu aria-hidden="true" />
        </button>
      </div>

      <div className="right-section">
        <button
          type="button"
          className="country-flag"
          onClick={onToggleLocale}
          aria-label={
            locale === "en" ? "Switch to Svenska" : "Switch to English"
          }
          title={locale === "en" ? "Switch to Svenska" : "Switch to English"}
        >
          <span className="lang-label">
            {locale === "en" ? "English" : "Svenska"}
          </span>
          <img
            src={
              locale === "en"
                ? "https://storage.123fakturere.no/public/flags/GB.png"
                : "https://storage.123fakturere.no/public/flags/SE.png"
            }
            alt={locale === "en" ? "English" : "Svenska"}
            className="flag-img"
          />
        </button>
      </div>
    </div>
  );
}
