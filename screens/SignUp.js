import React from 'react'
import { Alert, Button, TextInput, Text,View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {  FocusedStatusBar, HomeHeader } from "../components";
import { COLORS} from "../constants";
import {  useState } from "react";
import {doc, setDoc,getFirestore} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';


import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';

import { auth, database } from '../config/firebase';



const SignUp = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const collectionRef = collection(database, 'users');
  const q = query(collectionRef, orderBy('createdAt', 'desc'));




  


const handleSubmit = () => {
    // create user with phone number and password
    createUserWithEmailAndPassword(auth,email, password)
      .then(result => {
        // save user to Firestore
        addDoc(collectionRef,{
                username:username,
                email:email,
                phoneNumber:phoneNumber,   
        })
      }).then(navigation.navigate('PhoneNumberAuth',{contact:phoneNumber }))
      .catch(error => {
        console.log(error)
      });
}


const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={
        handleSubmit
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
            placeholderTextColor={'grey'}
            value={username}
            style={styles.input}
            onChangeText={(username) => setUsername(username.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').replace(/[^a-z0-9]/gi, ''))}
        />
        <TextInput
            placeholder={'Email'}
            placeholderTextColor={'grey'}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
        />
        <TextInput
            placeholder={'phoneNumber'}
            placeholderTextColor={'grey'}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            style={styles.input}
        />
        <TextInput
            placeholder={'Password'}
            style={styles.input}
            placeholderTextColor={'grey'}
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
        
          color:"black",
        
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
        color:'black',
        height:40,
        marginTop:20,
        padding:10,
       
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