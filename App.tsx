import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import SearchScreen from './src/screens/SearchScreen'
import SellScreen from './src/screens/SellScreen'
import ChatScreen from './src/screens/ChatScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import BottomTabBar from './src/components/BottomTabBar'

export default function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const handleTabPress = (tabName: string) => {
    console.log('Tab pressed:', tabName)
    setActiveTab(tabName)
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
      case 'Profile':
        return <ProfileScreen />
      default:
        return <HomeScreen />
    }
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
