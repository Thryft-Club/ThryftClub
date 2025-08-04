import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface LoginScreenProps {
  navigation?: any;
  onLogin?: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, onLogin }) => {
  const [isWalletConnecting, setIsWalletConnecting] = useState(false);

  const handleWalletConnect = async () => {
    setIsWalletConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsWalletConnecting(false);
      Alert.alert('Wallet Connected', 'Your wallet has been connected successfully!', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to main app
            onLogin?.();
          }
        }
      ]);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🌱</Text>
            <Text style={styles.appName}>RenewlyMarket</Text>
            <Text style={styles.tagline}>Sustainable Marketplace</Text>
          </View>
        </LinearGradient>

        {/* Wallet Connect Form */}
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome to RenewlyMarket!</Text>
          <Text style={styles.subtitleText}>Connect your wallet to start your sustainable journey</Text>

          {/* Wallet Connect Button */}
          <TouchableOpacity
            style={[
              styles.walletButton,
              isWalletConnecting && styles.walletButtonDisabled
            ]}
            onPress={handleWalletConnect}
            disabled={isWalletConnecting}
          >
            <Ionicons
              name="wallet-outline"
              size={24}
              color="#fff"
              style={styles.walletIcon}
            />
            {isWalletConnecting ? (
              <Text style={styles.walletButtonText}>Connecting Wallet...</Text>
            ) : (
              <Text style={styles.walletButtonText}>Connect Wallet</Text>
            )}
          </TouchableOpacity>

          {/* Wallet Info */}
          <View style={styles.walletInfo}>
            <Text style={styles.walletInfoTitle}>Why Connect Your Wallet?</Text>
            <View style={styles.walletInfoItem}>
              <Ionicons name="shield-checkmark-outline" size={16} color="#007AFF" />
              <Text style={styles.walletInfoText}>Secure blockchain authentication</Text>
            </View>
            <View style={styles.walletInfoItem}>
              <Ionicons name="diamond-outline" size={16} color="#007AFF" />
              <Text style={styles.walletInfoText}>Earn NFT rewards and tokens</Text>
            </View>
            <View style={styles.walletInfoItem}>
              <Ionicons name="checkmark-circle-outline" size={16} color="#007AFF" />
              <Text style={styles.walletInfoText}>Verify products and earn rewards</Text>
            </View>
          </View>

          {/* Supported Wallets */}
          <View style={styles.supportedWallets}>
            <Text style={styles.supportedWalletsTitle}>Supported Wallets</Text>
            <View style={styles.walletLogos}>
              <Text style={styles.walletLogo}>🦊</Text>
              <Text style={styles.walletLogo}>🔗</Text>
              <Text style={styles.walletLogo}>💎</Text>
              <Text style={styles.walletLogo}>🌞</Text>
            </View>
            <Text style={styles.supportedWalletsText}>
              MetaMask, WalletConnect, Phantom, Solflare & more
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  walletButton: {
    backgroundColor: '#6c5ce7',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#6c5ce7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  walletButtonDisabled: {
    backgroundColor: '#ccc',
    shadowOpacity: 0,
    elevation: 0,
  },
  walletIcon: {
    marginRight: 12,
  },
  walletButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  walletInfo: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },
  walletInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  walletInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  walletInfoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  supportedWallets: {
    alignItems: 'center',
  },
  supportedWalletsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  walletLogos: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  walletLogo: {
    fontSize: 32,
    marginHorizontal: 8,
  },
  supportedWalletsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
});

export default LoginScreen;
