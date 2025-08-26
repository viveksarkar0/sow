/**
 * Global error handling middleware for Fastify
 */

/**
 * Error handler with proper logging and response formatting
 * @param {Error} error - Error object
 * @param {Object} request - Fastify request
 * @param {Object} reply - Fastify reply
 */
export const errorHandler = (error, request, reply) => {
  const { statusCode = 500, message } = error

  // Log error details
  request.log.error({
    error: {
      message: error.message,
      stack: error.stack,
      statusCode
    },
    request: {
      method: request.method,
      url: request.url,
      headers: request.headers,
      params: request.params,
      query: request.query
    }
  }, 'Request error occurred')

  // Send formatted error response
  reply.status(statusCode).send({
    success: false,
    error: {
      message: statusCode >= 500 ? 'Internal server error' : message,
      statusCode,
      timestamp: new Date().toISOString()
    },
    ...(process.env.NODE_ENV === 'development' && {
      debug: {
        stack: error.stack,
        originalMessage: message
      }
    })
  })
}

/**
 * Not found handler for undefined routes
 * @param {Object} request - Fastify request
 * @param {Object} reply - Fastify reply
 */
export const notFoundHandler = (request, reply) => {
  reply.status(404).send({
    success: false,
    error: {
      message: 'Route not found',
      statusCode: 404,
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString()
    }
  })
}
