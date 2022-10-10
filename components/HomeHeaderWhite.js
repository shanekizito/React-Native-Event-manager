import React from "react";
import { View, Text, Image, TextInput,Button,TouchableOpacity,StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  FocusedStatusBar } from "../components";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
     <Icon name="login" size={15} color="#5c5c5c"/>
  </IconComponentProvider>{title}</Text>
  </TouchableOpacity>
);







const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f7f7f7f1",
    color:'#000',
    marginTop:-20,
    height: 40,
    borderRadius: 20,
    width:100,
    paddingVertical: 5,
    paddingHorizontal: 1
  },
  BackButtonContainer:{
    backgroundColor:"black",
    opacity:.5,
    borderRadius:200,
    alignItems:'center',
    marginTop:-20,
    marginBottom:120,
    marginLeft:10,
    padding:5,
    width:50,
  },
  appButtonText: {
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "center",
  }
});




const HomeHeaderWhite = ({ onSearch }) => {

  return (
        <View style={{ width: '100%'  ,height:60,marginBottom:22,
        borderBottomWidth:1,borderColor:'rgba(228, 224, 224, 0.795)',
        }}>
        < FocusedStatusBar/>
        <Image
          source={assets.bannerLogoWhite}
          resizeMode="contain"
          style={{ width: '60%',marginLeft:20 ,height:'100%'}}
        />
        </View>
      
  );
};

export default HomeHeaderWhite;
