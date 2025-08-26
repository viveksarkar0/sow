import EditableCell from './EditableCell'
import { FiChevronRight, FiMoreHorizontal } from 'react-icons/fi'

/**
 * Individual product row with editable cells
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {Array} props.columns - Visible columns for current breakpoint
 * @param {Function} props.onUpdate - Update handler
 */
export default function ProductRow({ product, columns, onUpdate }) {
  const handleCellUpdate = (field, value) => {
    onUpdate(product.id, { [field]: value })
  }

  const renderCell = (column) => {
    switch (column) {
      case 'arrow':
        return <span className="arrow-cell"><FiChevronRight aria-hidden="true" /></span>
      case 'actions':
        return (
          <button 
            className="ellipsis"
            aria-label="More actions"
          >
            <FiMoreHorizontal aria-hidden="true" />
          </button>
        )
      default:
        return (
          <EditableCell
            value={product[column] ?? ''}
            field={column}
            onUpdate={handleCellUpdate}
            type={['in_price', 'price', 'in_stock'].includes(column) ? 'number' : 'text'}
          />
        )
    }
  }

  return (
    <tr className="row">
      {columns.map(column => (
        <td key={column}>
          {renderCell(column)}
        </td>
      ))}
    </tr>
  )
}
