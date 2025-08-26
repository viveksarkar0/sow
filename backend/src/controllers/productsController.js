import { Product } from '../models/index.js'
import { validateProductUpdate } from '../utils/validation.js'

/**
 * Products controller handling business logic for product operations
 */
export class ProductsController {
  /**
   * Get products with optional filtering
   * @param {Object} request - Fastify request object
   * @param {Object} reply - Fastify reply object
   * @returns {Promise<Object>} Products response
   */
  static async getProducts(request, reply) {
    try {
      const { article = '', search = '' } = request.query
      const where = {}
      
      if (article) {
        where.article_no = article
      }

      const products = await Product.findAll({ 
        where, 
        order: [['id', 'ASC']], 
        limit: 200 
      })

      // Apply search filter if provided
      const filteredProducts = search 
        ? products.filter(product => 
            (product.name || '').toLowerCase().includes(search.toLowerCase())
          )
        : products

      return reply.send({
        success: true,
        items: filteredProducts,
        count: filteredProducts.length,
        filters: { article, search }
      })
    } catch (error) {
      request.log.error('Error fetching products:', error)
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch products',
        message: error.message
      })
    }
  }

  /**
   * Update product by ID
   * @param {Object} request - Fastify request object
   * @param {Object} reply - Fastify reply object
   * @returns {Promise<Object>} Updated product response
   */
  static async updateProduct(request, reply) {
    try {
      const { id } = request.params
      const updates = validateProductUpdate(request.body)

      // Check if product exists
      const existingProduct = await Product.findByPk(id)
      if (!existingProduct) {
        return reply.status(404).send({
          success: false,
          error: 'Product not found',
          id: parseInt(id)
        })
      }

      // Update product
      await Product.update(updates, { where: { id } })
      const updatedProduct = await Product.findByPk(id)

      return reply.send({
        success: true,
        product: updatedProduct,
        updated_fields: Object.keys(updates)
      })
    } catch (error) {
      request.log.error('Error updating product:', error)
      return reply.status(400).send({
        success: false,
        error: 'Failed to update product',
        message: error.message
      })
    }
  }
}
