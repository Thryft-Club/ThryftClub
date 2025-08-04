import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

interface Reward {
  id: string
  title: string
  description: string
  points: number
  icon: string
  type: 'transaction' | 'verification' | 'achievement' | 'referral'
  isCompleted: boolean
  progress?: number
  maxProgress?: number
}

interface NFT {
  id: string
  name: string
  image: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  description: string
  earnedDate: string
}

interface VerificationTask {
  id: string
  productTitle: string
  sellerName: string
  location: string
  distance: string
  reward: number
  status: 'pending' | 'in-progress' | 'completed'
  deadline: string
}

const RewardsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'rewards' | 'nfts' | 'verification'
  >('rewards')
  const [userPoints, setUserPoints] = useState(2840)
  const [userLevel, setUserLevel] = useState('Gold Verifier')
  const [verifierStatus, setVerifierStatus] = useState<'active' | 'inactive'>(
    'active'
  )

  const rewards: Reward[] = [
    {
      id: '1',
      title: 'First Sale',
      description: 'Complete your first product sale',
      points: 100,
      icon: 'bag-outline',
      type: 'transaction',
      isCompleted: true
    },
    {
      id: '2',
      title: 'Honest Seller',
      description: 'Maintain 5-star rating for 10 sales',
      points: 250,
      icon: 'star-outline',
      type: 'achievement',
      isCompleted: true
    },
    {
      id: '3',
      title: 'Local Verifier',
      description: 'Complete 5 product verifications',
      points: 500,
      icon: 'checkmark-circle-outline',
      type: 'verification',
      isCompleted: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: '4',
      title: 'Community Helper',
      description: 'Verify 20 products in your area',
      points: 1000,
      icon: 'people-outline',
      type: 'verification',
      isCompleted: false,
      progress: 12,
      maxProgress: 20
    },
    {
      id: '5',
      title: 'Referral Master',
      description: 'Invite 10 friends to the platform',
      points: 300,
      icon: 'share-outline',
      type: 'referral',
      isCompleted: false,
      progress: 7,
      maxProgress: 10
    }
  ]

  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Eco Warrior',
      image: '🌱',
      rarity: 'rare',
      description: 'Awarded for sustainable shopping practices',
      earnedDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Trusted Verifier',
      image: '✅',
      rarity: 'epic',
      description: 'Earned by completing 50 verifications',
      earnedDate: '2024-01-20'
    },
    {
      id: '3',
      name: 'Marketplace Pioneer',
      image: '🚀',
      rarity: 'legendary',
      description: 'Early adopter of the platform',
      earnedDate: '2024-01-10'
    }
  ]

  const verificationTasks: VerificationTask[] = [
    {
      id: '1',
      productTitle: 'iPhone 13 Pro - Excellent Condition',
      sellerName: 'John Smith',
      location: 'Downtown, 2.3km away',
      distance: '2.3km',
      reward: 50,
      status: 'pending',
      deadline: '2024-02-01'
    },
    {
      id: '2',
      productTitle: 'MacBook Air M1 - Good Condition',
      sellerName: 'Sarah Johnson',
      location: 'Westside, 1.8km away',
      distance: '1.8km',
      reward: 75,
      status: 'in-progress',
      deadline: '2024-01-30'
    }
  ]

  const handleVerificationSignup = () => {
    Alert.alert(
      'Become a Verifier',
      'Join our community of trusted verifiers and earn rewards while helping build a safer marketplace!',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Up',
          onPress: () => {
            Alert.alert(
              'Success',
              "You've been registered as a verifier! Check your email for verification details."
            )
          }
        }
      ]
    )
  }

  const handleVerificationTask = (task: VerificationTask) => {
    Alert.alert(
      'Verification Task',
      `Verify: ${task.productTitle}\nSeller: ${task.sellerName}\nLocation: ${task.location}\nReward: ${task.reward} points`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Start Verification',
          onPress: () => {
            Alert.alert(
              'Verification Started',
              'You can now visit the seller to verify the product.'
            )
          }
        }
      ]
    )
  }

  const renderRewardsTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{userPoints}</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{userLevel}</Text>
          <Text style={styles.statLabel}>Current Level</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{nfts.length}</Text>
          <Text style={styles.statLabel}>NFTs Earned</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Available Rewards</Text>
      {rewards.map((reward) => (
        <View key={reward.id} style={styles.rewardCard}>
          <View style={styles.rewardHeader}>
            <View style={styles.rewardIcon}>
              <Ionicons name={reward.icon as any} size={24} color="#007AFF" />
            </View>
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardDescription}>{reward.description}</Text>
            </View>
            <View style={styles.rewardPoints}>
              <Text style={styles.pointsText}>{reward.points}</Text>
              <Text style={styles.pointsLabel}>pts</Text>
            </View>
          </View>
          {!reward.isCompleted && reward.progress !== undefined && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${(reward.progress / reward.maxProgress!) * 100}%`
                    }
                  ]}
                />
              </View>
              <Text style={styles.progressText}>
                {reward.progress}/{reward.maxProgress}
              </Text>
            </View>
          )}
          {reward.isCompleted && (
            <View style={styles.completedBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#28a745" />
              <Text style={styles.completedText}>Completed</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  )

  const renderNFTsTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Your NFT Collection</Text>
      {nfts.map((nft) => (
        <View key={nft.id} style={styles.nftCard}>
          <View style={styles.nftImage}>
            <Text style={styles.nftEmoji}>{nft.image}</Text>
          </View>
          <View style={styles.nftInfo}>
            <Text style={styles.nftName}>{nft.name}</Text>
            <Text style={styles.nftDescription}>{nft.description}</Text>
            <View style={styles.nftMeta}>
              <View style={[styles.rarityBadge, styles[`rarity${nft.rarity}`]]}>
                <Text style={styles.rarityText}>
                  {nft.rarity.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.earnedDate}>Earned {nft.earnedDate}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )

  const renderVerificationTab = () => (
    <View style={styles.tabContent}>
      {verifierStatus === 'inactive' ? (
        <View style={styles.verifierSignup}>
          <Text style={styles.verifierTitle}>Become a Local Verifier</Text>
          <Text style={styles.verifierDescription}>
            Help your community by verifying products in your area. Earn rewards
            while building trust!
          </Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleVerificationSignup}
          >
            <Text style={styles.signupButtonText}>Sign Up as Verifier</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.verifierStats}>
            <View style={styles.verifierStat}>
              <Text style={styles.verifierStatNumber}>47</Text>
              <Text style={styles.verifierStatLabel}>Products Verified</Text>
            </View>
            <View style={styles.verifierStat}>
              <Text style={styles.verifierStatNumber}>2,350</Text>
              <Text style={styles.verifierStatLabel}>Points Earned</Text>
            </View>
            <View style={styles.verifierStat}>
              <Text style={styles.verifierStatNumber}>4.9</Text>
              <Text style={styles.verifierStatLabel}>Verifier Rating</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Available Verification Tasks</Text>
          {verificationTasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={styles.verificationTask}
              onPress={() => handleVerificationTask(task)}
            >
              <View style={styles.taskHeader}>
                <Text style={styles.taskTitle}>{task.productTitle}</Text>
                <View
                  style={[styles.statusBadge, styles[`status${task.status}`]]}
                >
                  <Text style={styles.statusText}>
                    {task.status.replace('-', ' ')}
                  </Text>
                </View>
              </View>
              <Text style={styles.sellerName}>Seller: {task.sellerName}</Text>
              <Text style={styles.taskLocation}>📍 {task.location}</Text>
              <View style={styles.taskFooter}>
                <Text style={styles.taskReward}>
                  Reward: {task.reward} points
                </Text>
                <Text style={styles.taskDeadline}>Due: {task.deadline}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#007AFF', '#0056CC']} style={styles.header}>
        <Text style={styles.headerTitle}>🏆 Rewards & Verification</Text>
        <Text style={styles.headerSubtitle}>
          Earn blockchain rewards and help your community
        </Text>
      </LinearGradient>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'rewards' && styles.activeTab]}
          onPress={() => setActiveTab('rewards')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'rewards' && styles.activeTabText
            ]}
          >
            Rewards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'nfts' && styles.activeTab]}
          onPress={() => setActiveTab('nfts')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'nfts' && styles.activeTabText
            ]}
          >
            NFTs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'verification' && styles.activeTab]}
          onPress={() => setActiveTab('verification')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'verification' && styles.activeTabText
            ]}
          >
            Verification
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'rewards' && renderRewardsTab()}
        {activeTab === 'nfts' && renderNFTsTab()}
        {activeTab === 'verification' && renderVerificationTab()}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center'
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9'
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8
  },
  activeTab: {
    backgroundColor: '#007AFF'
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666'
  },
  activeTabText: {
    color: '#fff'
  },
  content: {
    flex: 1
  },
  tabContent: {
    padding: 20
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4
  },
  statLabel: {
    fontSize: 12,
    color: '#666'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  rewardCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  rewardHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rewardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  rewardInfo: {
    flex: 1
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666'
  },
  rewardPoints: {
    alignItems: 'center'
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  pointsLabel: {
    fontSize: 12,
    color: '#666'
  },
  progressContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e1e5e9',
    borderRadius: 3,
    marginRight: 10
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3
  },
  progressText: {
    fontSize: 12,
    color: '#666'
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  completedText: {
    fontSize: 12,
    color: '#28a745',
    marginLeft: 4
  },
  nftCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  nftImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  nftEmoji: {
    fontSize: 30
  },
  nftInfo: {
    flex: 1
  },
  nftName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  nftDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },
  nftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rarityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  raritycommon: {
    backgroundColor: '#e1e5e9'
  },
  rarityrare: {
    backgroundColor: '#007AFF'
  },
  rarityepic: {
    backgroundColor: '#9c27b0'
  },
  raritylegendary: {
    backgroundColor: '#ff9800'
  },
  rarityText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff'
  },
  earnedDate: {
    fontSize: 12,
    color: '#666'
  },
  verifierSignup: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  verifierTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8
  },
  verifierDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  verifierStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  verifierStat: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  verifierStatNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4
  },
  verifierStatLabel: {
    fontSize: 12,
    color: '#666'
  },
  verificationTask: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  statuspending: {
    backgroundColor: '#fff3cd'
  },
  statusinprogress: {
    backgroundColor: '#d1ecf1'
  },
  statuscompleted: {
    backgroundColor: '#d4edda'
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333'
  },
  sellerName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4
  },
  taskLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },
  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskReward: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF'
  },
  taskDeadline: {
    fontSize: 12,
    color: '#666'
  }
})

export default RewardsScreen
