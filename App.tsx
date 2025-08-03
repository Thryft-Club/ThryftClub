import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabBar from './src/components/BottomTabBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Search':
        return (
          <View style={styles.screen}>
            {/* TODO: Implement Search Screen */}
          </View>
        );
      case 'Sell':
        return (
          <View style={styles.screen}>
            {/* TODO: Implement Sell Screen */}
          </View>
        );
      case 'Chat':
        return (
          <View style={styles.screen}>
            {/* TODO: Implement Chat Screen */}
          </View>
        );
      case 'Profile':
        return (
          <View style={styles.screen}>
            {/* TODO: Implement Profile Screen */}
          </View>
        );
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <View style={styles.container}>
        {renderScreen()}
        <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
});
