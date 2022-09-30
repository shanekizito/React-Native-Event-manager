import React from 'react';
import { SafeAreaView, View, FlatList,ImageBackground, StyleSheet, Text, StatusBar,Image } from 'react-native';
import { NFTCard, HomeHeaderWhite, DropDown, FocusedStatusBar } from "../components";


const Item = ({ title ,banner,location,vibe}) => (
  <View style={styles.item}>
   
   <ImageBackground  
    style={styles.bannerImage}
    resizeMode="cover"
    source={{ uri:'https://kenyaonthego.com/wp-content/uploads/2021/11/clubda-5.jpg' }}>  
    </ImageBackground>
    <View style={styles.card}>
    <Text style={styles.vibe}>Happy hour</Text>
     
    <Text style={styles.venue}>Club Da Place</Text>
    <Text style={styles.area}>Mamboleo Stage Off- Vihiga Road , Kisumu</Text>
     
    </View>
  </View>
);

const Venue= () => {
  

  return (
    <SafeAreaView style={styles.container}>
     <HomeHeaderWhite/>
      <Item/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item:{
    marginTop:30,
    height:'40%',


  },
  bannerImage:{
    width:'100%',
    height:'98%',
    borderRadius:100,
  },
  card:{
    flewDirection:'column',
     textAlign:'center',
    justifyContent:'center',
     alignItems:'center',
    
  },
  vibe:{
    backgroundColor:'#00000012',
    padding:10,
    borderRadius:25,
    marginTop:30,
    marginBottom:15,
  },
  venue:{
    fontSize:25,
    textAlign:'center',
    marginTop:17,
  },

  area:{
    fontSize:20,
    marginTop:10,
    textAlign:'center',
    Color:'#fff',
  },

  road:{
    fontSize:13,
    textAlign:'center',
    marginTop:20,
    alignSelf:'stretch',
  },
});

 

 

export default Venue;