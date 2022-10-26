
import {  FocusedStatusBar, HomeHeader } from "../components";
import { COLORS, NFTData ,assets} from "../constants";
import Home from './Home';

 
import { ButtonContainer, ButtonText } from "./styles";
import React, {  useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput,Image, Button, Keyboard , Alert, ActivityIndicator,Pressable ,TouchableOpacity ,SafeAreaView} from 'react-native';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';


// Add your Firebase >=9.x.x config here
// https://firebase.google.com/docs/web/setup
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBSGXuwm2g6kcp8WJFMUNCrksryZ8PTEqk",
    authDomain: "onthego-52662.firebaseapp.com",
    databaseURL: "https://onthego-52662-default-rtdb.firebaseio.com",
    projectId: "onthego-52662",
    storageBucket: "onthego-52662.appspot.com",
    messagingSenderId: "596897853249",
    appId: "1:596897853249:web:f2c7f8d03a18cae2f47bc0"
};



try {
  if (FIREBASE_CONFIG.apiKey) {
    initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

// Firebase references
let app = getApp();
const auth = getAuth(app);


const styles = StyleSheet.create({


    container: {
        flex: 1,
        width:"100%",
        
         
        
    },
    form:{
        padding:20,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
  
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width:'98%',
        height: '65%',
         


    },
    text:{
        fontSize: 25,
        fontFamily: 'RalewayBold',
         marginBottom:12,
    },
    input: {
        borderBottomColor:'rgba(196, 193, 193, 0.945)',
        borderBottomWidth:2,
        color:'#000',
        height:40,
        fontSize:17,

        marginTop:20,
        padding:10,
        borderRadius:15,
        fontFamily: 'RalewayRegular',
        width:"70%"
  

    },
    mobileNumberContainer:{
    
   width:"100%",

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
        
    },
    prefix:{
      marginTop:50,
     
     fontWeight:"bold",
      fontSize:15,
      color:'gray',
    },
    info:{
      marginTop:10,
      fontSize:15,
      color:'gray',
      textAlign: "center",

    }
});






const PhoneNumberAuth = ({navigation,route}) => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  useEffect(() => {
    
    setPhoneNumber(route.params.contact)
   },[route.params.contact])

  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('Verify',{contact:phoneNumber })
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
      <Image
          source={assets.otp}
          resizeMode="contain"
          style={{ width: '60%',marginLeft:20 ,height:100}}
        />

      <Text style={styles.text}>OTP Verification</Text>
     
      
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={FIREBASE_CONFIG}
        attemptInvisibleVerification={true }
      />
       <Text style={styles.info}>We will send a one time password on this mobile number</Text>
      <View style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Text style={styles.prefix}>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        autoFocus={isConfigValid}
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        placeholder="+254 700 000 000"
        editable={!verificationId}
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      </View>
      <TouchableOpacity style={styles.appButtonContainer}
        disabled={!phoneNumber}
        onPress={async () => {
          const phoneProvider = new PhoneAuthProvider(auth);
           try {
            setVerifyError(undefined);
            setVerifyInProgress(true);
            setVerificationId('');
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerifyInProgress(false);
            setVerificationId(verificationId);
            verificationCodeTextInput.current?.focus();
            navigation.navigate('Verify',{contact:phoneNumber })
          } catch (err) {
            setVerifyError(err);
            setVerifyInProgress(false);
          }
        }}>


<Text style={styles.appButtonText}>
      GET OTP</Text>
       
        
      </TouchableOpacity>
      {verifyError && <Text style={styles.error}>{` please use a valid format`}</Text>}
      {verifyInProgress && <ActivityIndicator style={styles.loader} />}
      {verificationId ? (
        <Text style={styles.success}>A verification code has been sent to your phone</Text>
      ) : undefined}
        
       
      
       
        
         
        
        
      </View>
        
    </SafeAreaView>
  )
}



export default PhoneNumberAuth;