import React from 'react'
import { Alert, Button, TextInput, Text,View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {  FocusedStatusBar, HomeHeader } from "../components";
import { COLORS} from "../constants";
import {  useState } from "react";



require('firebase/firestore');


const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('PhoneNumberAuth',{contact:phoneNumber })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );



const SignUp = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);


  


  if (name.lenght == 0 || username.lenght == 0 || email.length == 0 || password.length == 0) {
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
firebase.firestore()
    .collection('users')
    .where('username', '==', username)
    .get()
    .then((snapshot) => {

        if (!snapshot.exist) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    if (snapshot.exist) {
                        return
                    }
                    firebase.firestore().collection("users")
                        .doc(firebase.auth().currentUser.uid)
                        .set({
                            name,
                            email,
                            username,
                            image: 'default',
                            followingCount: 0,
                            followersCount: 0,

                        })
                })
                .catch(() => {
                    setIsValid({ bool: true, boolSnack: true, message: "Something went wrong" })
                })
        }
    }).catch(() => {
        setIsValid({ bool: true, boolSnack: true, message: "Something went wrong" })
    })



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