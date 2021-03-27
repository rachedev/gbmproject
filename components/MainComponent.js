import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CakeInfo from './CakeInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Quotation from './QuotationComponent';
import Login from './LoginComponent';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import NetInfo from '@react-native-community/netinfo';

const QuotationNavigator = createStackNavigator(
  {
    Quotation: { screen: Quotation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerLeft: (
        <Icon
          name="birthday-cake"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const DirectoryNavigator = createStackNavigator(
  {
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    CakeInfo: { screen: CakeInfo },
  },
  {
    initialRouteName: 'Directory',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerLeft: (
        <Icon
          name="sign-in"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/logo.jpg')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.drawerHeaderText}>Gingerbread Man Bakery</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerLabel: 'Cake Varieties',
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Quotation: {
      screen: QuotationNavigator,
      navigationOptions: {
        drawerLabel: 'Request Price Quotation',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="birthday-cake"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: '#73c2fb',
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    // NetInfo.fetch().then((connectionInfo) => {
    //   Platform.OS === 'ios'
    //     ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
    //     : ToastAndroid.show(
    //         'Initial Network Connectivity Type: ' + connectionInfo.type,
    //         ToastAndroid.LONG
    //       );
    // });

    this.showNetInfo();

    this.unsubscribeNetInfo = NetInfo.addEventListener((connectionInfo) => {
      this.handleConnectivityChange(connectionInfo);
    });
  }

  showNetInfo = async () => {
    const connectionInfo = await NetInfo.fetch();
    Platform.OS === 'ios'
      ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
      : ToastAndroid.show(
          'Initial Network Connectivity Type: ' + connectionInfo.type,
          ToastAndroid.LONG
        );
  };

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  handleConnectivityChange = (connectionInfo) => {
    let connectionMsg = 'You are now connected to an active network.';
    switch (connectionInfo.type) {
      case 'none':
        connectionMsg = 'No network connection is active.';
        break;
      case 'unknown':
        connectionMsg = 'The network connection state is now unknown.';
        break;
      case 'cellular':
        connectionMsg = 'You are now connected to a cellular network.';
        break;
      case 'wifi':
        connectionMsg = 'You are now connected to a WiFi network.';
        break;
    }
    Platform.OS === 'ios'
      ? Alert.alert('Connection change:', connectionMsg)
      : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#ffff00',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    height: 50,
    width: 50,
  },
  stackIcon: {
    marginLeft: 10,
    color: '#000',
    fontSize: 24,
  },
});

export default Main;
