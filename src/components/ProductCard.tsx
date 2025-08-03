import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  category: string
  condition: string
  location: string
  onPress: () => void
  isFavorite?: boolean
  onFavoritePress?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  category,
  condition,
  location,
  onPress,
  isFavorite = false,
  onFavoritePress
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        />

        {/* Favorite Button */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Text style={styles.favoriteText}>{isFavorite ? '♥' : '♡'}</Text>
        </TouchableOpacity>

        {/* Condition Badge */}
        <View style={styles.conditionBadge}>
          <Text style={styles.conditionText}>{condition}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price.toLocaleString()}</Text>
          <Text style={styles.originalPrice}>
            ${(price * 1.2).toLocaleString()}
          </Text>
        </View>

        <View style={styles.metaContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>📦 {category}</Text>
          </View>

          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>📍 {location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  imageContainer: {
    position: 'relative',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  conditionBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: '#28a745',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  conditionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600'
  },
  content: {
    padding: 16
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
    lineHeight: 22
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginRight: 8
  },
  originalPrice: {
    fontSize: 14,
    color: '#6c757d',
    textDecorationLine: 'line-through'
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: 12,
    color: '#6c757d'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationText: {
    fontSize: 12,
    color: '#6c757d'
  }
})

export default ProductCard
