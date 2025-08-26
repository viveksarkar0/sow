/**
 * Validation utilities for request data
 */

/**
 * Validate and normalize locale parameter
 * @param {string} locale - Locale string to validate
 * @returns {string} Validated locale
 * @throws {Error} If locale is invalid
 */
export const validateLocale = (locale) => {
  const validLocales = ['en', 'sv']
  const normalizedLocale = String(locale).slice(0, 2).toLowerCase()
  
  if (!validLocales.includes(normalizedLocale)) {
    throw new Error(`Invalid locale: ${locale}. Must be one of: ${validLocales.join(', ')}`)
  }
  
  return normalizedLocale
}

/**
 * Validate product update data
 * @param {Object} data - Product update data
 * @returns {Object} Validated and sanitized data
 * @throws {Error} If validation fails
 */
export const validateProductUpdate = (data) => {
  const allowedFields = [
    'article_no', 'name', 'description', 
    'in_price', 'price', 'unit', 'in_stock'
  ]
  
  const updates = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (!allowedFields.includes(key)) {
      continue // Skip unknown fields
    }
    
    // Validate numeric fields
    if (['in_price', 'price', 'in_stock'].includes(key)) {
      if (value !== null && value !== '' && !isNaN(Number(value))) {
        updates[key] = Number(value)
      } else if (value === '' || value === null) {
        updates[key] = null
      }
    } else {
      // String fields
      updates[key] = value === null ? null : String(value).trim()
    }
  }
  
  return updates
}

/**
 * Validate pagination parameters
 * @param {Object} query - Query parameters
 * @returns {Object} Validated pagination params
 */
export const validatePagination = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1)
  const limit = Math.min(200, Math.max(1, parseInt(query.limit) || 50))
  const offset = (page - 1) * limit
  
  return { page, limit, offset }
}
