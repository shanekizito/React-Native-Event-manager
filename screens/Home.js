import React, { useState,useCallback } from "react";
import { View, SafeAreaView, FlatList,ImageBackground,StyleSheet,Dimensions,TouchableOpacity,Text} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { NFTCard, HomeHeader, DropDown, FocusedStatusBar } from "../components";
import { COLORS, NFTData ,assets} from "../constants";
import TypeWriter from 'react-native-typewriter'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

  








const styles = StyleSheet.create({
  screenContainer: {
    height:30,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#000",
    color:'#fff',
    borderRadius: 20,
    width:100,
    height:40,
    paddingVertical: 10,
    paddingHorizontal: 1
  },
  appButtonText: {
    fontSize: 1,
    color: "#fff",
    alignSelf: "center",
  },
  bgBody:{
    backgroundColor:"#3a39394f",
    flex:1,
  }
});

const Home = ({ navigation }) => {
  const [nftData, setNftData] = useState(NFTData);
  const [cityOpen, setCityOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'What would you like to discover', value: 'label' ,
    containerStyle:{
      backgroundColor: "#000",
      borderRadius:5,
      color:'#fff',
      padding:10
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

  const onTownOpen = useCallback(() => {
    setMoodOpen(false);
    
  }, []);

  const onVibeOpen = useCallback(() => {
    setCityOpen(false);
  }, []);
  

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({  title }) => (
  <TouchableOpacity onPress={() =>
    navigation.navigate('Details', { name: 'Jane' })
  } style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>
    {title}</Text>
  </TouchableOpacity>
);
 
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ImageBackground
       
       source={{uri:"https://kenyaonthego.com/wp-content/uploads/2021/03/friends.jpg"}} 
       style={{width:"100%", height: "100%"}}>
      <View    style={styles.bgBody}>
       <HomeHeader/>
       <View style={{marginTop:"40%",
    
        }}/>
       <TypeWriter typing={1} style={
        {marginBottom:"5%",fontSize:45,
        color:"#fff", marginLeft:"3%",height:150
        }}>Discover where to go out</TypeWriter>
        <DropDownPicker
        open={cityOpen}
        onOpen={onTownOpen}
        listItemLabelStyle={{
          color: "grey",
          marginTop:10,
        }}
        setOpen={setCityOpen}
        zIndex={5000}
        zIndexInverse={1000}
        placeholder="Where in Kenya"
        
        placeholderStyle={{
          color: "grey",
          marginLeft:15
          
        }}
        dropDownContainerStyle={{
        borderWidth: 0,
        padding:20,
        width:'90%',
        marginLeft:"3%"
          
        }}
        containerStyle={{
         
          

        }}
        textStyle={{
          fontSize: 15
        }}
      value={value}
      items={location}
      setValue={setValue}
      setItems={setLocation}
      style={{
      backgroundColor: "white",
      flexDirection: "row",
      marginLeft:"3%",
      height: 50,
      width:'90%',
      borderRadius:5,
      alignItems:'center',
      justifyContent: "space-between",
      
      padding:10
        }}
        />
        <DropDownPicker
        open={moodOpen}
        onOpen={onVibeOpen}
        setOpen={setMoodOpen}
        zIndex={5000}
        zIndexInverse={1000}
        placeholder="What would you like to discover"
        placeholderStyle={{
          color: "grey",
          marginLeft:15
          
        }}
        listItemLabelStyle={{
          color: "grey",
          marginTop:10,
        }}
      value={value}
      items={items}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
      borderWidth: 0,
      padding:20,
      width:'90%',
      marginLeft:"3%"
      }}
      containerStyle={{
        
        
      }}
      textStyle={{
        fontSize: 15
      }}
    maxHeight={250}
    style={{
    backgroundColor: "white",
    marginLeft:"3%",
    flexDirection: "row",
    marginTop:10,
    height: 50,
    width: '90%',
    borderRadius:5,
    alignItems:'center',
    justifyContent: "space-between",
    padding:10
        }}
        />
        <View style={styles.screenContainer}>
      <AppButton title="Search" size="sm" backgroundColor="#007bff" />
      </View>   
      </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
};




export default Home;
