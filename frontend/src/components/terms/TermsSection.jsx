/**
 * Individual terms section component with structured content
 * @param {Object} props - Component props
 * @param {Object} props.section - Section data from API
 * @param {number} props.index - Section index for numbering
 */
export default function TermsSection({ section, index }) {
  // Safely emphasize a leading "BY" at the start of the first paragraph
  const emphasizeLeadingBY = (html) => {
    if (!html) return html
    try {
      // If content starts with a <p>, bold BY at the start of the first <p>
      const withP = html.replace(/(<p[^>]*>)(\s*)BY\b/i, (_, pOpen, ws) => `${pOpen}${ws}<b>BY</b>`)
      if (withP !== html) return withP
      // Otherwise, if raw text starts with BY, bold it
      return html.replace(/^(\s*)BY\b/i, (_, ws) => `${ws}<b>BY</b>`)
    } catch (_) {
      return html
    }
  }

  const content = emphasizeLeadingBY(section.content)

  return (
    <section id={section.section || `section-${index}`} >
      <div
        className="terms-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
