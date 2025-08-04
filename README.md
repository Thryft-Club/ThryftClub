# 🌱 RenewlyMarketApp

A sustainable marketplace mobile application built with React Native and Expo, designed to promote second-hand buying and selling while reducing environmental waste.

## 📱 Features

### 🏠 Home Screen

- **Hero Section**: Promotional banner highlighting sustainability benefits
- **Category Browse**: Quick access to product categories with item counts
- **Featured Products**: Curated selection of high-quality items
- **Recent Listings**: Latest products added to the marketplace
- **Statistics**: Community metrics (items listed, happy buyers, cities)

### 🔍 Search & Discovery

- **Product Search**: Find items by title, description, or category
- **Category Filtering**: Browse products by specific categories
- **Advanced Filters**: Filter by condition, price range, and location
- **Search Results**: Clean, organized product listings

### 💰 Sell Products

- **Product Listing**: Easy-to-use form for creating new listings
- **Image Upload**: Add multiple photos of your items
- **Category Selection**: Choose from predefined product categories
- **Condition Rating**: Specify item condition (New, Like New, Excellent, Good, Fair, Poor)
- **Price Setting**: Set competitive prices with currency support
- **Location Tagging**: Add your location for local buyers

### 💬 Chat & Communication

- **In-App Messaging**: Direct communication between buyers and sellers
- **Product Context**: Chat threads linked to specific products
- **Real-time Status**: Online/offline indicators
- **Unread Notifications**: Message count badges
- **Message History**: Complete conversation history
- **AI-Assisted Communication**: Automated seller contact for product clarification
- **Smart Notifications**: AI-powered alerts for matching products and updates

### 👤 User Profile

- **Personal Information**: Name, email, location, and bio
- **Member Statistics**: Join date, rating, total sales/purchases
- **Transaction History**: Complete record of buying and selling
- **Favorites**: Saved items for quick access
- **My Listings**: Manage your current product listings

### 🛒 Product Management

- **Product Cards**: Attractive product displays with images
- **Detailed Views**: Comprehensive product information
- **Seller Profiles**: View seller ratings and information
- **Favorite System**: Save items for later
- **Condition Indicators**: Clear item condition labels
- **AI-Enhanced Search**: Intelligent product discovery with automated seller communication
- **Product Authentication**: Community-driven verification system with blockchain rewards
- **Verification Badges**: Trust indicators for authenticated products

### 🏆 Blockchain Rewards & Authentication

- **NFT Rewards**: Earn unique digital collectibles for marketplace activities
- **Token Economy**: Marketplace tokens for transactions and community contributions
- **Verifier Network**: Become a local verifier to authenticate products and earn rewards
- **Staking System**: Stake tokens to unlock premium features and earn additional rewards
- **Achievement System**: Gamified rewards for completing various marketplace activities

## 🛠 Technology Stack

- **Frontend**: React Native 0.79.5
- **Framework**: Expo SDK 53
- **Navigation**: React Navigation 7
- **State Management**: React Query (TanStack Query)
- **UI Components**: Custom components with React Native
- **Styling**: StyleSheet with gradient support
- **Icons**: React Native Vector Icons
- **Storage**: AsyncStorage for local data
- **Backend Integration**: Supabase (configured)
- **Blockchain**: Solana Web3.js (configured)
- **Development**: TypeScript

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go** app on your mobile device (for testing)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RenewlyMarketApp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory (if not already present):

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_SOLANA_RPC_URL=your_solana_rpc_url
```

### 4. Start Development Server

```bash
npm start
# or
yarn start
```

This will start the Expo development server and open the Metro bundler in your browser.

## 📱 Running the App

### Local Development

1. **Start the development server**:

   ```bash
   npm start
   ```

2. **Choose your platform**:

   - **iOS Simulator**: Press `i` in the terminal or click "Run on iOS simulator"
   - **Android Emulator**: Press `a` in the terminal or click "Run on Android device/emulator"
   - **Web Browser**: Press `w` in the terminal or click "Run in web browser"
   - **Physical Device**: Scan the QR code with Expo Go app

3. **Development Options**:
   - **Hot Reload**: Changes automatically reflect in the app
   - **Debug Menu**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
   - **Developer Tools**: Access React Native Debugger and performance tools

### 📱 Testing with Expo Go App

#### Prerequisites for Mobile Testing

- **Expo Go App**: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
- **Same Network**: Your mobile device and development machine must be on the same Wi-Fi network
- **Firewall Settings**: Ensure your firewall allows connections on the Expo development port (usually 8081)

#### Step-by-Step Mobile Testing

1. **Start the Development Server**:

   ```bash
   npm start
   # or
   yarn start
   ```

2. **Access the QR Code**:

   - The Metro bundler will open in your browser showing a QR code
   - The QR code will also be displayed in your terminal

3. **Scan the QR Code**:

   - **iOS**: Open Camera app and point it at the QR code, then tap the notification
   - **Android**: Open Expo Go app and use the "Scan QR Code" option
   - **Alternative**: Open Expo Go app and manually enter the URL shown in the terminal

4. **App Loading**:
   - Expo Go will download and load your app
   - First load may take 1-2 minutes depending on your internet speed
   - Subsequent loads will be faster due to caching

#### Troubleshooting Mobile Testing

**If the QR code doesn't work:**

```bash
# Try using tunnel mode for better connectivity
npm start -- --tunnel
# or
yarn start --tunnel
```

**If you get connection errors:**

- Ensure both devices are on the same Wi-Fi network
- Try switching between "LAN" and "Tunnel" modes in the Expo CLI
- Check if your firewall is blocking the connection

**If the app doesn't load:**

- Clear Expo Go app cache: Settings → Clear Cache
- Restart the development server: `Ctrl+C` then `npm start`
- Check the terminal for any error messages

#### Development Features on Mobile

**Hot Reload**:

- Changes to your code automatically reflect in the app
- No need to manually reload or restart

**Debug Menu** (Access by shaking your device):

- **Reload**: Manually reload the app
- **Debug Remote JS**: Open React Native Debugger
- **Show Perf Monitor**: Display performance metrics
- **Settings**: Configure development options

**Console Logs**:

- View console logs in the Expo CLI terminal
- Use `console.log()` statements for debugging

#### Testing Different Scenarios

**Network Testing**:

- Test app behavior with slow internet connections
- Test offline functionality (if implemented)

**Device Testing**:

- Test on different screen sizes and orientations
- Test with different device capabilities (camera, location, etc.)

**Performance Testing**:

- Monitor app performance on actual devices
- Test memory usage and battery consumption

#### Best Practices for Mobile Testing

1. **Regular Testing**: Test on both iOS and Android devices regularly
2. **Real Device Testing**: Always test on physical devices, not just simulators
3. **Network Conditions**: Test with different network speeds and conditions
4. **User Scenarios**: Test complete user journeys from start to finish
5. **Performance Monitoring**: Keep an eye on app performance and loading times

### Production Build

#### 1. Build for App Stores

**iOS (App Store)**:

```bash
eas build --platform ios
```

**Android (Google Play Store)**:

```bash
eas build --platform android
```

#### 2. Build for Web

```bash
npm run web:build
# or
expo export --platform web
```

#### 3. Deploy to Expo Application Services (EAS)

1. **Install EAS CLI**:

   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**:

   ```bash
   eas login
   ```

3. **Configure EAS**:

   ```bash
   eas build:configure
   ```

4. **Build and Submit**:
   ```bash
   eas build --platform all
   eas submit --platform ios
   eas submit --platform android
   ```

## 🔧 Configuration

### App Configuration (`app.json`)

- **App Name**: RenewlyMarketApp
- **Version**: 1.0.0
- **Orientation**: Portrait
- **Platforms**: iOS, Android, Web
- **Splash Screen**: Custom splash screen with app branding
- **Icons**: Platform-specific app icons

### Dependencies

Key dependencies include:

- `@react-navigation/*` - Navigation between screens
- `@solana/web3.js` - Solana blockchain integration
- `@supabase/supabase-js` - Backend database and authentication
- `@tanstack/react-query` - Data fetching and caching
- `expo-*` - Expo SDK modules for camera, notifications, etc.
- `react-native-vector-icons` - Icon library

## 📁 Project Structure

```
RenewlyMarketApp/
├── assets/                 # App icons and images
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BottomTabBar.tsx
│   │   ├── Header.tsx
│   │   └── ProductCard.tsx
│   ├── screens/           # Main app screens
│   │   ├── HomeScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   ├── SellScreen.tsx
│   │   ├── ChatScreen.tsx
│   │   └── ProfileScreen.tsx
│   └── services/          # Data and API services
│       └── mockData.ts
├── App.tsx               # Main app component
├── app.json             # Expo configuration
└── package.json         # Dependencies and scripts
```

## 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface with gradient accents
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Fluid transitions and interactions
- **Accessibility**: Support for screen readers and accessibility features
- **Dark Mode Ready**: Prepared for theme switching (future feature)

## 🔒 Security & Privacy

- **Data Encryption**: Secure storage of sensitive information
- **Authentication**: User authentication through Supabase
- **Input Validation**: Form validation and sanitization
- **API Security**: Secure API endpoints with proper authentication

## 🚀 Deployment Options

### 1. Expo Application Services (EAS)

- **Easiest option** for React Native apps
- **Automatic builds** for iOS and Android
- **Over-the-air updates** for quick fixes
- **Analytics and crash reporting**

### 2. App Store Deployment

- **iOS App Store**: Submit through EAS or Xcode
- **Google Play Store**: Submit through EAS or Android Studio
- **App review process** required for both platforms

### 3. Web Deployment

- **Vercel**: Deploy web version with `vercel --prod`
- **Netlify**: Deploy with drag-and-drop or Git integration
- **AWS Amplify**: Full-stack deployment solution

## 🧪 Testing

### Manual Testing

- Test on physical devices (iOS and Android)
- Test on simulators/emulators
- Test different screen sizes and orientations

### Automated Testing (Future)

- Unit tests with Jest
- Integration tests with Detox
- E2E tests with Appium

## 📊 Analytics & Monitoring

- **Expo Analytics**: Built-in usage analytics
- **Crash Reporting**: Automatic crash detection
- **Performance Monitoring**: App performance metrics
- **User Behavior**: Track user interactions and flows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the Expo documentation for detailed guides
- **Community**: Join the Expo Discord or React Native community
- **Issues**: Report bugs and feature requests through GitHub issues

## 🔮 Future Enhancements

### 🤖 AI-Powered Features

- **AI-Assisted Product Search**: Intelligent search that automatically contacts sellers for missing information
- **Smart Product Matching**: AI analyzes user preferences and notifies when matching products become available
- **Automated Seller Communication**: AI reaches out to sellers for product clarification and updates
- **Image Recognition**: AI-powered product categorization and condition assessment

### 💬 Enhanced Communication

- **Real-Time Chat**: Direct messaging between buyers and sellers with push notifications
- **Product-Specific Conversations**: Chat threads linked to specific product listings
- **Voice Messages**: Audio communication support for better user experience
- **Translation Support**: Multi-language chat support for global marketplace

### 🏆 Blockchain Rewards System

- **NFT Rewards**: Unique digital collectibles for active users and verified sellers
- **Token Economy**: Earn marketplace tokens for transactions, reviews, and community contributions
- **Staking Rewards**: Stake tokens to earn additional rewards and unlock premium features
- **Achievement System**: Gamified rewards for completing various marketplace activities

### ✅ Product Authentication & Verification

- **Local Verifiers Network**: Community-driven product verification system
- **Verification Badges**: Authenticated products display verification badges for trust
- **Verifier Rewards**: Earn tokens and NFTs for successful product verifications
- **Quality Assurance**: Multi-level verification process for high-value items
- **Geographic Verification**: Local verifiers can physically inspect products in their area

### 🔔 Smart Notifications

- **Push Notifications**: Real-time alerts for messages, price drops, and new listings
- **AI Recommendations**: Personalized product suggestions based on user behavior
- **Price Drop Alerts**: Get notified when favorite items drop in price
- **Verification Updates**: Track the status of product verification requests

### 💳 Payment & Security

- **Secure Payment Integration**: Multiple payment methods with blockchain support
- **Escrow Services**: Secure transaction handling for high-value items
- **Dispute Resolution**: AI-assisted conflict resolution system
- **Fraud Prevention**: Advanced fraud detection using AI and community reporting

### 🌐 Social & Community Features

- **User Reviews & Ratings**: Comprehensive feedback system with blockchain verification
- **Community Forums**: Discussion boards for product categories and sustainability topics
- **Social Sharing**: Share listings and achievements on social media
- **Referral Rewards**: Earn tokens for bringing new users to the platform

### 📱 Advanced Features

- **Offline Support**: Offline-first functionality with sync when online
- **AR Product Visualization**: Augmented reality for product preview and verification
- **Voice Search**: Hands-free product search using voice commands
- **Multi-Language Support**: Global marketplace with translation services

---

**Built with ❤️ for a sustainable future**
