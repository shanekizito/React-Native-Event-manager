import React from 'react'
import { Alert, Button, TextInput, Text,View, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import { HomeHeaderWhite,  FocusedStatusBar } from "../components";
import { COLORS, NFTData ,assets} from "../constants";

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
         fontWeight :'bold',
         marginBottom:12,
    },
    input: {
        borderBottomColor:'rgba(196, 193, 193, 0.945)',
        borderBottomWidth:1,
        color:'#000',
        height:40,
        marginTop:20,
        padding:10,
        borderRadius:15


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

const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('Details', { name: 'Jane' })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title}</Text>
    </TouchableOpacity>
  );



const SignIn = ({navigation}) => {

  return (
    
        <SafeAreaView style={styles.container}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <HomeHeaderWhite/>
        <View style={styles.form}>
        <Text style={styles.text}>Sign in</Text>
        
        <TextInput
            placeholder={'Email'}
            style={styles.input}
        />
        <TextInput
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry={true}
        />
       
        <AppButton title="Sign in" size="sm" backgroundColor="#007bff" />
        <Text style={styles.registerLink}>Don't have an account ?  
        <TouchableOpacity onPress={() =>
      navigation.navigate('SignUp', { name: 'Jane' })
    } >
        <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
        </Text>
    </View>
    </SafeAreaView>
  )
}



export default SignIn;