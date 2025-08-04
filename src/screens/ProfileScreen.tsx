import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  FlatList
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
  mockUserProfile,
  mockUserListings,
  mockFavorites,
  mockTransactionHistory
} from '../services/mockData'
import ProductCard from '../components/ProductCard'

interface ProfileScreenProps {
  navigation?: any
  onLogout?: () => void
}

interface MenuItem {
  id: string
  title: string
  icon: string
  action: () => void
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState('profile')

  const menuItems: MenuItem[] = [
    {
      id: '1',
      title: 'My Listings',
      icon: '📦',
      action: () => setActiveTab('listings')
    },
    {
      id: '2',
      title: 'Favorites',
      icon: '♥',
      action: () => setActiveTab('favorites')
    },
    {
      id: '3',
      title: 'Transaction History',
      icon: '📊',
      action: () => setActiveTab('transactions')
    },
    {
      id: '4',
      title: 'Settings',
      icon: '⚙️',
      action: () => console.log('Settings pressed')
    },
    {
      id: '5',
      title: 'Help & Support',
      icon: '❓',
      action: () => console.log('Help & Support pressed')
    },
    {
      id: '6',
      title: 'About',
      icon: 'ℹ️',
      action: () => console.log('About pressed')
    },
    {
      id: '7',
      title: 'Logout',
      icon: '🚪',
      action: () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Logout',
            style: 'destructive',
            onPress: () => onLogout?.()
          }
        ])
      }
    }
  ]

  const renderTransactionItem = ({ item }: { item: any }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{item.productTitle}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text
          style={[
            styles.amountText,
            item.type === 'sale' ? styles.saleAmount : styles.purchaseAmount
          ]}
        >
          {item.type === 'sale' ? '+' : '-'}${item.amount}
        </Text>
        <Text style={styles.transactionType}>
          {item.type === 'sale' ? 'Sale' : 'Purchase'}
        </Text>
      </View>
    </View>
  )

  const renderProfileContent = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: mockUserProfile.avatar }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{mockUserProfile.name}</Text>
            <Text style={styles.profileEmail}>{mockUserProfile.email}</Text>
            <Text style={styles.profileLocation}>
              📍 {mockUserProfile.location}
            </Text>
            <Text style={styles.profileMemberSince}>
              Member since {mockUserProfile.memberSince}
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{mockUserProfile.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{mockUserProfile.totalSales}</Text>
            <Text style={styles.statLabel}>Sales</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {mockUserProfile.totalPurchases}
            </Text>
            <Text style={styles.statLabel}>Purchases</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.action}
          >
            <View style={styles.menuItemContent}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* App Info */}
      <View style={styles.appInfo}>
        <Text style={styles.appVersion}>Renewly Market v1.0.0</Text>
        <Text style={styles.appDescription}>
          Sustainable marketplace for buying and selling
        </Text>
      </View>
    </ScrollView>
  )

  const renderListingsContent = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>
        My Listings ({mockUserListings.length})
      </Text>
      <FlatList
        data={mockUserListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            onPress={() => console.log('Product pressed:', item.id)}
            onFavoritePress={() => console.log('Favorite pressed:', item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />
    </View>
  )

  const renderFavoritesContent = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Favorites ({mockFavorites.length})</Text>
      <FlatList
        data={mockFavorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            onPress={() => console.log('Product pressed:', item.id)}
            onFavoritePress={() => console.log('Favorite pressed:', item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />
    </View>
  )

  const renderTransactionsContent = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Transaction History</Text>
      <FlatList
        data={mockTransactionHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.transactionsList}
      />
    </View>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'listings':
        return renderListingsContent()
      case 'favorites':
        return renderFavoritesContent()
      case 'transactions':
        return renderTransactionsContent()
      default:
        return renderProfileContent()
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.header}>
        <Text style={styles.headerTitle}>👤 Profile</Text>
      </LinearGradient>

      {renderContent()}
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
  content: {
    flex: 1
  },
  profileSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4
  },
  profileMemberSince: {
    fontSize: 12,
    color: '#999'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  statItem: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4
  },
  statLabel: {
    fontSize: 12,
    color: '#666'
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#f0f0f0'
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15
  },
  menuTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500'
  },
  menuArrow: {
    fontSize: 16,
    color: '#999'
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  appVersion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  appDescription: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center'
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  productsList: {
    paddingBottom: 20
  },
  transactionsList: {
    paddingBottom: 20
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  transactionInfo: {
    flex: 1
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  transactionDate: {
    fontSize: 12,
    color: '#666'
  },
  transactionAmount: {
    alignItems: 'flex-end'
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2
  },
  saleAmount: {
    color: '#28a745'
  },
  purchaseAmount: {
    color: '#dc3545'
  },
  transactionType: {
    fontSize: 12,
    color: '#666'
  }
})

export default ProfileScreen
