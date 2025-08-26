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
      content: `BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.

You can use the program FOR FREE for 14 days.

123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.

You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.

If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.

Billing is for one year at a time.

The price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year's use of the program.

(When using the offer price of SEK 99, the one-year period is calculated from registration.)

All prices are excluding. VAT.

Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.

Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.

The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.

The introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.

If you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help you with logo at a cost price.

License for the use of 123 Fakturera is of course sold in accordance with applicable laws.

In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.

In connection with the storage of information, the law requires that we provide you with the following information:

If you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don't want to be contacted, just send us an email about it.

You can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.

For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.

You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.

If you wish to contact us, please use the information on this website.

Click on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)

Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.

Have a great day!`,
      sort_order: 100
    }
  ],
  sv: [
    {
      section: 'full_terms',
      title: 'Fullständiga villkor och registreringsmeddelande',
      content: `Genom att klicka på Fakturera nu väljer du att registrera dig enligt den information du har fyllt i och texten på registreringssidan samt villkoren här, och du accepterar samtidigt dessa villkor.

Du kan använda programmet GRATIS i 14 dagar.

123 Fakturera är så enkelt och självförklarande att chansen att du behöver support är minimal, men om du ändå skulle behöva hjälp finns vi här för dig, med vårt kontor bemannat större delen av dagen. Efter provperioden fortsätter abonnemanget och kostar 99 SEK exklusive moms per månad, vilket faktureras årsvis. Om du inte vill behålla programmet, avbryt bara provperioden genom att meddela oss innan 14 dagar från registreringen.

Du har naturligtvis rätt att säga upp användningen av programmet utan några kostnader, genom att meddela oss via e-post innan 14 dagar från registreringen, att du inte vill fortsätta med programmet, och då betalar du naturligtvis ingenting.

Om vi inte får ett sådant meddelande från dig innan 14 dagar från registreringen, kan beställningen av naturliga skäl inte ändras. Med registrering avses det datum och den tidpunkt då du valde att trycka på knappen Fakturera nu.

Fakturering sker ett år i taget.

Priset för 123 Fakturera (erbjudandepris 99 SEK per månad / ordinarie pris 159 SEK per månad) gäller årsavgiften Start för ett års användning av programmet.

(Vid användning av erbjudandepriset 99 SEK beräknas ettårsperioden från registreringen.)

Alla priser är exklusive moms.

Offerthantering, Lagerkontroll, Medlemsfakturering, Multiuser-version och engelskt utskriftsstöd är (eller kan vara) tilläggsmoduler som kan beställas senare.

Förmedling samt fakturering kan ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. I framtiden kan vi välja att samarbeta med ett annat företag för t.ex. förmedling och fakturering. Kundrelationen är dock med oss. Betalning sker till det företag som fakturan kommer från.

Årsavgiften löper vidare, men om du inte önskar fortsätta använda programmet behöver du bara säga upp det trettio dagar före starten av nästa ettårsperiod.

Introduktionserbjudandet (99 SEK per månad) gäller årsavgiften Start för det första året. Efter första året faktureras ordinarie pris, vilket för närvarande är 159 kr per månad för årsavgift Start, 300 kr per månad för årsavgift Fjärrstyrning och 333 kr per månad för årsavgift Pro. Efter ett år faktureras årsavgift Fjärrstyrning som standard, men du kan välja Start eller Pro genom att meddela oss när som helst före förfallodagen.

Om du väljer att behålla programmet genom att inte meddela oss via e-post inom 14 dagar från registreringen att du inte vill fortsätta med programmet, accepterar du att betala fakturan för din beställning. Underlåtenhet att betala fakturan eller sen betalning ger inte rätt att annullera beställningen. Vi hjälper dig gärna med logotyp till självkostnadspris.

Licens för användning av 123 Fakturera säljs naturligtvis i enlighet med gällande lagar.

För att kunna hjälpa dig enklare och ge dig support, samt för att följa lagar, måste vi av naturliga skäl lagra din information.

I samband med lagring av information kräver lagen att vi lämnar dig följande information:

Om du beställer som privatperson har du rätt att ångra enligt lag. Din information lagras så att vi kan hjälpa dig m.m. Vi använder den för att kunna hjälpa dig om du behöver hjälp, följa lagar om bokföring m.m. Vid uppgraderingar och liknande kan vi skicka dig erbjudanden och information om våra produkter och tjänster via e-post eller liknande. Du kan bli kontaktad via e-post, post och telefon. Om du inte vill bli kontaktad skickar du oss bara ett e-postmeddelande om det.

Du kan när som helst be att inte få information om uppgraderingar via e-post, brev eller liknande, och vi kommer naturligtvis att respektera det. Du skickar en sådan begäran till oss via e-post, post eller liknande.

Av naturliga skäl måste vi lagra, behandla och flytta dina uppgifter. Din information lagras tills vidare. Du ger oss tillåtelse att lagra, behandla och flytta dina uppgifter, samt att skicka dig erbjudanden och liknande via e-post, brev och liknande, och berätta för andra att du är kund. På grund av hur det fungerar med programvara behöver tillåtelse även ges till andra parter. Tillåtelsen ges därför till oss, samt till de företag och/eller personer som äger programvaran, källkoden, webbplatsen m.m. Den ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar oss. Den ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar de företag (om några) som äger eller kommer att äga programvaran, källkoden, webbplatsen m.m. Den ges också till nuvarande och framtida personer (om några) som äger eller kommer att äga programvaran, källkoden, webbplatsen m.m. Detta gäller både nuvarande och framtida produkter och tjänster. Den ges också till ett annat företag (som K-Soft Sverige AB) som vi kan använda för att skicka/sälja produkter, uppgraderingar m.m., antingen genom förmedling eller på annat sätt.

Du har naturligtvis rätt att begära tillgång till, ändring och radering av den information vi har om dig. Du har också rätt att begära begränsning av databehandling, invända mot databehandling och rätt till dataportabilitet. Du har rätt att klaga till tillsynsmyndigheten. Du hittar mer juridisk information om oss här. Irlands lagar är tillämpliga lagar. Att lägga en beställning är naturligtvis helt frivilligt. Självklart använder vi ingen automatiserad profilering eller beslut.

Om du vill kontakta oss, använd informationen på denna webbplats.

Klicka på Fakturera nu för att registrera dig enligt den information du har fyllt i och villkoren här. (Datum och tid för registreringen registreras automatiskt i våra register.)

Vår erfarenhet är att våra kunder är mycket nöjda med vårt sätt att arbeta och hoppas och tror att detta även kommer att vara din erfarenhet.

Ha en bra dag!`,
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
