import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import Venue from "./screens/Venue";
import Notification from './screens/Notification';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();








const MyTabs=()=>{
  return (
    <Tab.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown:false,
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={200} style={{height:100}} />
        ),
      }}
    >
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarButton: () => null,
           tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-search" color={color} size={size} />
          ),
        }}
      />


<Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
          ),
        }}
      />
  <Tab.Screen
        name="Venue"
        component={Venue}
        options={{
          tabBarButton: () => null,
           tabBarVisible: false,
        }}
      />

<Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarButton: () => null,
           tabBarVisible: false,
        }}
      />
      




      
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
