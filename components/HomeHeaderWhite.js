import React from "react";
import { View, Text, Image, TextInput,Button,TouchableOpacity,StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  FocusedStatusBar } from "../components";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };







const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  homeHeaderWhiteContainer :{
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#ffff',
    height:60,
    
    elevation:2,
  },
  Header:{
 fontFamily: 'RalewayBold',
 fontSize:15,
 position:'absolute',
 marginLeft:120,
 color:'#363636'
  },

  appButtonContainer: {
   
    position:'absolute',
   
    alignItems:"center",
    justifyContent:"center",
    color:'#363636',
    
    marginLeft: 300,
     
    
    
    alignItems:'center',
    justifyContent:'center',

    
    width:40,
    height:40
  },
  appButtonText: {
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "center",
  },
  BackButtonContainer:{
    
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center',
   
    marginLeft:10,
    
  },
});




const HomeHeaderWhite = ({ header,navigation  }) => {



  const NotificationButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={()=>{ navigation.navigate('Details', { name: 'Jane' })}} style={styles.appButtonContainer}>
      <Image style={{width:30,height:35}} 
      source={{ uri:"https://img.icons8.com/fluency/48/000000/fire-element.png" }} 
      />
     
    </TouchableOpacity>
  );
  
  
  const BackButton = () => (
     
    <TouchableOpacity style={styles.BackButtonContainer} onPress={() =>
      navigation.goBack()
    } >
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="arrow-left" size={40} color="red"/>
      </IconComponentProvider>
    </TouchableOpacity>
     
  );

  return (
    
        
        <View style={styles.homeHeaderWhiteContainer}>
          
          <BackButton/>
          <NotificationButton/>
          <Text style={styles.Header}>{header}</Text>
        </View>
       
      
  );
};

export default HomeHeaderWhite;
