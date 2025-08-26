/**
 * Individual terms section component with structured content
 * @param {Object} props - Component props
 * @param {Object} props.section - Section data from API
 * @param {number} props.index - Section index for numbering
 */
export default function TermsSection({ section, index }) {
  return (
    <section id={section.section || `section-${index}`} >
      <div
        className="terms-text"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </section>
  )
}
