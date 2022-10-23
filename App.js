import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import Ticket from "./screens/Ticket"
import Venue from "./screens/Venue";
import Notification from './screens/Notification';
import SignUp from './screens/SignUp';
import HomeHeaderWhite from './components/HomeHeaderWhite';
import SignIn from './screens/SignIn';
import { BlurView } from 'expo-blur';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import { useFonts } from 'expo-font';








const MyTabs=()=>{
  return (
    <Tab.Navigator
      initialRouteName="SignIn"
      screenOptions={{
       
        tabBarActiveTintColor:'#db3005',
       
        headerShown:false,
        tabBarStyle: { position: 'absolute',
        bottom:10,
        left:10,
        right:10,
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 24,
        backgroundColor:'#fff',
        height:65, },
                
          }}
    >

<Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-outline" color={color} size={35} />
          ),
        }}
      />


      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarButton: () => null,
           tabBarVisible: false,
        }}
      />
      
      
       <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarButton: () => null,
           tabBarVisible: false,
        }}
      />

<Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-outline" color={color} size={35} />
          ),
        }}
      />
      
     


<Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: '',
          tabBarBadge:'3',
          tabBarBadgeStyle: {
            maxWidth: 10,
            maxHeight: 10,
            fontSize: 8,
            lineHeight: 9,
            backgroundColor:"#35a4e4",
            color:"#35a4e4"
           
       },
          tabBarIcon: ({ color, size }) => (
            <Image style={{width:30,height:35}} 
           source={{ uri:"https://img.icons8.com/fluency/48/000000/fire-element.png" }} 
             />
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
            <MaterialCommunityIcons name="account-outline" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Screens=()=> {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={MyTabs} />
     
      </Stack.Navigator>
  );
}


export default function App() {

  const [loaded] = useFonts({
    RalewayRegular: require('./assets/fonts/Raleway-Regular.ttf'),
    RalewayBold: require('./assets/fonts/Raleway-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
