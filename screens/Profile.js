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


const Profile = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   return (
    <View style={styles.container}>
    <HomeHeaderWhite/>

    <Text style={styles.header}> Account settings</Text>
    <View style={styles.form}>
        
        <View style={styles.inputSection}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.inputIcon} name="map-marker" size={25} color="#000"/>
                </IconComponentProvider>
            <TextInput
                    placeholder={'Email'}
                    style={styles.input}
                    placeholderTextColor="#000"
                    editable={false}
            />
        </View>
        <View style={styles.inputSection}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.inputIcon} name="email-outline" size={25} color="#000"/>
                </IconComponentProvider>
            <TextInput
                    placeholder={'Email'}
                    style={styles.input}
                    placeholderTextColor="#000"
                    editable={false}
            />
        </View>
        <View style={styles.inputSection}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.inputIcon} name="account-outline" size={25} color="#000"/>
                </IconComponentProvider>
            <TextInput
                    placeholder={'User Name'}
                    style={styles.input}
                    placeholderTextColor="#000"
                    editable={false}
            />
        </View>
        <View style={styles.inputSection}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.inputIcon} name="phone-outline" size={25} color="#000"/>
                </IconComponentProvider>
            <TextInput
                    placeholder={'Phone Number'}
                    style={styles.input}
                    placeholderTextColor="#000"
                    editable={false}
            />
        </View>

       

        <View style={styles.inputSection}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.inputIcon} name="map-marker-outline" size={25} color="#000"/>
                </IconComponentProvider>
            <TextInput
                    placeholder={'Current Location'}
                    style={styles.input}
                    placeholderTextColor="#000"
                    editable={false}
            />
        </View>
        <View style={styles.notification}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon style={styles.notificationIcon} name="bell" size={25} color="black"/>
                </IconComponentProvider>
            <Text style={{fontSize:17}}>Notifications</Text>
            <Switch
                    style={{marginLeft:"37%"}}
                    trackColor={{ false: "#767577", true: "green" }}
                    thumbColor={isEnabled ? "green" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
            />
        </View>
        <AppButton title="Edit" size="sm" backgroundColor="#007bff" />

    </View>
    </View>
  )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor:"#ffff" ,
        
    },
    header:{
    fontSize:20,
    fontWeight:"900",
    marginLeft:20
    },
    notification:{
        height:50,
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems: 'center',
        
        marginTop:5,
        
    
    },
    notificationIcon:{
        borderWidth:1,
        borderColor:'#e1e2e0',
        height:'100%',
        padding:9,
        marginRight:10,
        borderRadius:5,
    },
    inputIcon: {
        borderWidth:1,
        borderColor:'rgb(221, 221, 221)',
        borderRadius:5,
        height:'100%',
        padding:9,
    },

    inputSection:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#ffff" ,
        marginTop:5,
        paddingLeft:10
    },
    form:{
        padding:20,
        backgroundColor:"#ffff" ,
        flex:1,
        marginTop:10,

    },
    text:{
        fontSize: 20,
         fontWeight :'bold',
         marginBottom:12,
    },
    input: {  
    color:'#000',
    height:40,
    fontSize:17,
    width:'90%',
    borderRadius:5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginLeft:10,

   
    color: '#424242',
        

    },
    appButtonContainer:{
        backgroundColor: "#000",
        color:'#fff',
        marginTop:50,
        borderRadius: 25,
        width:'100%',
        height:45,
        paddingVertical:9,
        paddingHorizontal: 5,
    },
    appButtonText:{
        fontSize: 17,
        color: "#fff",
        alignSelf: "center",
    },
    registerLink:{
     marginTop:30,
     marginLeft:25,
     color:'grey',
     fontSize:15,
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center'

    },
    registerButton:{
        color:'blue',
        marginLeft:5,
        
    }



});

export default Profile;