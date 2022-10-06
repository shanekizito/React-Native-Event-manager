import React from 'react';
import { SafeAreaView, View, FlatList,ImageBackground,TouchableOpacity, StyleSheet, Text, StatusBar,Image } from 'react-native';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NFTCard, HomeHeaderWhite, DropDown, FocusedStatusBar } from "../components";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Black Pearl Launge and Grill',
    vibe:'Happy Hour',
    location:"Mamboleo Stage , Off - Vihiga Road , Kisumu",
    banner: 'https://kenyaonthego.com/wp-content/uploads/2021/11/clubda-1-520x397.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Club Da Place',
    vibe:'Weekly Specials',
    location:"Nairobi Rd , Kisumu",
    banner: 'https://kenyaonthego.com/wp-content/uploads/2021/11/black-pearl-4-520x397.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Alleways Beer Garden',
    vibe:'Weekly Specials',
    location:"Kisumu CBD Behind KPLC",
    banner: 'https://kenyaonthego.com/wp-content/uploads/2021/11/black-pearl-4-520x397.jpg',
  },
];




 
  


const Details= ({navigation}) => {
  const BackButton = () => (
    <TouchableOpacity style={styles.BackButtonContainer} onPress={() => 
  
      navigation.goBack()
    } >
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="arrow-left" size={24} color="white"/>
      </IconComponentProvider>
    </TouchableOpacity>
  )
  const Item = ({ title ,banner,location,vibe}) => (
    <View>
    
      <BackButton/>
    
    <View style={styles.item}>
    
     <TouchableOpacity  onPress={() =>
        navigation.navigate('Venue', { name: 'Jane' })
      } >
     <ImageBackground  
      style={styles.tinyLogo}
      resizeMode="cover"
      source={{ uri: banner }}>
      <View style={styles.heartIcon}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <Icon name="heart" size={24} color="white"/>
      </IconComponentProvider>
      </View>
  <View style={styles.cardDetails}>
      
      <View  style={styles.bannerDetails}>
      <Text style={styles.vibe}>{vibe}</Text>
      <Text style={styles.location}>{title}</Text>
      <Text style={styles.road}>{location}
      </Text>
      </View>
      </View>
      </ImageBackground>
      <Text style={styles.title}>No reviews yet</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item title={item.title}  navigation={navigation} banner={item.banner} location={item.location}
    vibe={item.vibe} />
  );

  return (
    <SafeAreaView style={styles.container}>
     <HomeHeaderWhite/>
      <FlatList
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
    marginTop: StatusBar.currentHeight || 0,
  },
   

  item: {
    flexDirection:'column',
    backgroundColor: 'white',
    
    padding: 10,
    width:'100%',
    height:380,
    marginVertical: 8,
    marginTop:35,
    marginHorizontal: 1,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
  backgroundColor:"rgba(24,24,24,0.4)",
  position:'absolute',
  alignItems:'center',
  height:44,
  width:30,
  marginTop:15,
  marginLeft:'70%',
  padding:10,
  borderRadius:100,
  },
  cardDetails:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   flex:1,
  },
  tinyLogo: {
    width:'100%',
    height:'100%',
    backgroundColor:"rgba(24,24,24,0.4)",
    opacity: .8,
  
    borderRadius:200,
    

  },
  title: {
    fontSize: 15,
    color:'#726e6e',
    fontWeight: '300',
    textAlign:'center',

  },
  bannerDetails: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'38%',
    width:250,
  },
  location:{
    fontSize: 18,
    color:'#ffffff',
    fontWeight: 'bold',
    textAlign:'center',
   

  },
  road:{
    fontSize: 15,
    marginTop:10,
    color:'#e8e9eb',
    fontWeight: '300',
    textAlign: 'center',
  },
  vibe: {
    fontSize: 13,
    marginBottom:5,
    color:'white',
    minWidth:90,
    backgroundColor:'#000',
    borderRadius:15,
    padding:10,
    paddingVertical:5
  }
  
});

export default Details;