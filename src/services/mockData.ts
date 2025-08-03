export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  condition: string;
  location: string;
  description?: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  images?: string[];
  createdAt: string;
  isFavorite?: boolean;
}

export interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
  isOnline: boolean;
  productId?: string;
  productTitle?: string;
  productImage?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  location: string;
  memberSince: string;
  rating: number;
  totalSales: number;
  totalPurchases: number;
  bio?: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro - Excellent Condition',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'Electronics',
    condition: 'Excellent',
    location: 'New York, NY',
    description: 'iPhone 13 Pro in excellent condition. 256GB storage, Pacific Blue. Includes original box and charger. No scratches or damage.',
    seller: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 4.8,
    },
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    ],
    createdAt: '2024-01-15',
    isFavorite: true,
  },
  {
    id: '2',
    title: 'Nike Air Max 270 - Like New',
    price: 120,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Clothing',
    condition: 'Like New',
    location: 'Los Angeles, CA',
    description: 'Nike Air Max 270 in like new condition. Size 10, Black/White colorway. Worn only a few times.',
    seller: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      rating: 4.9,
    },
    createdAt: '2024-01-20',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'MacBook Air M1 - Good Condition',
    price: 750,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'Electronics',
    condition: 'Good',
    location: 'Chicago, IL',
    description: 'MacBook Air M1 in good condition. 8GB RAM, 256GB SSD. Minor cosmetic wear but functions perfectly.',
    seller: {
      name: 'Mike Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 4.7,
    },
    createdAt: '2024-01-18',
    isFavorite: true,
  },
  {
    id: '4',
    title: 'Sony WH-1000XM4 Headphones',
    price: 250,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
    condition: 'Excellent',
    location: 'Miami, FL',
    description: 'Sony WH-1000XM4 noise-canceling headphones. Excellent condition, includes original case and cables.',
    seller: {
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 4.6,
    },
    createdAt: '2024-01-22',
    isFavorite: false,
  },
  {
    id: '5',
    title: 'Levi\'s 501 Jeans - New',
    price: 45,
    originalPrice: 70,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'Clothing',
    condition: 'New',
    location: 'Austin, TX',
    description: 'Levi\'s 501 jeans, brand new with tags. Size 32x32, Dark Blue wash.',
    seller: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 4.5,
    },
    createdAt: '2024-01-25',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'IKEA KALLAX Shelf Unit',
    price: 80,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    category: 'Home & Garden',
    condition: 'Good',
    location: 'Seattle, WA',
    description: 'IKEA KALLAX shelf unit in good condition. 4x4 configuration, white finish. Some minor wear.',
    seller: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      rating: 4.4,
    },
    createdAt: '2024-01-23',
    isFavorite: true,
  },
  {
    id: '7',
    title: 'Nintendo Switch OLED',
    price: 280,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400',
    category: 'Electronics',
    condition: 'Like New',
    location: 'Denver, CO',
    description: 'Nintendo Switch OLED in like new condition. Includes dock, joy-cons, and original box.',
    seller: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 4.8,
    },
    createdAt: '2024-01-24',
    isFavorite: false,
  },
  {
    id: '8',
    title: 'Adidas Ultraboost 21',
    price: 95,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    category: 'Clothing',
    condition: 'Good',
    location: 'Portland, OR',
    description: 'Adidas Ultraboost 21 running shoes. Size 9, good condition with some wear on soles.',
    seller: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 4.3,
    },
    createdAt: '2024-01-26',
    isFavorite: false,
  },
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Electronics', icon: '📱', count: 156 },
  { id: '2', name: 'Clothing', icon: '👕', count: 234 },
  { id: '3', name: 'Home & Garden', icon: '🏠', count: 89 },
  { id: '4', name: 'Sports', icon: '⚽', count: 67 },
  { id: '5', name: 'Books', icon: '📚', count: 123 },
  { id: '6', name: 'Vehicles', icon: '🚗', count: 45 },
];

export const mockChats: ChatItem[] = [
  {
    id: '1',
    name: 'John Smith',
    lastMessage: 'Is the iPhone still available?',
    timestamp: '2 min ago',
    unreadCount: 2,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    isOnline: true,
    productId: '1',
    productTitle: 'iPhone 13 Pro - Excellent Condition',
    productImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    lastMessage: 'I can pick it up tomorrow',
    timestamp: '1 hour ago',
    unreadCount: 0,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    isOnline: false,
    productId: '2',
    productTitle: 'Nike Air Max 270 - Like New',
    productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100',
  },
  {
    id: '3',
    name: 'Mike Wilson',
    lastMessage: 'What\'s the best price you can do?',
    timestamp: '3 hours ago',
    unreadCount: 1,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    isOnline: true,
    productId: '3',
    productTitle: 'MacBook Air M1 - Good Condition',
    productImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100',
  },
  {
    id: '4',
    name: 'Emily Davis',
    lastMessage: 'Thanks for the quick response!',
    timestamp: '1 day ago',
    unreadCount: 0,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    isOnline: false,
    productId: '4',
    productTitle: 'Sony WH-1000XM4 Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100',
  },
];

export const mockUserProfile: UserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  location: 'New York, NY',
  memberSince: 'March 2024',
  rating: 4.8,
  totalSales: 24,
  totalPurchases: 12,
  bio: 'Sustainable living enthusiast. Always looking for quality second-hand items.',
};

export const mockSearchResults = mockProducts;

export const mockUserListings = mockProducts.filter((_, index) => index < 3);

export const mockFavorites = mockProducts.filter(product => product.isFavorite);

export const mockTransactionHistory = [
  {
    id: '1',
    type: 'sale',
    productTitle: 'iPhone 13 Pro',
    amount: 899,
    date: '2024-01-15',
    status: 'completed',
  },
  {
    id: '2',
    type: 'purchase',
    productTitle: 'Nike Air Max 270',
    amount: 120,
    date: '2024-01-10',
    status: 'completed',
  },
  {
    id: '3',
    type: 'sale',
    productTitle: 'MacBook Air M1',
    amount: 750,
    date: '2024-01-08',
    status: 'completed',
  },
];

export const getProductsByCategory = (category: string) => {
  if (category === 'All') return mockProducts;
  return mockProducts.filter(product => product.category === category);
};

export const searchProducts = (query: string, category: string = 'All') => {
  const filteredByCategory = getProductsByCategory(category);
  if (!query) return filteredByCategory;
  
  return filteredByCategory.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description?.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
}; 