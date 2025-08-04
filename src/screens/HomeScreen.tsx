import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ProductCard from '../components/ProductCard'
import { mockProducts, mockCategories } from '../services/mockData'

const { width } = Dimensions.get('window')

interface HomeScreenProps {
  navigation?: any
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (category: string) => {
    console.log('Category pressed:', category)
    // TODO: Navigate to category page
  }

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId)
    // TODO: Navigate to product detail
  }

  const handleFavoritePress = (productId: string) => {
    console.log('Favorite pressed:', productId)
    // TODO: Toggle favorite
  }

  const handleExplorePress = () => {
    console.log('Explore pressed')
    // TODO: Navigate to explore page
  }

  const renderCategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item.name)}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryCount}>{item.count} items</Text>
    </TouchableOpacity>
  )

  const renderProductItem = ({ item }: { item: any }) => (
    <ProductCard
      {...item}
      onPress={() => handleProductPress(item.id)}
      onFavoritePress={() => handleFavoritePress(item.id)}
    />
  )

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>🌱 Thryft Club</Text>
          <Text style={styles.headerSubtitle}>Sustainable marketplace</Text>
        </View>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['#28a745', '#20c997']}
            style={styles.heroCard}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Save Money, Save Earth</Text>
              <Text style={styles.heroSubtitle}>
                Buy and sell quality second-hand items. Reduce waste, find great
                deals.
              </Text>
              <TouchableOpacity
                style={styles.heroButton}
                onPress={handleExplorePress}
              >
                <Text style={styles.heroButtonText}>Explore Now →</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <View style={styles.categoriesContainer}>
            {mockCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => handleCategoryPress(category.name)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryCount}>{category.count} items</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productsContainer}>
            {mockProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onPress={() => handleProductPress(product.id)}
                onFavoritePress={() => handleFavoritePress(product.id)}
              />
            ))}
          </View>
        </View>

        {/* Recent Listings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Listings</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productsContainer}>
            {mockProducts.slice(4, 8).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onPress={() => handleProductPress(product.id)}
                onFavoritePress={() => handleFavoritePress(product.id)}
              />
            ))}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>1,234</Text>
            <Text style={styles.statsLabel}>Items Listed</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>567</Text>
            <Text style={styles.statsLabel}>Happy Buyers</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsNumber}>89</Text>
            <Text style={styles.statsLabel}>Cities</Text>
          </View>
        </View>

        {/* Bottom Spacing for Tab Bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  headerContent: {
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 120 // Extra padding for bottom tab bar
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  heroCard: {
    borderRadius: 16,
    padding: 20
  },
  heroContent: {
    alignItems: 'center'
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center'
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20
  },
  heroButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  },
  section: {
    marginBottom: 30
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  seeAllText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600'
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    width: (width - 60) / 3, // 3 items per row with margins
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 12
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center'
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center'
  },
  productsContainer: {
    paddingHorizontal: 20
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  statsCard: {
    alignItems: 'center'
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4
  },
  statsLabel: {
    fontSize: 12,
    color: '#666'
  },
  bottomSpacing: {
    height: 20
  }
})

export default HomeScreen
