/**
 * Reusable loading spinner component
 * @param {Object} props - Component props
 * @param {string} props.message - Loading message to display
 * @param {string} props.size - Size variant (small, medium, large)
 */
export default function LoadingSpinner({ message = 'Loading...', size = 'medium' }) {
  return (
    <div className={`loading-spinner loading-spinner--${size}`}>
      <div className="loading-spinner__icon" />
      <p className="loading-spinner__message">{message}</p>
    </div>
  )
}
