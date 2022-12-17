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
import Map from './screens/Map';
import Verify from './screens/Verify';
import SignIn from './screens/SignIn';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import { useFonts } from 'expo-font';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BaseButton,GestureHandlerRootView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload } from './redux/actions/index';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import { firebaseConfig } from './config/firebase';
import { auth} from './config/firebase';

 

// Add your Firebase >=9.x.x config here
// https://firebase.google.com/docs/web/setup








import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { useEffect } from 'react';
import { set } from 'react-native-reanimated';







const Screens=()=> {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen  component={MyTabs} />
      </Stack.Navigator>
  );
}


const App=()=> {

  const MyTabs=()=>{
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor:'#424242',
          tabBarHideOnKeyboard:true,
          headerShown:false,
          tabBarStyle: { position: 'absolute',
          bottom:10,
          left:10,
          right:10,
          borderRadius:30,
          shadowColor: "#424242",
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
          }}>
  
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker-outline" color={"#424242"} size={30} />
            ),
          }}/>
  
  
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
  
        <Tab.Screen
          name="Verify"
          component={Verify}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
  
         <Tab.Screen
          name="PhoneNumberAuth"
          component={PhoneNumberAuth}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
        
        
         <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
  
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ticket-outline" color={"#424242"} size={30} />
            ),
          }}/>
  
  
         <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: '',
            tabBarBadge:'3',
            tabBarBadgeStyle: {
              maxWidth: 9,
              marginLeft:6,
              maxHeight: 9,
              fontSize: 5,
              lineHeight: 9,
              backgroundColor:"red",
              color:"#fff"
              },
             tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell-outline" color={"#424242"} size={30} />
            ),
          }}
        />
        
      <Tab.Screen
          name="Venue"
          component={Venue}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
  
       <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarButton: () => null,
             tabBarVisible: false,
          }}/>
  
  
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
             <View style={{backgroundColor:"#424242",color:"#fff",fontSize:15,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",height:36,width:36}}>
              <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}}>S</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
   const [loggedIn,setIsLoggedIn]=React.useState(false);

  
  const [loaded] = useFonts({
    RalewayRegular: require('./assets/fonts/Raleway-Regular.ttf'),
    RalewayBold: require('./assets/fonts/Raleway-Bold.ttf'),
  });



 

  
  if (!loaded) {
    return null;
  }

  
  return (
    
    <GestureHandlerRootView style={{flex: 1}}>
    <BottomSheetModalProvider >
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  );
}





export default App