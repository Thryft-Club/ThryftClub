import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface HeaderProps {
  title?: string
  showSearch?: boolean
  onSearchPress?: () => void
  onNotificationPress?: () => void
  onBackPress?: () => void
  showBack?: boolean
}

const Header: React.FC<HeaderProps> = ({
  title = 'Thryft Club',
  showSearch = true,
  onSearchPress,
  onNotificationPress,
  onBackPress,
  showBack = false
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.container}>
        <View style={styles.content}>
          {showBack ? (
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.logoContainer}>
              <Text style={styles.logoIcon}>🌱</Text>
              <Text style={styles.logoText}>Thryft</Text>
            </View>
          )}

          <Text style={styles.title}>{title}</Text>

          <View style={styles.actions}>
            {showSearch && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={onSearchPress}
              >
                <Text style={styles.actionButtonText}>🔍</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.actionButton}
              onPress={onNotificationPress}
            >
              <Text style={styles.actionButtonText}>🔔</Text>
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#007AFF'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 16
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoIcon: {
    fontSize: 24,
    marginRight: 8
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    textAlign: 'center'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    position: 'relative'
  },
  actionButtonText: {
    fontSize: 18,
    color: '#fff'
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600'
  }
})

export default Header
