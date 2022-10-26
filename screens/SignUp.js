import React from 'react'
import { Alert, Button, TextInput, Text,View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {  FocusedStatusBar, HomeHeader } from "../components";
import { COLORS, NFTData ,assets} from "../constants";
import Home from './Home';
import {  useState } from "react";
const styles = StyleSheet.create({


    container: {
        flex: 1,
         
        
    },
    form:{
        padding:20,
        
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width:'98%',
        height: '65%',
        


    },
    text:{
        fontSize: 20,
        fontFamily: 'RalewayBold',
         marginBottom:12,
    },
    input: {
        borderBottomColor:'rgba(196, 193, 193, 0.945)',
        borderBottomWidth:1,
        color:'#000',
        height:40,
        marginTop:20,
        padding:10,
        borderRadius:15,
        fontFamily: 'RalewayRegular'


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
        fontFamily: 'RalewayRegular'
    },
    registerLink:{
     marginTop:30,
     marginLeft:25,
     color:'#afafaf',
     fontSize:15,
     fontFamily: 'RalewayRegular',
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center'

    },
    registerButton:{
        color:'#000',
        fontFamily: 'RalewayBold',
        marginLeft:8,
        
    }



});






const SignUp = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState("");



  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('PhoneNumberAuth',{contact:phoneNumber })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );



  return (
    
        <SafeAreaView style={styles.container}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <HomeHeader/>
        <View style={styles.form}>
        <Text style={styles.text}>Create account</Text>
        <TextInput
            placeholder={'Name'}
            

            style={styles.input}
        />
        <TextInput
            placeholder={'Email'}
             

            style={styles.input}
        />
        <TextInput
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry={true}
        />
        <TextInput
            placeholder={'Confirm Password'}
            style={styles.input}
            secureTextEntry={true}
        />
       
        <AppButton title="Next" size="sm" backgroundColor="#007bff" />
        <View style={styles.registerLink}>
        <Text style={{color:"#929292"}}>Already have an account ? </Text> 
        <TouchableOpacity onPress={() =>
      navigation.navigate('SignIn', { name: 'Jane' })
        } >
        <Text style={styles.registerButton}>Login</Text>
        </TouchableOpacity>
        </View>
        
         
        
    </View>
    </SafeAreaView>
  )
}



export default SignUp;