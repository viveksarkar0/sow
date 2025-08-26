import { sequelize, Term, Product } from './models/index.js'

/**
 * Comprehensive database seeding for 123 Fakturera
 * Updated to match SOW requirements exactly
 */

const termsData = {
  en: [
    {
      section: 'introduction',
      title: 'Welcome to 123 Fakturera',
      content: 'These terms and conditions outline the rules and regulations for the use of 123 Fakturera\'s services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use 123 Fakturera if you do not agree to take all of the terms and conditions stated on this page.',
      sort_order: 1
    },
    {
      section: 'definitions',
      title: 'Definitions',
      content: 'The following terminology applies to these terms and conditions: "Company" (or "we" or "us" or "our") refers to 123 Fakturera. "You" refers to the user or viewer of our website. "Party", "parties", or "us", refers to both the Company and yourself.',
      sort_order: 2
    },
    {
      section: 'use_license',
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on 123 Fakturera\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.',
      sort_order: 3
    },
    {
      section: 'disclaimer',
      title: 'Disclaimer',
      content: 'The materials on 123 Fakturera\'s website are provided on an \'as is\' basis. 123 Fakturera makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
      sort_order: 4
    },
    {
      section: 'limitations',
      title: 'Limitations',
      content: 'In no event shall 123 Fakturera or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 123 Fakturera\'s website, even if 123 Fakturera or an authorized representative has been notified orally or in writing of the possibility of such damage.',
      sort_order: 5
    }
  ],
  sv: [
    {
      section: 'introduction',
      title: 'Välkommen till 123 Fakturera',
      content: 'Dessa användarvillkor beskriver reglerna för användning av 123 Fakturas tjänster. Genom att komma åt denna webbplats antar vi att du accepterar dessa villkor. Fortsätt inte att använda 123 Fakturera om du inte godkänner alla villkor som anges på denna sida.',
      sort_order: 1
    },
    {
      section: 'definitions',
      title: 'Definitioner',
      content: 'Följande terminologi gäller för dessa villkor: "Företaget" (eller "vi" eller "oss" eller "vårt") hänvisar till 123 Fakturera. "Du" hänvisar till användaren eller besökaren av vår webbplats. "Part", "parter" eller "oss" hänvisar till både företaget och dig själv.',
      sort_order: 2
    },
    {
      section: 'use_license',
      title: 'Användarlicens',
      content: 'Tillstånd ges att tillfälligt ladda ner en kopia av materialet på 123 Fakturas webbplats för personlig, icke-kommersiell tillfällig visning endast. Detta är beviljandet av en licens, inte en överföring av titel, och under denna licens får du inte: ändra eller kopiera materialet; använda materialet för kommersiella ändamål eller för offentlig visning; försöka bakåtkompilera programvara som finns på webbplatsen; ta bort upphovsrätt eller andra äganderättsanteckningar från materialet.',
      sort_order: 3
    },
    {
      section: 'disclaimer',
      title: 'Ansvarsfriskrivning',
      content: 'Materialet på 123 Fakturas webbplats tillhandahålls "som det är". 123 Fakturera ger inga garantier, uttryckliga eller underförstådda, och friskriver sig härmed från och förnekar alla andra garantier inklusive utan begränsning, underförstådda garantier eller villkor för säljbarhet, lämplighet för ett visst ändamål eller icke-intrång i immateriella rättigheter.',
      sort_order: 4
    },
    {
      section: 'limitations',
      title: 'Begränsningar',
      content: 'Under inga omständigheter ska 123 Fakturera eller dess leverantörer vara ansvariga för eventuella skador (inklusive, utan begränsning, skador för förlust av data eller vinst, eller på grund av affärsavbrott) som uppstår från användning eller oförmåga att använda materialet på 123 Fakturas webbplats.',
      sort_order: 5
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
