import React, { useState } from 'react';
import { Alert, Button, TextInput, Text, View } from 'react-native';
import {doc, setDoc,getFirestore} from 'firebase/firestore'
import 'firebase/firestore';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");


  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={handleSubmit}
         style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );



  // handle submission of phone number and password
  const handleSubmit = () => {
    // create user with phone number and password
    firebase.auth().createUserWithPhoneNumber(email, password)
      .then(result => {
        // save user to Firestore
        firebase.firestore().collection('users')
          .doc(result.user.uid)
          .set({
            name,
            email,
            username,
            password
          });
      })
      .catch(error => {
        console.log(error)
      });
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