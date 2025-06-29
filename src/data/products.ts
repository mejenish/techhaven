
import type { Product } from '@/types';

// Make mockProducts export mutable for demo CRUD operations
export let mockProducts: Product[] = [
  {
    id: '1',
    name: 'UltraBook Pro X1',
    category: 'Laptops',
    price: 1299.99, 
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'High-performance laptop for professionals and creatives.',
    slug: 'ultrabook-pro-x1',
    featured: true,
    rating: 4.8,
    reviewsCount: 120,
    dataAiHint: 'ultrabook laptop',
    specifications: {
      RAM: '16GB DDR4',
      Storage: '512GB NVMe SSD',
      Processor: 'Intel Core i7, 12th Gen',
      Display: '14-inch QHD IPS',
    }
  },
  {
    id: '2',
    name: 'GamerSphere Laptop GZ',
    category: 'Laptops',
 price: 1599.00,
 originalPrice: 1799.00,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Top-tier gaming laptop with a stunning display.',
    slug: 'gamersphere-laptop-gz',
    onSale: true,
    rating: 4.9,
    reviewsCount: 95,
    dataAiHint: 'gaming laptop',
    specifications: {
      RAM: '32GB DDR5',
      Storage: '1TB NVMe SSD Gen4',
      Processor: 'AMD Ryzen 9, 7000 Series',
      GPU: 'NVIDIA GeForce RTX 4070',
      Display: '17.3-inch QHD 165Hz',
    }
  },
  {
    id: '3',
    name: 'Wireless Ergonomic Mouse',
    category: 'Accessories',
    price: 49.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Comfortable and precise wireless mouse.',
    slug: 'wireless-ergonomic-mouse',
    featured: true,
    dataAiHint: 'ergonomic mouse',
    specifications: {
      Connectivity: 'Bluetooth 5.0, 2.4GHz Wireless',
      DPI: 'Adjustable up to 4000 DPI',
      Buttons: '6 programmable buttons',
    }
  },
  {
    id: '4',
    name: 'Mechanical Keyboard RGB',
    category: 'Accessories',
    price: 89.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'RGB mechanical keyboard for gaming and typing.',
    slug: 'mechanical-keyboard-rgb',
    dataAiHint: 'mechanical keyboard',
    specifications: {
      SwitchType: 'Blue Mechanical Switches',
      Backlight: 'Per-key RGB',
      Layout: 'Full-size 104 keys',
    }
  },
  {
    id: '5',
    name: 'SkyScanner Drone Pro',
    category: 'Drones',
    price: 799.50,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: '4K camera drone with advanced stabilization.',
    slug: 'skyscanner-drone-pro',
    featured: true,
    rating: 4.7,
    reviewsCount: 75,
    dataAiHint: 'camera drone',
    specifications: {
      Camera: '4K HDR Video, 20MP Photos',
      FlightTime: '30 minutes',
      Range: '5 km',
      Features: 'GPS, Obstacle Avoidance',
    }
  },
  {
    id: '6',
    name: 'StealthWing FPV Drone',
    category: 'Drones',
 price: 450.00,
 originalPrice: 500.00,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Fast and agile FPV drone for racing.',
    slug: 'stealthwing-fpv-drone',
    onSale: true,
    dataAiHint: 'fpv drone',
  },
  {
    id: '7',
    name: 'Motherboard X570 Master',
    category: 'Motherboards',
    price: 320.00,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'High-end X570 motherboard for AMD Ryzen.',
    slug: 'motherboard-x570-master',
    featured: true,
    dataAiHint: 'amd motherboard',
    specifications: {
      Chipset: 'AMD X570',
      Socket: 'AM4',
      FormFactor: 'ATX',
      RAMSlots: '4 x DDR4',
    }
  },
  {
    id: '8',
    name: 'Motherboard B550 Phantom',
    category: 'Motherboards',
 price: 180.99,
 originalPrice: 200.00,
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Reliable B550 motherboard with excellent features.',
    slug: 'motherboard-b550-phantom',
    onSale: true,
    dataAiHint: 'b550 motherboard',
  },
  {
    id: '9',
    name: '4K UHD Monitor 27-inch',
    category: 'Accessories',
    price: 349.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Crystal clear 27-inch 4K UHD monitor.',
    slug: '4k-uhd-monitor-27',
    dataAiHint: '4k monitor',
    rating: 4.6,
    reviewsCount: 88,
  },
  {
    id: '10',
    name: 'Compact Drone MiniFly',
    category: 'Drones',
    price: 299.00,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Easy-to-fly compact drone, perfect for beginners.',
    slug: 'compact-drone-minifly',
    dataAiHint: 'mini drone',
  },
  {
    id: '11',
    name: 'Smart Home Hub Central',
    category: 'Smart Home',
    price: 129.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Control all your smart devices from one central hub.',
    slug: 'smart-home-hub-central',
    featured: true,
    rating: 4.5,
    reviewsCount: 60,
    dataAiHint: 'smart hub',
    specifications: {
      Compatibility: 'Zigbee, Z-Wave, Wi-Fi, Bluetooth',
      VoiceAssistant: 'Google Assistant, Alexa',
    }
  },
  {
    id: '12',
    name: 'Noise Cancelling Headphones Pro',
    category: 'Accessories',
 price: 249.00,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Immersive sound with industry-leading noise cancellation.',
    slug: 'noise-cancelling-headphones-pro',
    onSale: true,
    originalPrice: 299.00,
    rating: 4.9,
    reviewsCount: 150,
    dataAiHint: 'noise cancelling headphones',
  },
  {
    id: '13',
    name: 'Curved Ultrawide Monitor 34-inch',
    category: 'Accessories',
    price: 599.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Immersive 34-inch ultrawide curved monitor for productivity and gaming.',
    slug: 'curved-ultrawide-monitor-34',
    dataAiHint: 'ultrawide monitor',
  },
  {
    id: '14',
    name: 'Portable SSD 1TB',
    category: 'Accessories',
    price: 119.50,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Fast and compact 1TB portable SSD for on-the-go storage.',
    slug: 'portable-ssd-1tb',
    featured: true,
    dataAiHint: 'portable ssd',
  },
  {
    id: '15',
    name: 'VR Headset NextGen',
    category: 'Gaming',
    price: 399.00,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Step into new realities with this next-generation VR headset.',
    slug: 'vr-headset-nextgen',
    rating: 4.7,
    reviewsCount: 110,
    dataAiHint: 'vr headset',
  },
  {
    id: '16',
    name: 'Webcam ProStream 1080p',
    category: 'Accessories',
 price: 69.99,
 originalPrice: 89.99,
    imageUrl: 'https://placehold.co/300x200.png',
    description: 'High-definition 1080p webcam for streaming and video calls.',
    slug: 'webcam-prostream-1080p',
    onSale: true,
    dataAiHint: 'webcam stream',
  },
  {
    id: '17',
    name: 'Gaming Mousepad XXL',
    category: 'Accessories',
    price: 29.99,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Extra large gaming mousepad for maximum precision and comfort.',
    slug: 'gaming-mousepad-xxl',
    dataAiHint: 'gaming mousepad',
  },
  {
    id: '18',
    name: 'Lightweight Travel Laptop',
    category: 'Laptops',
    price: 899.00,
    imageUrl: 'https://mudita.com.np/media/PS5_Web.webp',
    description: 'Ultra-portable and lightweight laptop perfect for travel.',
    slug: 'lightweight-travel-laptop',
    featured: true,
    dataAiHint: 'travel laptop',
  }
];

