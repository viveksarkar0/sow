import { sequelize, Term, Product } from './models/index.js'

/**
 * Comprehensive database seeding for 123 Fakturera
 * Updated to match SOW requirements exactly
 */
const termsData = {
  en: [
    {
      section: 'full_terms',
      title: 'Full Terms and Registration Notice',
      content: 'By clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.\n\nYou can use the program FOR FREE for 14 days.\n\n123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.\n\n[...]',
      sort_order: 100
    }
  ],
  sv: [
    {
      section: 'full_terms',
      title: 'Fullständiga villkor och registreringsmeddelande',
      content: 'Genom att klicka på Fakturera nu väljer du att registrera dig enligt den information du har fyllt i samt texten på registreringssidan och villkoren här, och du accepterar samtidigt dessa villkor.\n\nDu kan använda programmet GRATIS i 14 dagar.\n\n123 Fakturera är så enkelt och självförklarande att chansen att du behöver support är minimal, men om du ändå skulle behöva hjälp finns vi här för dig, med vårt kontor bemannat större delen av dagen. Efter provperioden fortsätter abonnemanget och kostar 99 SEK exklusive moms per månad, vilket faktureras årsvis. Om du inte vill behålla programmet, avbryt bara provperioden genom att meddela oss innan 14 dagar från registreringen.\n\nNaturligtvis har du rätt att säga upp användningen av programmet utan kostnader, genom att meddela oss via e-post innan 14 dagar från registreringen, att du inte vill fortsätta med programmet, och då betalar du naturligtvis ingenting.\n\nOm vi inte får ett sådant meddelande från dig innan 14 dagar från registreringen, kan beställningen av naturliga skäl inte ändras. Med registrering avses det datum och den tidpunkt då du valde att trycka på knappen Fakturera nu.\n\n[...]',
      sort_order: 100
    }
  ]
}


const productsData = [
  {
    article_no: '1234567890',
    name: 'This is a test product with fifty characters this!',
    description: 'This is the description with fifty characters this',
    in_price: 900500,
    price: 1500800,
    unit: 'kilometers/hour',
    in_stock: 2500600
  },
  {
    article_no: '1234567890',
    name: 'This is a test product with fifty characters this!',
    description: 'High quality product with excellent features',
    in_price: 1500800,
    price: 1500800,
    unit: 'kilometers/hour',
    in_stock: 1500800
  },
  {
    article_no: 'ART000003',
    name: 'Sony DSLR 12345',
    description: 'Professional DSLR camera with advanced features',
    in_price: 15000,
    price: 20000,
    unit: 'piece',
    in_stock: 6
  },
  {
    article_no: 'ART000004',
    name: 'Random product',
    description: 'Miscellaneous product for testing purposes',
    in_price: 1234,
    price: 1800,
    unit: 'piece',
    in_stock: 50
  }
]

// Add 20+ more products to meet SOW requirements
for (let i = 5; i <= 27; i++) {
  productsData.push({
    article_no: `ART${String(i).padStart(6, '0')}`,
    name: `Product ${i} - Professional Equipment`,
    description: `High quality product ${i} with excellent features and reliability`,
    in_price: Math.floor(Math.random() * 50000) + 10000,
    price: Math.floor(Math.random() * 80000) + 15000,
    unit: ['piece', 'kg', 'meter', 'liter', 'hour'][Math.floor(Math.random() * 5)],
    in_stock: Math.floor(Math.random() * 1000) + 10
  })
}

/**
 * Seed the database with initial data
 */
export const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...')
    
    // Clear existing data
    await Term.destroy({ where: {} })
    await Product.destroy({ where: {} })
    
    // Seed terms data
    console.log('Seeding terms data...')
    for (const locale of Object.keys(termsData)) {
      for (const termData of termsData[locale]) {
        await Term.create({
          locale,
          ...termData
        })
      }
    }
    
    // Seed products data
    console.log('Seeding products data...')
    for (const productData of productsData) {
      await Product.create(productData)
    }
    
    console.log('Database seeding completed successfully!')
    
    // Log counts
    const termCount = await Term.count()
    const productCount = await Product.count()
    console.log(`Seeded ${termCount} terms and ${productCount} products`)
    
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

/**
 * Main execution
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  const { initializeDatabase } = await import('./models/index.js')
  
  try {
    await initializeDatabase()
    await seedDatabase()
    process.exit(0)
  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  }
}
