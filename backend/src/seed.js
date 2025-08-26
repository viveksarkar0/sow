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
    },
    {
      section: 'full_terms',
      title: 'Full Terms and Registration Notice',
      content: 'By clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.\n\nYou can use the program FOR FREE for 14 days.\n\n123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.\n\nYou have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.\n\nIf we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.\n\nBilling is for one year at a time.\n\nThe price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year\'s use of the program.\n\n(When using the offer price of SEK 99, the one-year period is calculated from registration.)\n\nAll prices are excluding. VAT.\n\nOffer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.\n\nIntermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.\n\nThe annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.\n\nThe introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.\n\nIf you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help you with logo at a cost price.\n\nLicense for the use of 123 Fakturera is of course sold in accordance with applicable laws.\n\nIn order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.\n\nIn connection with the storage of information, the law requires that we provide you with the following information:\n\nIf you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don\'t want to be contacted, just send us an email about it.\n\nYou can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.\n\nFor natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.\n\nYou of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.\n\nIf you wish to contact us, please use the information on this website.\n\nClick on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)\n\nOur experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.\n\nHave a great day!',
      sort_order: 100
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
