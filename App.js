import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WelcomeScreen from './src/screens/Welcome'
import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard';
import Alamat from './src/screens/Alamat'
import Bar from './src/screens/Bar'
import TambahHewan from './src/screens/TambahHewan';
import Sukses from './src/screens/Sukses';
import Search from './src/screens/Search';
import Notifikasi from './src/screens/Notifikasi';
import Profile from './src/screens/Profile';
import Edit from './src/screens/Edit';
import Messenger from './src/screens/Messenger';
import Typing from './src/screens/Typing';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FDCB5A',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Alamat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="comment"
        component={Messenger}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifikasi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="account-circle"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='Dashboard' component={RootHome} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Bar' component={Bar} />
        <Stack.Screen name='TambahHewan' component={TambahHewan} />
        <Stack.Screen name='Sukses' component={Sukses} />
        <Stack.Screen name='Alamat' component={Alamat} />
        <Stack.Screen name='Notifikasi' component={Notifikasi} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Edit' component={Edit} />
        <Stack.Screen name='Typing' component={Typing} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App