import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import SearchScreen from './src/screens/SearchScreen'
import SellScreen from './src/screens/SellScreen'
import ChatScreen from './src/screens/ChatScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import RewardsScreen from './src/screens/RewardsScreen'
import LoginScreen from './src/screens/LoginScreen'
import BottomTabBar from './src/components/BottomTabBar'

export default function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleTabPress = (tabName: string) => {
    console.log('Tab pressed:', tabName)
    setActiveTab(tabName)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const renderScreen = () => {
    console.log('Rendering screen for tab:', activeTab)

    switch (activeTab) {
      case 'Home':
        return <HomeScreen />
      case 'Search':
        return <SearchScreen />
      case 'Sell':
        return <SellScreen />
      case 'Chat':
        return <ChatScreen />
      case 'Rewards':
        return <RewardsScreen />
      case 'Profile':
        return <ProfileScreen onLogout={handleLogout} />
      default:
        return <HomeScreen />
    }
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
        <LoginScreen onLogin={handleLogin} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <View style={styles.screenContainer}>{renderScreen()}</View>
      <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  screenContainer: {
    flex: 1
  }
})
