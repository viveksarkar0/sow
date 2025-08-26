/**
 * Language switcher component with flag icons
 * @param {Object} props - Component props
 * @param {string} props.locale - Current locale (GB/SE)
 * @param {Function} props.onLocaleChange - Locale change handler
 */
export default function LanguageSwitcher({ locale, onLocaleChange }) {
  const Flag = ({ code }) => (
    <img 
      className="flag" 
      alt={`${code} flag`} 
      src={`https://storage.123fakturere.no/public/flags/${code}.png`} 
    />
  )

  const handleToggle = () => {
    const newLocale = locale === 'GB' ? 'SE' : 'GB'
    onLocaleChange(newLocale)
  }

  return (
    <div className="nav">
      <span className="language-label">
        {locale === 'GB' ? 'English' : 'Svenska'}
      </span>
      <button 
        className="pill" 
        onClick={handleToggle}
        aria-label={`Switch to ${locale === 'GB' ? 'Swedish' : 'English'}`}
      >
        <Flag code={locale} />
      </button>
    </div>
  )
}
