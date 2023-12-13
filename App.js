import 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './components/src/LandingPage.js';
import Signup from './components/src/Signup.js';
import Login from './components/src/Login.js';
import HomePage from './components/src/Home.js';
import IdeaInsight from './components/src/IdeaInsight.js';
import Otp from './components/src/Otp.js'
import ForgotPassword from './components/src/ForgotPassword.js';
import ResetPassword from './components/src/ResetPassword.js';
import homepic from './components/assests/homepic.png'
import profilepic from './components/assests/profilepic.png'
import settings from './components/assests/settings.png'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? homepic : homepic;
        } else if (route.name === 'Profile') {
          iconName = focused ? profilepic : profilepic;
        } else if (route.name === "Settings"){
          iconName = focused ? settings : settings;
        }

        return <Image source={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#004F42',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={HomePage} options={{headerShown:false}}/>
      <Tab.Screen name="Settings" component={HomePage} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Page" component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="IdeaInsight" component={IdeaInsight} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
