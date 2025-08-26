import { ProductsController } from '../controllers/productsController.js'

/**
 * Products routes configuration
 * @param {Object} fastify - Fastify instance
 */
export default async function productsRoutes(fastify) {
  // GET /api/products - Fetch products with optional filters
  fastify.get('/products', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          article: { type: 'string' },
          search: { type: 'string' },
          page: { type: 'number', minimum: 1 },
          limit: { type: 'number', minimum: 1, maximum: 200 }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  article_no: { type: ['string', 'null'] },
                  name: { type: 'string' },
                  description: { type: ['string', 'null'] },
                  in_price: { type: ['number', 'null'] },
                  price: { type: ['number', 'null'] },
                  unit: { type: ['string', 'null'] },
                  in_stock: { type: ['number', 'null'] }
                }
              }
            },
            count: { type: 'number' }
          }
        }
      }
    }
  }, ProductsController.getProducts)

  // PATCH /api/products/:id - Update product
  fastify.patch('/products/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'number' }
        }
      },
      body: {
        type: 'object',
        properties: {
          article_no: { type: ['string', 'null'] },
          name: { type: 'string' },
          description: { type: ['string', 'null'] },
          in_price: { type: ['number', 'null'] },
          price: { type: ['number', 'null'] },
          unit: { type: ['string', 'null'] },
          in_stock: { type: ['number', 'null'] }
        }
      }
    }
  }, ProductsController.updateProduct)

  // PUT /api/products/:id - Update product (alternative method)
  fastify.put('/products/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'number' }
        }
      },
      body: {
        type: 'object',
        properties: {
          article_no: { type: ['string', 'null'] },
          name: { type: 'string' },
          description: { type: ['string', 'null'] },
          in_price: { type: ['number', 'null'] },
          price: { type: ['number', 'null'] },
          unit: { type: ['string', 'null'] },
          in_stock: { type: ['number', 'null'] }
        }
      }
    }
  }, ProductsController.updateProduct)
}
