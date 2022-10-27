

import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, ActivityIndicator,Pressable  } from 'react-native';
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










export default function PhoneAuthScreen() {
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;
 

 

  










  return (
    <View style={styles.container}>
      <View style={styles.content}>
      
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_CONFIG}
          attemptInvisibleVerification={true }
        />
        <Text style={styles.title}>Verify Account</Text>
        
        
       

         
        <Text style={styles.text}>phone</Text>
        <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+254</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="phone number"
          editable={!verificationId}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber+254)}
        />
        </View>
        
        <Button
          title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
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
            } catch (err) {
              setVerifyError(err);
              setVerifyInProgress(false);
            }
          }}
        />
        {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>A verification code has been sent to your phone</Text>
        ) : undefined}
        <Text style={styles.text}>Enter verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          keyboardType="number-pad"
         
          placeholder="123456"
          onChangeText={verificationCode => setVerificationCode(verificationCode)}
        />
        <Button
          title="Confirm Verification Code"
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
          }}
        />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginTop: 50,
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
    

   
    
  }
});