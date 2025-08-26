/**
 * Search and action toolbar for pricelist
 * @param {Object} props - Component props
 * @param {string} props.articleQuery - Article number search query
 * @param {string} props.productQuery - Product name search query
 * @param {Function} props.onArticleChange - Article search change handler
 * @param {Function} props.onProductChange - Product search change handler
 * @param {Function} props.onSearch - Search execution handler
 */
import { FiSearch, FiPlus, FiPrinter } from 'react-icons/fi'

export default function SearchToolbar({ 
  articleQuery, 
  productQuery, 
  onArticleChange, 
  onProductChange, 
  onSearch 
}) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className="sticky">
      <div className="search-row">
        <input 
          className="input" 
          placeholder="Search Article No …" 
          value={articleQuery} 
          onChange={(e) => onArticleChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input 
          className="input" 
          placeholder="Search Product …" 
          value={productQuery} 
          onChange={(e) => onProductChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="pill" 
          onClick={onSearch}
          aria-label="Search products"
        >
          <FiSearch aria-hidden="true" />
        </button>
      </div>
      <div className="toolbar">
        <button className="pill">
          <FiPlus aria-hidden="true" /> New Product
        </button>
        <button className="pill">
          <FiPrinter aria-hidden="true" /> Print List
        </button>
        <button className="pill">Advanced mode</button>
      </div>
    </div>
  )
}
