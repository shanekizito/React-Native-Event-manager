import React from 'react';
import { SafeAreaView, View, FlatList,TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {  HomeHeaderWhite } from "../components";



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Black Pearl Launge and Grill',
    vibe:'Happy Hour',
    location:"Mamboleo Stage , Off - Vihiga Road , Kisumu",
    banner: 'https://cdn.uc.assets.prezly.com/63e33bf5-3a17-4b2d-bfae-18b6a1c528cc/-/preview/1200x1200/-/format/auto/',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Club Da Place',
    vibe:'Weekly Specials',
    location:"Nairobi Rd , Kisumu",
    banner: 'https://cdn.uc.assets.prezly.com/8f4a921a-814e-4032-9b87-77ff8e40323c/-/preview/1200x1200/-/format/auto/',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Alleways Beer Garden',
    vibe:'Weekly Specials',
    location:"Kisumu CBD Behind KPLC",
    banner: 'https://cdn.uc.assets.prezly.com/ab038d3e-0b19-4780-8d26-f8f5f327024d/-/preview/1200x1200/-/format/auto/',
  },

];




 
  


const Details= ({navigation}) => {
  
  const Item = ({ title ,banner,location,vibe}) => (
   
    <View style={styles.item}>
    
     <TouchableOpacity  onPress={() =>
        navigation.navigate('Venue', { item:{title,banner,location,vibe} })
      } >
     <Image style={styles.tinyLogo} resizeMode="cover"source={{ uri:banner}} />
       <View style={styles.heartIcon}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
         <Icon name="bookmark-outline" size={24} color="white"/>
        </IconComponentProvider>
       </View>

    
       <Text style={styles.vibe}>{vibe}</Text>
      
      </TouchableOpacity>
      <View style={styles.cardDetails}>
        <View  style={styles.bannerDetails}>
          
            <Text style={styles.location}>{title}</Text>
            
        </View>
       
    </View>

    </View>
  
  );
  
  const renderItem = ({ item }) => (
    <Item title={item.title}  navigation={navigation} banner={item.banner} location={item.location}
    vibe={item.vibe} />
  );

  return (
    <SafeAreaView style={styles.container}>
     <HomeHeaderWhite header={"UPCOMING"} navigation={navigation}/>
     
      <FlatList
       style={{marginTop:3}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header:{
    color:"#000",
  },


  item: {
    flexDirection:'column',
    backgroundColor:'#ffff',
   
    borderRadius:10,
    width:'95%',
    height:260,
    marginVertical: 8,
    marginTop:0,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
     },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
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
  heartIcon: {
  
  position:'absolute',
  alignItems:'center',
  height:40,
  width:40,
  marginTop:3,
  marginLeft:'80%',
  padding:8,
  borderRadius:50,
  },
  cardDetails:{
   
   alignItems:'center',
   justifyContent:'center',
   zIndex:1,
   marginTop:-50,
   flex:1,
  },
  tinyLogo: {
    width:'100%',
    height:'85%',
    borderWidth:1,
    borderRadius:10,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    
  },

  title: {
    fontSize: 15,
    color:'#000',
    fontWeight: '800',
    textAlign:'center',
    borderTopWidth: 1,
    borderRadius:10,
    

  },
  bannerDetails: {
    flexDirection:'column',
    alignItems:'center',
    height:100,
    justifyContent:'center',
    
    width:'100%',
  },
  location:{
    fontSize: 18,
    color:'#535353',
    fontWeight: '600',
    textAlign:'center',
    fontFamily: 'RalewayRegular',

  },
  road:{
    fontSize: 14,
    color:'rgba(58, 58, 58, 0.945)',
    fontWeight: '300',
    textAlign: 'center',
    marginTop:10,
    
  },
  vibe: {
    fontSize: 13,
    fontFamily: 'RalewayRegular',
    position:'absolute',
    color:'white',
    minWidth:90,
    borderRadius:10,
    marginTop:10,
    marginLeft:5,
    backgroundColor:"rgba(24,24,24,0.4)",
    padding:10,
    paddingVertical:10
  }
  
});

export default Details;