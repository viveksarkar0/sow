import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { FiMenu } from 'react-icons/fi'

/**
 * Main application header with navigation and language switching
 * @param {Object} props - Component props
 * @param {boolean} props.isDrawerOpen - Mobile menu state
 * @param {Function} props.setIsDrawerOpen - Drawer toggle handler
 * @param {string} props.locale - Current locale (GB/SE)
 * @param {Function} props.setLocale - Locale change handler
 */
function Header({ isDrawerOpen, setIsDrawerOpen, locale, setLocale }) {
  return (
    <header className="appbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          className="menu-btn" 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle menu"
        >
          <FiMenu aria-hidden="true" />
        </button>
        
        <div className="user-profile">
          <div className="user-avatar">JA</div>
          <div className="user-info">
            <div className="user-name">John Andre</div>
            <div className="user-company">Storfjord AS</div>
          </div>
        </div>
        
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Norsk Bokmål</span>
        <LanguageSwitcher locale={locale} setLocale={setLocale} />
      </div>
    </header>
  );
}

export default Header;
