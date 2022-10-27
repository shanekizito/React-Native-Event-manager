 


import OTPInput from "./OTPInput";
import { ButtonContainer, ButtonText } from "./styles";
import React, {  useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, Keyboard , Alert, ActivityIndicator,Pressable ,TouchableOpacity } from 'react-native';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { COLORS, NFTData ,assets} from "../constants";
import { HomeHeaderWhite} from "../components";
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











  
 


export default function Verify({ route, navigation }) {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState(otpCode);
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;
  
   


  useEffect(() => {
   setVerificationCode(otpCode)
   setPhoneNumber(route.params.contact)
  },[otpCode,route.params.contact])


  return (

    <View style={styles.screen}>
       <HomeHeaderWhite/>
    <View style={styles.container}>
     
      <Image
          source={assets.otp}
          resizeMode="contain"
          style={{ width: '60%',marginLeft:20 ,height:100}}
        />
    <Text style={styles.title}>OTP verification</Text>
    <Text style={styles.info}>Enter the OTP sent to  {route.params.contact}</Text>
    <View style={styles.content}>

    
      <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={FIREBASE_CONFIG}
        attemptInvisibleVerification={true }
      />
 
 
     
      
      
     

       
     
     
      {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
      {verifyInProgress && <ActivityIndicator style={styles.loader} />}
      {verificationId ? (
        <Text style={styles.success}>A verification code has been sent to your phone</Text>
      ) : undefined}
      
      <Pressable style={styles.container1} onPress={Keyboard.dismiss}>
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
        refer={verificationCodeTextInput}
      />


       

      </Pressable>
      <TouchableOpacity
       
        style={styles.appButtonContainer}
        disabled={!verificationCode}
        onPress={async () => {
          try {
            setConfirmError(undefined);
            setConfirmInProgress(true);
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            const authResult = await signInWithCredential(auth, credential);
            setConfirmInProgress(false);
            setVerificationId('');
            setVerificationCode('');
            verificationCodeTextInput.current?.clear();
            Alert.alert('Phone authentication successful!');
          } catch (err) {
            setConfirmError(err);
            setConfirmInProgress(false);
          }
        }}><Text style={styles.appButtonText}>Verify & Proceed</Text>
          
          </TouchableOpacity>

      {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}
      {confirmInProgress && <ActivityIndicator style={styles.loader} />}
    </View>
    {!isConfigValid && (
      <View style={styles.overlay} pointerEvents="none">
        <Text style={styles.overlayText}>
          To get started, set a valid firebaseConfig in App.js.
        </Text>
      </View>
    )}
    </View>
    </View>


    
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
  container: {
   
    padding: 20,
    alignItems: 'center',
    justifyContent:'center'

    

  },

  container1: {
    marginTop:30,
    

  },
  content: {
    marginTop: 50,
    width:'100%',
  },
  appButtonText:{
    fontSize: 17,
    color: "#fff",
    alignSelf: "center",
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
  hiddenInput: {
    width: "300px",
    borderColor: "#e5e5e5",
    borderWidth: "1px",
    borderRadius: "5px",
    padding: 15
  },
  SplitOTPBoxesContainer:{
    width: "80%",
    flexDirection: "row",
    justifyContent:"space-evenly"
  },
  splitBoxes: {
    borderColor: "#e5e5e5",
    borderWidth: "2px",
    borderRadius: "5px",
    padding: "12px",
    minWidth: "50px"
  },

  splitBoxesFocused:{
    borderColor: "#ecdbba",
    borderWidth: "2px",
    borderRadius: "5px",
    padding: "12px",
    minWidth: "50px",
    backgroundColor:"grey"
  },
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: 'bold',
    color: "#5d5f60",

  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
  },
  error: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  success: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFFC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
   
  },
  inputContainer: {
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom:10,
    padding:5
   
  },
  prefix: {
    paddingHorizontal: 5,
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
    marginRight:10,
   
    padding:5,
    borderRadius:5,
    

   
    
  },
  info:{
    marginTop:20,
    fontSize:15,
    color:'gray',
    textAlign: "center",

  }
});