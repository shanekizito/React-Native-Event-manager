import React, { useState,useCallback,useEffect} from "react";
import { View, SafeAreaView, FlatList,ImageBackground,StyleSheet,Dimensions,TouchableOpacity,Text} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {  HomeHeader} from "../components";
import TypeWriter from 'react-native-typewriter'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';  
import { HomeHeaderWhite} from "../components";






const Home = ({ navigation }) => {

  const [cityOpen, setCityOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [valueTown, setValueTown] = useState(null);
  const [items, setItems] = useState([
    {label: 'What would you like to discover', value: 'label' ,
    containerStyle:{
      backgroundColor: "#000",
      borderRadius:5,
      color:'#fff',
      padding:0,
    },
    labelStyle: {
      color: "#fff"
    }},
    {label: 'Day Vibes', value: 'day'},
    {label: ' Happy hour', value: 'hour'},
    {label: 'Nature Parks', value: 'parks'},
    {label: 'Sightseeing & Attractions', value: 'sight'},
    {label: 'Weekly Specials', value: 'specials'},
  ]);
  const [location, setLocation] = useState([
    {label: 'Where in Kenya', value: 'label' ,
    containerStyle:{
      backgroundColor: "#000",
      borderRadius:5,
      color:'#fff',
      padding:10
    },
    labelStyle: {
      color: "#fff"
    }},
    {label: 'Mombasa', value: 'Mombasa' },
    {label: 'Nairobi', value: 'Nairobi'}
  ]);
  const  [user,setUser] = useState(null);





useEffect(()=>{
  const unsubscribeAuth = onAuthStateChanged(
    auth, async authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setIsLoading(false);
    }
  );
  return unsubscribeAuth;
},[user])



  const onTownOpen = useCallback(() => {
    setMoodOpen(false);
    
  }, []);

  const onVibeOpen = useCallback(() => {
    setCityOpen(false);
  }, []);
  

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({  title }) => (
 <View>
  <TouchableOpacity onPress={() =>
    navigation.navigate('Details', { name: 'Jane' })
  } style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>
    {title}</Text>
  </TouchableOpacity>
  </View>
);

const SignInButton = ({ title }) => (
  <TouchableOpacity onPress={() =>
    navigation.navigate('SignIn', { name: 'Jane' })} style={styles.SignInButtonContainer}>
    <Text style={styles.SignInButtonText}>
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
     <Icon name="login" size={15} color="#5c5c5c"/>
  </IconComponentProvider>{title}</Text>
  </TouchableOpacity>
);
 
  

  return (

    <SafeAreaView style={{ flex: 1 }}>   
      
      <ImageBackground     
       source={{uri:"https://cdn.uc.assets.prezly.com/6144c428-5a1d-44aa-ad3e-685ed09f0f5e/-/preview/1200x1200/-/format/auto/"}} 
       style={{width:"100%", height: "100%"}}>
      <View    style={styles.bgBody}>
       <HomeHeader/>
       {!user?<SignInButton title=" sign in" size="sm" backgroundColor="#007bff" />:null}
       
       <View style={{marginTop:10,
    
        }}/>
      
       <TypeWriter typing={1} style={
        {marginBottom:30,fontSize:44,marginTop:30,
        color:"#fff", marginLeft:"3%",height:150,fontFamily: 'RalewayRegular',
        }}>Discover where to go out</TypeWriter>
        <DropDownPicker
          open={cityOpen}
          onOpen={onTownOpen}
          listItemLabelStyle={{
          color: "grey",
          marginTop:0,
          fontSize:13,
        }}
        setOpen={setCityOpen}
        zIndex={1000}
        zIndexInverse={2000}
        placeholder="Where in Kenya"
        placeholderStyle={{
        color: "grey",
        marginLeft:15,
        fontFamily: 'RalewayRegular'
        }}
        dropDownContainerStyle={{
        borderWidth: 0,
        padding:20,
        width:'90%',
        marginLeft:"3%",
       
        }}
        containerStyle={{
         
          

        }}
        textStyle={{
          fontSize: 15,
          fontFamily: 'RalewayRegular'
        }}
      value={valueTown}
      items={location}
      setValue={setValueTown}
      setItems={setLocation}
      style={{
      backgroundColor: "white",
      flexDirection: "row",
      borderWidth:0,
      marginLeft:"3%",
      height: 50,
      width:'90%',
      borderRadius:5,
      alignItems:'center',
      justifyContent: "space-between",
      zIndex:1,
      padding:10
        }}/>
        <DropDownPicker
        open={moodOpen}
        onOpen={onVibeOpen}
        setOpen={setMoodOpen}
        zIndex={1000}
        zIndexInverse={1000}
        dropDownDirection="BOTTOM"
        placeholder="What would you like to discover"
        placeholderStyle={{
          color: "grey",
          marginLeft:15,
          fontFamily: 'RalewayRegular'
          
        }}
        listItemLabelStyle={{
          color: "grey",
          marginTop:5,
          fontSize:13,
          fontFamily: 'RalewayRegular'
        }}
      value={value}
      items={items}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
      borderWidth: 0,
      padding:20,
      width:'90%',
      marginLeft:"3%",
      flexDirection:'column',
      
      }}
      containerStyle={{
        
        
      }}
      textStyle={{
        fontSize: 15,
        fontFamily: 'RalewayRegular'
      }}
    maxHeight={200}
    style={{
    backgroundColor: "white",
    borderWidth:0,
    borderWidth:0,
    marginLeft:"3%",
    flexDirection: "row",
    zIndex:2,
    marginTop:10,
    height: 50,
    width: '90.5%',
    borderRadius:5,
    alignItems:'center',
    justifyContent: "space-between",
    padding:5
        }}/>
        <AppButton title="Search" size="sm" backgroundColor="#007bff" /> 
       </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screenContainer: {
    height:30,
    justifyContent: "center",
    padding: 16,
    zIndex:-1,
    
  },
  
  appButtonContainer: {
    backgroundColor: "#000",
    marginLeft:20,
    color:'#fff',
    marginTop:20,
    borderRadius: 25,
    width:100,
    height:45,
    paddingVertical:9,
    paddingHorizontal: 5,
    
  },
  appButtonText: {
    fontSize: 17,
    color: "#fff",
    alignSelf: "center",
    fontFamily: 'RalewayRegular'
  },
  bgBody:{
    backgroundColor:"#6d6b6b8e",
    flex:1,
  },
  BackButtonContainer:{
    backgroundColor:"black",
    opacity:.5,
    borderRadius:200,
    alignItems:'center',
    marginTop:-20,
    marginBottom:120,
    marginLeft:10,
    padding:5,
    width:50,
  },
  SignInButtonContainer: {
    elevation: 8,
    backgroundColor: "#f7f7f7f1",
    color:'#000',
    height: 40,
    borderRadius: 20,
    marginTop:-20,
    marginLeft:10,
    width:100,
    paddingVertical: 5,
    paddingHorizontal: 1,
    
  },
  SignInButtonText: {
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "center",
    fontFamily: 'RalewayRegular'
  }
});


export default Home;
