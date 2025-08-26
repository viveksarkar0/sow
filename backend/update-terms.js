import { Term, sequelize, initializeDatabase } from './src/models/index.js'

/**
 * Update terms with new content
 */
const updateTerms = async () => {
  try {
    await initializeDatabase()
    
    // Clear existing terms
    await Term.destroy({ where: {} })
    console.log('Cleared existing terms')
    
    // Insert new English terms
    const englishTerms = [
      {
        locale: 'en',
        section: 'registration-terms',
        title: 'Registration and Trial Terms',
        content: `<p><strong>BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.</strong></p>

<p>You can use the program <strong>FOR FREE for 14 days</strong>.</p>

<p>123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs <strong>SEK 99 excluding VAT per month</strong>, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.</p>

<p>You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.</p>

<p>If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.</p>`,
        sort_order: 1
      },
      {
        locale: 'en',
        section: 'billing-pricing',
        title: 'Billing and Pricing',
        content: `<p>Billing is for one year at a time.</p>

<p>The price for 123 Fakturera (<strong>offer price SEK 99 per month / ordinary price SEK 159 per month</strong>) is for the annual fee Start for one year's use of the program.</p>

<p>(When using the offer price of SEK 99, the one-year period is calculated from registration.)</p>

<p><strong>All prices are excluding VAT.</strong></p>

<p>Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.</p>

<p>Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.</p>`,
        sort_order: 2
      },
      {
        locale: 'en',
        section: 'subscription-renewal',
        title: 'Subscription and Renewal Terms',
        content: `<p>The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.</p>

<p>The introductory offer (<strong>SEK 99 per month</strong>) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.</p>

<p>If you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. <strong>Failure to pay the invoice or late payment does not give the right to cancel the order.</strong> We are happy to help you with logo at a cost price.</p>

<p>License for the use of 123 Fakturera is of course sold in accordance with applicable laws.</p>`,
        sort_order: 3
      },
      {
        locale: 'en',
        section: 'data-privacy',
        title: 'Data Storage and Privacy',
        content: `<p>In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.</p>

<p>In connection with the storage of information, the law requires that we provide you with the following information:</p>

<p>If you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don't want to be contacted, just send us an email about it.</p>

<p>You can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.</p>`,
        sort_order: 4
      },
      {
        locale: 'en',
        section: 'data-permissions',
        title: 'Data Processing Permissions',
        content: `<p>For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.</p>`,
        sort_order: 5
      },
      {
        locale: 'en',
        section: 'user-rights',
        title: 'Your Rights and Legal Information',
        content: `<p>You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. <strong>The laws of Ireland are the applicable laws.</strong> Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.</p>

<p>If you wish to contact us, please use the information on this website.</p>

<p><strong>Click on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)</strong></p>

<p>Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.</p>

<p><strong>Have a great day!</strong></p>`,
        sort_order: 6
      }
    ]
    
    // Insert new Swedish terms
    const swedishTerms = [
      {
        locale: 'sv',
        section: 'registration-terms',
        title: 'Registrerings- och Provvillkor',
        content: `<p><strong>GENOM att klicka på Fakturera Nu väljer du att registrera dig enligt den information du har skrivit in och texten på registreringssidan och villkoren här, och du accepterar samtidigt villkoren här.</strong></p>

<p>Du kan använda programmet <strong>GRATIS i 14 dagar</strong>.</p>

<p>123 Fakturera är så enkelt och självförklarande att chansen att du behöver support är minimal, men om du skulle behöva support finns vi här för dig, med vårt kontor bemannat större delen av dagen. Efter provperioden fortsätter prenumerationen och kostar <strong>99 SEK exklusive moms per månad</strong>, som faktureras årligen. Om du inte vill behålla programmet, avbryt bara provperioden genom att säga upp dig innan 14 dagar från registreringen.</p>

<p>Du har naturligtvis rätt att avsluta användningen av programmet utan några kostnader, genom att meddela oss via e-post innan 14 dagar från registreringen att du inte vill fortsätta med programmet, och då betalar du naturligtvis ingenting.</p>`,
        sort_order: 1
      },
      {
        locale: 'sv',
        section: 'billing-pricing',
        title: 'Fakturering och Prissättning',
        content: `<p>Fakturering sker för ett år i taget.</p>

<p>Priset för 123 Fakturera (<strong>erbjudandepris 99 SEK per månad / ordinarie pris 159 SEK per månad</strong>) är för årsavgiften Start för ett års användning av programmet.</p>

<p>(Vid användning av erbjudandepriset 99 SEK beräknas ettårsperioden från registreringen.)</p>

<p><strong>Alla priser är exklusive moms.</strong></p>`,
        sort_order: 2
      },
      {
        locale: 'sv',
        section: 'subscription-renewal',
        title: 'Prenumerations- och Förnyelsevillkor',
        content: `<p>Årsavgiften är på kontinuerlig basis, men om du inte vill fortsätta använda programmet behöver du bara säga upp dig trettio dagar före början av nästa ettårsperiod.</p>

<p>Introduktionserbjudandet (<strong>99 SEK per månad</strong>) gäller för årsavgiften Start för det första året. Efter det första året faktureras det ordinarie priset.</p>`,
        sort_order: 3
      },
      {
        locale: 'sv',
        section: 'data-privacy',
        title: 'Datalagring och Integritet',
        content: `<p>För att kunna hjälpa dig enklare och ge dig support, samt för att följa lagarna, måste vi av naturliga skäl lagra din information.</p>

<p>I samband med lagring av information kräver lagen att vi ger dig följande information:</p>

<p>Om du beställer som privatperson har du rätt att ångra dig enligt lag. Din information lagras så att vi kan hjälpa dig, etc.</p>`,
        sort_order: 4
      },
      {
        locale: 'sv',
        section: 'user-rights',
        title: 'Dina Rättigheter och Juridisk Information',
        content: `<p>Du har naturligtvis rätt att begära tillgång till, ändring och radering av den information vi har om dig. Du har också rätt att begära begränsning av databehandling och att invända mot databehandling samt rätten till dataportabilitet.</p>

<p><strong>Irlands lagar är de tillämpliga lagarna.</strong></p>

<p><strong>Klicka på Fakturera Nu för att registrera dig enligt den information du har angett och villkoren här.</strong></p>

<p><strong>Ha en bra dag!</strong></p>`,
        sort_order: 6
      }
    ]
    
    // Insert all terms
    await Term.bulkCreate([...englishTerms, ...swedishTerms])
    console.log('Successfully inserted new terms data')
    
    // Verify the data
    const count = await Term.count()
    console.log(`Total terms in database: ${count}`)
    
    process.exit(0)
  } catch (error) {
    console.error('Error updating terms:', error)
    process.exit(1)
  }
}

updateTerms()
