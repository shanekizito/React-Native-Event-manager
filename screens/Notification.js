import React, { useState } from "react";
import { View, SafeAreaView, Switch,ImageBackground,TextInput ,StyleSheet,TouchableOpacity,Text} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { HomeHeaderWhite} from "../components";


const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('Details', { name: 'Jane' })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );


const Notification = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   return (
    <View style={styles.container}>
    <HomeHeaderWhite/>


     
      <View style={styles.notificationContainer}>
        <Text style={styles.notification}>No new notifications</Text>
      
      </View>
      </View>

       
   )
};

const styles = StyleSheet.create({
notification:{
color:"#666664",
fontSize:15,
marginLeft:20,
},
notificationContainer:{
shadowColor: "#000",
height:100,

flexDirection:'column',
    backgroundColor: '#ffff',
    padding:10,
    borderRadius:10,
    width:'95%',
    
    justifyContent:'center',

    marginVertical: 15,
    marginTop:0,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
   	width: 0,
  	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1,
  },

    Container:{

    }


})

        



export default Notification;