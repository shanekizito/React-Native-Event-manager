import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import Ticket from "./screens/Ticket";
import PhoneNumberAuth from './screens/PhoneNumberAuth';
import Venue from "./screens/Venue";
import Notification from './screens/Notification';
import SignUp from './screens/SignUp';
import Verify from './screens/Verify';
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
       
        tabBarActiveTintColor:'#424242',
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarStyle: { position: 'absolute',
        bottom:10,
        
        left:10,
        right:10,
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 24,
        backgroundColor:'#fff',
        height:60,
      padding:10 },
                
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
        name="PhoneNumberAuth"
        component={PhoneNumberAuth}
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
        name="Verify"
        component={Verify}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={35} />
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
            <MaterialCommunityIcons name="bell-outline" color={color} size={35} />
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
           <View style={{backgroundColor:"#000",color:"#fff",fontSize:15,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",height:36,width:36}}>
            <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>S</Text>
            </View>
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
