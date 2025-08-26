import { Term } from '../models/index.js'
import { validateLocale } from '../utils/validation.js'

/**
 * Terms controller handling business logic for terms operations
 */
export class TermsController {
  /**
   * Get terms by locale with proper error handling
   * @param {Object} request - Fastify request object
   * @param {Object} reply - Fastify reply object
   * @returns {Promise<Object>} Terms response
   */
  static async getTerms(request, reply) {
    try {
      const locale = validateLocale(request.query.locale || 'en')
      
      const terms = await Term.findAll({ 
        where: { locale }, 
        order: [['sort_order', 'ASC']] 
      })

      const sections = terms.map(term => ({
        id: term.id,
        section: term.section,
        title: term.title,
        content: term.content
      }))

      return reply.send({ 
        success: true,
        sections,
        locale,
        count: sections.length
      })
    } catch (error) {
      request.log.error('Error fetching terms:', error)
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch terms',
        message: error.message
      })
    }
  }
}
