import { sequelize, Product } from './models/index.js'

export async function seedDatabase() {
  try {
    console.log('Starting database seeding...')
    
    // Clear existing data
    await Product.destroy({ where: {} })
    
    // Create 25+ products for scrolling functionality
    const products = [
      {
        article_no: 'ART000001',
        name: 'Professional Camera Equipment',
        description: 'High quality professional camera equipment',
        in_price: 14410,
        price: 20126,
        unit: 'kg',
        in_stock: 384
      },
      {
        article_no: 'ART000002',
        name: 'Laptop Computer Dell XPS',
        description: 'High quality laptop computer',
        in_price: 52841,
        price: 39088,
        unit: 'liter',
        in_stock: 10
      },
      {
        article_no: 'ART000003',
        name: 'Office Chair Ergonomic',
        description: 'High quality office chair',
        in_price: 20502,
        price: 45416,
        unit: 'meter',
        in_stock: 310
      },
      {
        article_no: 'ART000004',
        name: 'Wireless Headphones Sony',
        description: 'High quality wireless headphones',
        in_price: 11905,
        price: 70390,
        unit: 'liter',
        in_stock: 228
      },
      {
        article_no: 'ART000005',
        name: 'Smartphone iPhone 15',
        description: 'High quality smartphone',
        in_price: 29975,
        price: 51964,
        unit: 'liter',
        in_stock: 435
      },
      {
        article_no: 'ART000006',
        name: 'Gaming Monitor 27 inch',
        description: 'High quality gaming monitor',
        in_price: 24117,
        price: 86377,
        unit: 'liter',
        in_stock: 405
      },
      {
        article_no: 'ART000007',
        name: 'Mechanical Keyboard RGB',
        description: 'High quality mechanical keyboard',
        in_price: 25860,
        price: 76156,
        unit: 'liter',
        in_stock: 655
      },
      {
        article_no: 'ART000008',
        name: 'External Hard Drive 2TB',
        description: 'High quality external hard drive',
        in_price: 45170,
        price: 10559,
        unit: 'liter',
        in_stock: 569
      },
      {
        article_no: 'ART000009',
        name: 'Webcam HD 1080p',
        description: 'High quality webcam hd 1080p',
        in_price: 20565,
        price: 92964,
        unit: 'piece',
        in_stock: 667
      },
      {
        article_no: 'ART000010',
        name: 'Printer Laser Brother',
        description: 'High quality printer laser brother',
        in_price: 18268,
        price: 69268,
        unit: 'piece',
        in_stock: 268
      },
      {
        article_no: 'ART000011',
        name: 'Tablet iPad Air 5th Gen',
        description: 'High quality tablet ipad air 5th gen',
        in_price: 45941,
        price: 93753,
        unit: 'piece',
        in_stock: 765
      },
      {
        article_no: 'ART000012',
        name: 'Smart Watch Apple Series 9',
        description: 'High quality smart watch apple series 9',
        in_price: 23345,
        price: 94067,
        unit: 'hour',
        in_stock: 896
      },
      {
        article_no: 'ART000013',
        name: 'Bluetooth Speaker JBL',
        description: 'High quality bluetooth speaker jbl',
        in_price: 15230,
        price: 45890,
        unit: 'piece',
        in_stock: 123
      },
      {
        article_no: 'ART000014',
        name: 'USB-C Hub Multiport',
        description: 'High quality usb-c hub multiport',
        in_price: 8750,
        price: 25600,
        unit: 'piece',
        in_stock: 456
      },
      {
        article_no: 'ART000015',
        name: 'Wireless Mouse Logitech',
        description: 'High quality wireless mouse logitech',
        in_price: 3200,
        price: 8900,
        unit: 'piece',
        in_stock: 789
      },
      {
        article_no: 'ART000016',
        name: 'Standing Desk Electric',
        description: 'High quality standing desk electric',
        in_price: 45000,
        price: 78000,
        unit: 'piece',
        in_stock: 25
      },
      {
        article_no: 'ART000017',
        name: 'LED Desk Lamp Adjustable',
        description: 'High quality led desk lamp adjustable',
        in_price: 5600,
        price: 12400,
        unit: 'piece',
        in_stock: 234
      },
      {
        article_no: 'ART000018',
        name: 'Cable Management Kit',
        description: 'High quality cable management kit',
        in_price: 1200,
        price: 3500,
        unit: 'piece',
        in_stock: 567
      },
      {
        article_no: 'ART000019',
        name: 'Portable SSD 1TB Samsung',
        description: 'High quality portable ssd 1tb samsung',
        in_price: 12000,
        price: 25000,
        unit: 'piece',
        in_stock: 345
      },
      {
        article_no: 'ART000020',
        name: 'Noise Cancelling Earbuds',
        description: 'High quality noise cancelling earbuds',
        in_price: 8900,
        price: 18500,
        unit: 'piece',
        in_stock: 678
      },
      {
        article_no: 'ART000021',
        name: 'Graphics Card RTX 4070',
        description: 'High quality graphics card rtx 4070',
        in_price: 65000,
        price: 89000,
        unit: 'piece',
        in_stock: 15
      },
      {
        article_no: 'ART000022',
        name: 'Motherboard ASUS ROG',
        description: 'High quality motherboard asus rog',
        in_price: 25000,
        price: 45000,
        unit: 'piece',
        in_stock: 45
      },
      {
        article_no: 'ART000023',
        name: 'RAM DDR5 32GB Kit',
        description: 'High quality ram ddr5 32gb kit',
        in_price: 18000,
        price: 32000,
        unit: 'piece',
        in_stock: 89
      },
      {
        article_no: 'ART000024',
        name: 'Power Supply 850W Gold',
        description: 'High quality power supply 850w gold',
        in_price: 12000,
        price: 22000,
        unit: 'piece',
        in_stock: 156
      },
      {
        article_no: 'ART000025',
        name: 'CPU Cooler AIO 240mm',
        description: 'High quality cpu cooler aio 240mm',
        in_price: 8500,
        price: 16000,
        unit: 'piece',
        in_stock: 234
      }
    ]
    
    await Product.bulkCreate(products)
    
    console.log(`Successfully seeded ${products.length} products`)
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}
