/**
 * Hero section for Terms page with background and branding
 * @param {Object} props - Component props
 * @param {string} props.locale - Current locale for content
 */
export default function TermsHero({ locale }) {
  const content = {
    en: {
      title: 'Terms & Conditions',
      subtitle: 'Please read these terms carefully before using our service'
    },
    sv: {
      title: 'Villkor & Bestämmelser', 
      subtitle: 'Vänligen läs dessa villkor noggrant innan du använder vår tjänst'
    }
  }

  const currentContent = content[locale] || content.en

  return (
    <div className="terms-hero">
      <div className="terms-hero-content">
        <img 
          src="https://storage.123fakturera.se/public/icons/diamond.png" 
          alt="123 Fakturera Logo" 
          className="terms-logo"
        />
        <h1 className="terms-main-title">{currentContent.title}</h1>
        <p className="terms-subtitle">{currentContent.subtitle}</p>
      </div>
    </div>
  )
}
