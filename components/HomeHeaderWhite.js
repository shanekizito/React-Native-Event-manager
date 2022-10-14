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
   
    height:60,
    marginBottom:22,
    marginTop:20,
  },
  Header:{
 fontWeight:"bold",
 fontSize:17,
 position:'absolute',
 marginLeft:120,
 color:'#363636'
  },

  appButtonContainer: {
    elevation: 2,
    position:'absolute',
    backgroundColor: "#f7f7f7f1",
    alignItems:"center",
    justifyContent:"center",
    color:'#363636',
    marginTop:10,
    marginLeft: 300,
    height: 40,
    borderRadius: 20,
    width:40,
    padding:10,
    backgroundColor:"black",
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center',

    padding:5,
    width:40,
    height:40
  },
  appButtonText: {
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "center",
  },
  BackButtonContainer:{
    backgroundColor:"black",
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:0, 
    marginLeft:10,
    padding:5,
    width:40,
    height:40
  },
});




const HomeHeaderWhite = ({ header,navigation  }) => {



  const NotificationButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
       <Icon name="bell-outline" size={20} color="#ffff" styler={{fontWeight: 'bold'}} />
    </IconComponentProvider>{title}</Text>
    </TouchableOpacity>
  );
  
  
  const BackButton = () => (
    <View style={styles.BackButtonContainer}>
    <TouchableOpacity onPress={() =>
      navigation.goBack()
    } >
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="chevron-left" size={22} color="white"/>
      </IconComponentProvider>
    </TouchableOpacity>
    </View>
  );

  return (
    
        
        <View style={styles.homeHeaderWhiteContainer}>
          < FocusedStatusBar/>
          <BackButton/>
          <NotificationButton/>
          <Text style={styles.Header}>{header}</Text>
        </View>
       
      
  );
};

export default HomeHeaderWhite;
