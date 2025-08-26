/**
 * API service layer for backend communication
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

/**
 * Generic API request handler with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response
 */
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Request failed:', error)
    throw error
  }
}

/**
 * Terms API methods
 */
export const termsApi = {
  /**
   * Fetch terms by locale
   * @param {string} locale - Language locale (en/sv)
   * @returns {Promise<Object>} Terms data
   */
  getTerms: (locale = 'en') => apiRequest(`/terms?locale=${locale}`),
}

/**
 * Products API methods
 */
export const productsApi = {
  /**
   * Fetch products with optional filters
   * @param {Object} filters - Search filters
   * @returns {Promise<Object>} Products data
   */
  getProducts: (filters = {}) => {
    const params = new URLSearchParams()
    if (filters.article) params.append('article', filters.article)
    if (filters.search) params.append('search', filters.search)
    
    const queryString = params.toString()
    return apiRequest(`/products${queryString ? `?${queryString}` : ''}`)
  },

  /**
   * Update product by ID
   * @param {number} id - Product ID
   * @param {Object} updates - Product updates
   * @returns {Promise<Object>} Updated product
   */
  updateProduct: (id, updates) => apiRequest(`/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates)
  })
}

/**
 * Health check API
 */
export const healthApi = {
  check: () => apiRequest('/health')
}
