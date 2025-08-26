import { useMemo } from 'react'
import ProductRow from './ProductRow'
import { getResponsiveColumns } from '../../utils/responsive'

/**
 * Responsive product table with dynamic column visibility
 * @param {Object} props - Component props
 * @param {Array} props.products - Product data array
 * @param {Function} props.onProductUpdate - Product update handler
 * @param {string} props.screenSize - Current screen size breakpoint
 */
export default function ProductTable({ products, onProductUpdate, screenSize }) {
  const columns = useMemo(() => getResponsiveColumns(screenSize), [screenSize])

  const columnLabels = {
    arrow: '',
    actions: '',
    article_no: 'Article No.',
    name: 'Product/Service',
    in_price: 'In Price',
    price: 'Price',
    unit: 'Unit',
    in_stock: 'In Stock',
    description: 'Description'
  }

  return (
    <div className="table-container">
      <table className="table" role="table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column} scope="col">
                {columnLabels[column] || column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow
              key={product.id}
              product={product}
              columns={columns}
              onUpdate={onProductUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
