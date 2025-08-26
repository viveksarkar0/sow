-- 123Fakturera SOW Database Schema
-- PostgreSQL compatible schema for Terms and Products

-- Terms table for multilingual content
CREATE TABLE IF NOT EXISTS terms (
    id SERIAL PRIMARY KEY,
    locale VARCHAR(2) NOT NULL CHECK (locale IN ('en', 'sv')),
    section VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table for pricelist data
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    article_no VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    in_price DECIMAL(10,2),
    price DECIMAL(10,2),
    unit VARCHAR(50),
    in_stock INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_terms_locale ON terms(locale);
CREATE INDEX IF NOT EXISTS idx_terms_sort_order ON terms(sort_order);
CREATE INDEX IF NOT EXISTS idx_products_article_no ON products(article_no);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);

-- Sample data insertion (can be run after table creation)
-- This matches the seed.js data structure

-- English Terms
INSERT INTO terms (locale, section, title, content, sort_order) VALUES
('en', 'terms-of-service', 'Terms of Service', 
 '<p>Welcome to 123 Fakturera. By using our invoicing service, you agree to these terms and conditions.</p>
  <h4>1. Service Description</h4>
  <p>123 Fakturera provides online invoicing and business management tools to help you manage your business finances efficiently.</p>
  <h4>2. User Responsibilities</h4>
  <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
  <h4>3. Payment Terms</h4>
  <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.</p>
  <h4>4. Data Security</h4>
  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>', 1),

('en', 'privacy-policy', 'Privacy Policy',
 '<p>This Privacy Policy describes how 123 Fakturera collects, uses, and protects your information.</p>
  <h4>Information We Collect</h4>
  <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
  <h4>How We Use Your Information</h4>
  <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
  <h4>Information Sharing</h4>
  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
  <h4>Data Retention</h4>
  <p>We retain your information for as long as your account is active or as needed to provide you services and comply with legal obligations.</p>', 2),

('en', 'billing-terms', 'Billing Terms',
 '<p>These billing terms apply to all subscription services provided by 123 Fakturera.</p>
  <h4>Subscription Fees</h4>
  <p>Subscription fees are charged in advance for each billing period. You authorize us to charge your payment method for all fees.</p>
  <h4>Free Trial</h4>
  <p>We may offer a free trial period. If you don''t cancel before the trial ends, you''ll be charged for the subscription.</p>
  <h4>Refunds</h4>
  <p>Refunds are generally not provided, except where required by applicable law or at our sole discretion.</p>', 3);

-- Swedish Terms
INSERT INTO terms (locale, section, title, content, sort_order) VALUES
('sv', 'terms-of-service', 'Användarvillkor',
 '<p>Välkommen till 123 Fakturera. Genom att använda vår faktureringstjänst godkänner du dessa villkor.</p>
  <h4>1. Tjänstebeskrivning</h4>
  <p>123 Fakturera tillhandahåller onlinefakturering och företagshanteringsverktyg för att hjälpa dig att hantera din företagsekonomi effektivt.</p>
  <h4>2. Användaransvar</h4>
  <p>Du är ansvarig för att upprätthålla sekretessen för ditt konto och lösenord. Du samtycker till att ta ansvar för alla aktiviteter som sker under ditt konto.</p>
  <h4>3. Betalningsvillkor</h4>
  <p>Prenumerationsavgifter debiteras i förväg månadsvis eller årligen. Alla avgifter är icke-återbetalningsbara utom när lagen kräver det.</p>
  <h4>4. Datasäkerhet</h4>
  <p>Vi implementerar lämpliga säkerhetsåtgärder för att skydda din personliga information mot obehörig åtkomst, ändring, avslöjande eller förstörelse.</p>', 1),

('sv', 'privacy-policy', 'Integritetspolicy',
 '<p>Denna integritetspolicy beskriver hur 123 Fakturera samlar in, använder och skyddar din information.</p>
  <h4>Information vi samlar in</h4>
  <p>Vi samlar in information som du ger direkt till oss, till exempel när du skapar ett konto, använder våra tjänster eller kontaktar oss för support.</p>
  <h4>Hur vi använder din information</h4>
  <p>Vi använder informationen vi samlar in för att tillhandahålla, underhålla och förbättra våra tjänster, behandla transaktioner och kommunicera med dig.</p>
  <h4>Informationsdelning</h4>
  <p>Vi säljer, byter eller överför inte på annat sätt din personliga information till tredje part utan ditt samtycke, förutom som beskrivs i denna policy.</p>
  <h4>Datalagring</h4>
  <p>Vi behåller din information så länge ditt konto är aktivt eller som behövs för att tillhandahålla tjänster och följa juridiska förpliktelser.</p>', 2),

('sv', 'billing-terms', 'Faktureringsvillkor',
 '<p>Dessa faktureringsvillkor gäller för alla prenumerationstjänster som tillhandahålls av 123 Fakturera.</p>
  <h4>Prenumerationsavgifter</h4>
  <p>Prenumerationsavgifter debiteras i förväg för varje faktureringsperiod. Du auktoriserar oss att debitera din betalningsmetod för alla avgifter.</p>
  <h4>Gratis provperiod</h4>
  <p>Vi kan erbjuda en gratis provperiod. Om du inte avbryter innan provperioden slutar debiteras du för prenumerationen.</p>
  <h4>Återbetalningar</h4>
  <p>Återbetalningar lämnas i allmänhet inte, förutom där det krävs enligt tillämplig lag eller efter vårt eget gottfinnande.</p>', 3);
