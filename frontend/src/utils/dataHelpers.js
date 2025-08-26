/**
 * Data processing utilities
 */

/**
 * Parse string value to number if valid, otherwise return original value
 * @param {string} value - Value to parse
 * @returns {number|string|null} Parsed number or original value
 */
export const parseMaybeNumber = (value) => {
  if (value === '' || value == null) return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : value
}

/**
 * Format currency value for display
 * @param {number} value - Numeric value
 * @param {string} currency - Currency code
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, currency = 'SEK') => {
  if (!value) return ''
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency
  }).format(value)
}

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}
