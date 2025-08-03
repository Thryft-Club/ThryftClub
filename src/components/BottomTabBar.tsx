import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

interface TabItem {
  name: string
  icon: string
  activeIcon: string
  label: string
}

interface BottomTabBarProps {
  activeTab: string
  onTabPress: (tabName: string) => void
}

const tabs: TabItem[] = [
  {
    name: 'Home',
    icon: '🏠',
    activeIcon: '🏠',
    label: 'Home'
  },
  {
    name: 'Search',
    icon: '🔍',
    activeIcon: '🔍',
    label: 'Search'
  },
  {
    name: 'Sell',
    icon: '➕',
    activeIcon: '➕',
    label: 'Sell'
  },
  {
    name: 'Chat',
    icon: '💬',
    activeIcon: '💬',
    label: 'Chat'
  },
  {
    name: 'Profile',
    icon: '👤',
    activeIcon: '👤',
    label: 'Profile'
  }
]

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onTabPress
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#fff', '#f8f9fa']} style={styles.gradient}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tab}
              onPress={() => onTabPress(tab.name)}
              activeOpacity={0.7}
            >
              <View style={styles.tabContent}>
                <Text
                  style={[
                    styles.tabIcon,
                    { color: isActive ? '#007AFF' : '#8E8E93' }
                  ]}
                >
                  {isActive ? tab.activeIcon : tab.icon}
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    { color: isActive ? '#007AFF' : '#8E8E93' }
                  ]}
                >
                  {tab.label}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </View>
            </TouchableOpacity>
          )
        })}
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'transparent'
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4
  },
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#007AFF'
  }
})

export default BottomTabBar
