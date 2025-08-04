import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ProductCard from '../components/ProductCard'
import {
  mockProducts,
  searchProducts,
  getProductsByCategory
} from '../services/mockData'

const { width } = Dimensions.get('window')

interface SearchScreenProps {
  navigation?: any
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchResults, setSearchResults] = useState(mockProducts)

  const categories = [
    'All',
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books',
    'Vehicles'
  ]

  const handleSearch = () => {
    const results = searchProducts(searchQuery, selectedCategory)
    setSearchResults(results)
  }

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId)
    // TODO: Navigate to product detail
  }

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category)
    const results = searchProducts(searchQuery, category)
    setSearchResults(results)
  }

  const handleFavoritePress = (productId: string) => {
    console.log('Favorite pressed:', productId)
    // TODO: Toggle favorite
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.header}>
        <Text style={styles.headerTitle}>🔍 Search</Text>
      </LinearGradient>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Results */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>
          {searchResults.length > 0
            ? `${searchResults.length} results found`
            : 'Search for products to see results'}
        </Text>

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              {...item}
              onPress={() => handleProductPress(item.id)}
              onFavoritePress={() => handleFavoritePress(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultsList}
        />

        {/* Empty State */}
        {searchResults.length === 0 && searchQuery && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>🔍</Text>
            <Text style={styles.emptyStateTitle}>No Results Found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search terms or browse categories
            </Text>
          </View>
        )}
      </View>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  },
  categoryContainer: {
    backgroundColor: '#fff',
    paddingVertical: 0
  },
  categoryContent: {
    paddingHorizontal: 20,
    paddingRight: 30,
    paddingVertical: 4
  },
  categoryButton: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    width: 80,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF'
  },
  categoryText: {
    fontSize: 9,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 10
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '600'
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center'
  },
  resultsList: {
    paddingBottom: 20
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 20
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24
  }
})

export default SearchScreen
