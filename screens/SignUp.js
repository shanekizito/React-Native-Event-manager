import React from 'react'
import { Alert, Button, TextInput, Text,View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {  FocusedStatusBar, HomeHeader } from "../components";
import { COLORS} from "../constants";
import {  useState } from "react";
import {doc, setDoc,getFirestore} from 'firebase/firestore'
import 'firebase/firestore';

import { getFirestore, collection, getDocs,createUserWithEmailAndPassword } from 'firebase/firestore/lite';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBSGXuwm2g6kcp8WJFMUNCrksryZ8PTEqk",
    authDomain: "onthego-52662.firebaseapp.com",
    databaseURL: "https://onthego-52662-default-rtdb.firebaseio.com",
    projectId: "onthego-52662",
    storageBucket: "onthego-52662.appspot.com",
    messagingSenderId: "596897853249",
    appId: "1:596897853249:web:f2c7f8d03a18cae2f47bc0"
};


let app = initializeApp(FIREBASE_CONFIG);



const SignUp = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);
  const db = getFirestore(app);
  const userDB = collection(db, "users");



  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
       
        onRegister().navigation.navigate('PhoneNumberAuth',{contact:phoneNumber })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );


  if (name.length == 0 || username.length == 0 || email.length == 0 || password.length == 0) {
    setIsValid({ bool: true, boolSnack: true, message: "Please fill out everything" })
    return;
}
if (password.length < 6) {
    setIsValid({ bool: true, boolSnack: true, message: "passwords must be at least 6 characters" })
    return;
}
if (password.length < 6) {
    setIsValid({ bool: true, boolSnack: true, message: "passwords must be at least 6 characters" })
    return;
}

   



  return (
    
        <SafeAreaView style={styles.container}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <HomeHeader/>
        <View style={styles.form}>
        <Text style={styles.text}>Create account</Text>
        <TextInput
            placeholder={'Name'}
            
            value={username}
            style={styles.input}
            onChangeText={(username) => setUsername(username.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').replace(/[^a-z0-9]/gi, ''))}
        />
        <TextInput
            placeholder={'Email'}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
        />
        <TextInput
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
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



export default SignUp;