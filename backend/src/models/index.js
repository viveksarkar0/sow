import { Sequelize, DataTypes } from 'sequelize'

/**
 * Database configuration and model definitions
 */

const url = process.env.DATABASE_URL || 'sqlite:./dev.db'

export const sequelize = new Sequelize(url, { 
  dialect: url.startsWith('postgres') ? 'postgres' : 'sqlite', 
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  storage: url.startsWith('sqlite:') ? url.replace('sqlite:', '') : undefined,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

/**
 * Term model for multilingual content storage
 */
export const Term = sequelize.define('Term', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  locale: { 
    type: DataTypes.STRING(2), 
    allowNull: false,
    validate: {
      isIn: [['en', 'sv']]
    }
  },
  section: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  sort_order: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
}, { 
  tableName: 'terms',
  indexes: [
    {
      fields: ['locale']
    },
    {
      fields: ['sort_order']
    },
    {
      fields: ['locale', 'sort_order']
    }
  ]
})

/**
 * Product model for pricelist data
 */
export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  article_no: { 
    type: DataTypes.STRING, 
    allowNull: true,
    validate: {
      len: [0, 50]
    }
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255]
    }
  },
  description: { 
    type: DataTypes.TEXT,
    allowNull: true
  },
  in_price: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0
    }
  },
  price: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0
    }
  },
  unit: { 
    type: DataTypes.STRING(50),
    allowNull: true
  },
  in_stock: { 
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
}, { 
  tableName: 'products',
  indexes: [
    {
      fields: ['article_no']
    },
    {
      fields: ['name']
    }
  ]
})

/**
 * Initialize database connection and sync models
 */
export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connection established successfully.')
    
    const isSqlite = sequelize.getDialect() === 'sqlite'
    const shouldSyncInProd = process.env.SYNC_ON_START === 'true' || isSqlite
    if (process.env.NODE_ENV !== 'production' || shouldSyncInProd) {
      await sequelize.sync({ alter: true })
      console.log('Database models synchronized.')
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }
}
