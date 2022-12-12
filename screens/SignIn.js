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






const SignIn = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState("");



  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={handleLogin}
     style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );


  // handle login
  const handleLogin = () => {
    // check if user has verified their phone number
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(result => {
        // user has verified their phone number
        // log user in
        result.user.linkWithCredential(firebase.auth.PhoneAuthProvider.credential(result.verificationId, password))
          .then(() => {
            navigation.navigate('Home',{contact:phoneNumber,userName:"shane" })
          })
          .catch(error => {
            // handle error
          });
      })
      .catch(error => {
        // user has not verified their phone number
        // handle error
      });
  }



  return (
    
        <SafeAreaView style={styles.container}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <HomeHeader/>
        <View style={styles.form}>
        <Text style={styles.text}>Sign in</Text>
        
        <TextInput
            placeholder={'Phone Number'}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}

            style={styles.input}
        />
        <TextInput
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry={true}
        />
       
        <AppButton title="Sign in" size="sm" backgroundColor="#007bff" />
        <View style={styles.registerLink}>
        <Text style={{color:"#929292"}}>Don't have an account ? </Text> 
        <TouchableOpacity onPress={() =>
      navigation.navigate('SignUp', { name: 'Jane' })
        } >
        <Text style={styles.registerButton}>create one</Text>
        </TouchableOpacity>
        </View>
        
         
        
    </View>
    </SafeAreaView>
  )
}



export default SignIn;