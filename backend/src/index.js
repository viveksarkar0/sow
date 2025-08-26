import Fastify from 'fastify'
import cors from '@fastify/cors'
import { initializeDatabase } from './models/index.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import termsRoutes from './routes/terms.js'
import productsRoutes from './routes/products.js'

/**
 * Initialize Fastify server with proper configuration
 */
const server = Fastify({ 
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: process.env.NODE_ENV === 'development'
  }
})

/**
 * Register plugins and middleware
 */
await server.register(cors, { 
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || false 
    : true 
})

// Error handling
server.setErrorHandler(errorHandler)
server.setNotFoundHandler(notFoundHandler)

/**
 * Health check endpoint
 */
server.get('/api/health', async (request, reply) => {
  return {
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0'
  }
})

/**
 * Register API routes with prefix
 */
await server.register(termsRoutes, { prefix: '/api' })
await server.register(productsRoutes, { prefix: '/api' })

/**
 * Server startup configuration
 */
const port = Number(process.env.PORT || 3001)
const host = process.env.HOST || '0.0.0.0'

/**
 * Graceful server startup with database initialization
 */
async function start() {
  try {
    // Initialize database connection
    await initializeDatabase()
    
    // Start server (Render provides PORT env)
    await server.listen({ 
      port, 
      host 
    })
    
    server.log.info(`Server running on http://${host}:${port}`)
    
    // Graceful shutdown
    const gracefulShutdown = (signal) => {
      server.log.info(`Received ${signal}, shutting down gracefully`)
      server.close(() => {
        server.log.info('Server closed')
        process.exit(0)
      })
    }
    
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
    process.on('SIGINT', () => gracefulShutdown('SIGINT'))
    
  } catch (error) {
    server.log.error('Failed to start server:', error.message)
    console.error('Full error:', error)
    process.exit(1)
  }
}

start()
