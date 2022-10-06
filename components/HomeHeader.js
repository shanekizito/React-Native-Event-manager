import React from "react";
import { View, Text, Image, TextInput,Button,TouchableOpacity,StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

  


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
    height: 40,
    borderRadius: 20,
    width:100,
    paddingVertical: 5,
    paddingHorizontal: 1
  },
  appButtonText: {
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "center",
  }
});




const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
       
       
      }}
    >
      <View
        style={{
          backgroundColor:"white",
          width:'100%',
          height:100,
          marginBottom:20,
        }}
      >
        
        
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: '90%', height:'100%' }}
        />
        </View>
        <View style={{ width: '100%' ,borderBottom: '1px solid #64626246',marginBottom:5}}>
       
        </View>
      
        <View style={styles.screenContainer}>
      <AppButton title="sign in" size="sm" backgroundColor="#007bff" />
    </View>
       
      
        

       
    </View>
  );
};

export default HomeHeader;
