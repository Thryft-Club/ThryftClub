import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const { width } = Dimensions.get('window');

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  condition: string;
  location: string;
}

const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: '📱', color: '#007AFF' },
  { id: '2', name: 'Fashion', icon: '👕', color: '#FF3B30' },
  { id: '3', name: 'Home', icon: '🏠', color: '#34C759' },
  { id: '4', name: 'Sports', icon: '⚽', color: '#FF9500' },
  { id: '5', name: 'Books', icon: '📚', color: '#AF52DE' },
  { id: '6', name: 'Vehicles', icon: '🚗', color: '#5856D6' },
];

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro - Excellent Condition',
    price: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'Electronics',
    condition: 'Excellent',
    location: 'New York, NY',
  },
  {
    id: '2',
    title: 'MacBook Air M1 - Like New',
    price: 899,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'Electronics',
    condition: 'Like New',
    location: 'Los Angeles, CA',
  },
  {
    id: '3',
    title: 'Nike Air Max 270 - Size 10',
    price: 89,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Fashion',
    condition: 'Good',
    location: 'Chicago, IL',
  },
  {
    id: '4',
    title: 'Samsung 55" 4K Smart TV',
    price: 499,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    category: 'Electronics',
    condition: 'Very Good',
    location: 'Miami, FL',
  },
];

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId);
  };

  const handleFavoritePress = (productId: string) => {
    console.log('Favorite pressed:', productId);
  };

  const handleCategoryPress = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        activeCategory === item.id && styles.activeCategoryItem,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <View
        style={[
          styles.categoryIcon,
          { backgroundColor: item.color },
          activeCategory === item.id && styles.activeCategoryIcon,
        ]}
      >
        <Text style={styles.categoryIconText}>{item.icon}</Text>
      </View>
      <Text
        style={[
          styles.categoryText,
          activeCategory === item.id && styles.activeCategoryText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      category={item.category}
      condition={item.condition}
      location={item.location}
      onPress={() => handleProductPress(item.id)}
      onFavoritePress={() => handleFavoritePress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Header
        onSearchPress={() => console.log('Search pressed')}
        onNotificationPress={() => console.log('Notifications pressed')}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['#007AFF', '#0056CC']}
            style={styles.heroGradient}
          >
            <Text style={styles.heroTitle}>Discover Amazing Deals</Text>
            <Text style={styles.heroSubtitle}>
              Find pre-loved items at great prices
            </Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Start Shopping</Text>
              <Text style={styles.heroButtonIcon}>→</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={mockProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Products Listed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statLabel}>Satisfaction</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
  heroSection: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroGradient: {
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  heroButtonIcon: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  activeCategoryItem: {
    transform: [{ scale: 1.05 }],
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 24,
    color: '#fff',
  },
  activeCategoryIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6c757d',
    textAlign: 'center',
  },
  activeCategoryText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default HomeScreen; 