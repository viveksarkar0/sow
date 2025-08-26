import { TermsController } from '../controllers/termsController.js'

/**
 * Terms routes configuration
 * @param {Object} fastify - Fastify instance
 */
export default async function termsRoutes(fastify) {
  // GET /api/terms - Fetch terms by locale
  fastify.get('/terms', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          locale: { type: 'string', enum: ['en', 'sv'] }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            sections: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  section: { type: 'string' },
                  title: { type: 'string' },
                  content: { type: 'string' }
                }
              }
            },
            locale: { type: 'string' },
            count: { type: 'number' }
          }
        }
      }
    }
  }, TermsController.getTerms)
}
