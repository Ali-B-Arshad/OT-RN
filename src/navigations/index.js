import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthStack from './AuthStack'
import SplashScreen from '../screens/SplashScreen';
// Auth Imports
import AuthContext from '../utils/auth/context';
import authStorage from '../utils/auth/storage';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();
const MR = () => <Text>Music</Text>;

const Dr = () => {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor: '#000000',
      activeBackgroundColor: '#e6e6e6',
    }} >
      <Drawer.Screen name="Ali Bin Arshad" component={HomeScreen}
        options={{
          drawerLabel: 'Ali Bin Arshad',
          drawerIcon: () => (
            <Icon name="facebook" size={30} />
          ),
          headerTitle: () => (<>
            <Text >
              <Icon name="facebook" size={15} />
                Ali Bin Arshad </Text>
          </>),
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen name="Abdul Qadir" component={HomeScreen}
        options={{
          drawerLabel: 'Abdul Qadir',
          drawerIcon: () => (
            <Icon name="instagram" size={30} />
          ),
          headerTitle: () => (<>
            <Text >
              <Icon name="instagram" size={15} />
                Abdul Qadir </Text>
          </>),
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen name="Robab Malik" component={HomeScreen}
        options={{
          drawerLabel: 'Robab Malik',
          drawerIcon: () => (
            <Icon name="twitter" size={30} />
          ),
          headerTitle: () => (<>
            <Text >
              <Icon name="twitter" size={15} />
                Robab Malik </Text>
          </>),
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  )
}

function MainNavigator() {

  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  useEffect(() => {
    restoreUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Home" component={Dr} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default MainNavigator;
