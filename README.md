# 123Fakturera SOW Mini App

📑 **Professional Implementation of 123Fakturera Terms & Pricelist Module**

A responsive web application replicating the 123Fakturera Terms & Conditions page and implementing a fully functional Pricelist module with PostgreSQL persistence.

## 🎯 Project Overview

This mini-app delivers:
- **Terms & Conditions Page**: Pixel-perfect replica of https://online.123fakturera.se/terms/ with multilingual support
- **Pricelist Module**: Responsive data table with 27+ editable products, real-time database persistence
- **Full Responsiveness**: Desktop, tablet, phone landscape, and phone portrait layouts
- **Modern Tech Stack**: Vite + React + Fastify + PostgreSQL

## ✨ Features Implemented

### Terms & Conditions Page
- ✅ Exact visual replica of 123Fakturera design
- ✅ Multilingual content (🇬🇧 English / 🇸🇪 Swedish) from PostgreSQL
- ✅ Background image integration with provided assets
- ✅ Logo placement and branding elements
- ✅ Responsive design across all breakpoints
- ✅ Smooth scrolling and navigation

### Pricelist Module
- ✅ 27 realistic product/service entries for scrolling test
- ✅ Editable fields: Article No, Product/Service, In Price, Price, Unit, Stock, Description
- ✅ Real-time database persistence on field blur
- ✅ Responsive column visibility based on screen size
- ✅ Search functionality by article number and product name
- ✅ Professional sidebar navigation

### Technical Implementation
- ✅ Fastify backend with Sequelize ORM
- ✅ React frontend with Vite build system
- ✅ PostgreSQL database with proper schema
- ✅ Vanilla CSS styling (no frameworks)
- ✅ RESTful API design
- ✅ Environment-based configuration

## 🛠 Tech Stack & Versions

| Component | Technology | Version |
|-----------|------------|---------|
| **Frontend** | React | 18.3.1 |
| **Build Tool** | Vite | 5.4.2 |
| **Backend** | Fastify | 4.28.1 |
| **ORM** | Sequelize | 6.37.3 |
| **Database** | PostgreSQL | 8.12.0 |
| **Runtime** | Node.js | 18+ |
| **Styling** | Vanilla CSS | - |
| **Router** | React Router DOM | 6.26.1 |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 12+ (or use SQLite for development)
- npm or yarn

### Local Development Setup

1. **Clone and Install**
```bash
git clone <repository-url>
cd mini-app
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run seed    # Seed database with sample data
npm run dev     # Start backend server (port 3001)
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev     # Start frontend server (port 5173)
```

4. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 📊 Database Schema

### Terms Table
```sql
CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  locale VARCHAR(2) NOT NULL,
  section VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  article_no VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  in_price DECIMAL(10,2),
  price DECIMAL(10,2),
  unit VARCHAR(50),
  in_stock INTEGER,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

## 🌐 API Endpoints

### Terms API
- `GET /api/terms?locale=en` - Fetch terms by language
- `GET /api/health` - Health check

### Products API
- `GET /api/products?search=query&article=123` - Fetch products with optional filters
- `PATCH /api/products/:id` - Update product fields

## 📱 Responsive Breakpoints

| Device | Width | Columns Shown |
|--------|-------|---------------|
| **Desktop** | 1100px+ | All fields (9 columns) |
| **Tablet** | 820px-1099px | 7 essential columns |
| **Phone Landscape** | 540px-819px | 5 key columns |
| **Phone Portrait** | <540px | 4 core columns |

## 🎨 Assets Used

- **Background**: https://storage.123fakturera.se/public/wallpapers/sverige43.jpg
- **Logo**: https://storage.123fakturera.se/public/icons/diamond.png
- **🇸🇪 Flag**: https://storage.123fakturere.no/public/flags/SE.png
- **🇬🇧 Flag**: https://storage.123fakturere.no/public/flags/GB.png

## 🚀 Deployment

### Backend (Render/Railway)
```bash
# Build command
npm install

# Start command
npm start

# Environment variables
DATABASE_URL=postgresql://user:pass@host:5432/dbname
PORT=8080
```

### Frontend (Netlify/Vercel)
```bash
# Build command
npm run build

# Publish directory
dist/

# Environment variables
VITE_API_URL=https://your-backend-url.com
```

## 📁 Project Structure

```
mini-app/
├── backend/
│   ├── src/
│   │   ├── index.js          # Fastify server entry
│   │   ├── db.js             # Sequelize models & connection
│   │   └── seed.js           # Database seeding script
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/
│   │   │   ├── Terms.jsx     # Terms & Conditions page
│   │   │   └── Pricelist.jsx # Pricelist module
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # React entry point
│   │   └── styles.css        # Vanilla CSS styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔧 Development Commands

### Backend
```bash
npm run dev     # Development with hot reload
npm run start   # Production server
npm run seed    # Seed database
```

### Frontend
```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview production build
```

## 🌟 Key Features Demonstrated

1. **Pixel-Perfect Design Replication**: Matches 123Fakturera visual design
2. **Multilingual Support**: Dynamic language switching with database-driven content
3. **Real-time Data Persistence**: Editable fields save automatically to PostgreSQL
4. **Responsive Design**: Optimized layouts for all device sizes
5. **Modern Development Practices**: ES6+, modular architecture, RESTful APIs
6. **Production-Ready**: Environment configuration, error handling, deployment setup

## 📞 Support

For questions or issues:
- Check the API health endpoint: `/api/health`
- Verify database connection in backend logs
- Ensure all environment variables are set correctly

---

**Built with ❤️ following SOW specifications and modern web development best practices.**
