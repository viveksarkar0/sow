import { Link } from 'react-router-dom'

/**
 * Mobile navigation drawer component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Drawer open state
 * @param {Function} props.onClose - Close handler
 */
export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <aside 
      className={`drawer ${isOpen ? 'open' : ''}`} 
      onClick={onClose}
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <div className="drawer__container">
        <h3 className="drawer__title">Menu</h3>
        <nav className="drawer__nav">
          <Link to="/terms" className="drawer__link">Terms</Link>
          <Link to="/pricelist" className="drawer__link">Price List</Link>
        </nav>
      </div>
    </aside>
  )
}
