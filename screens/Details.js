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
   
    <View style={styles.item}>
    
     <TouchableOpacity  onPress={() =>
        navigation.navigate('Venue', { name: 'Jane' })
      } >
     <Image style={styles.tinyLogo}resizeMode="cover"source={{ uri: banner }}/>
       <View style={styles.heartIcon}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
         <Icon name="heart" size={24} color="white"/>
        </IconComponentProvider>
       </View>

    
       <Text style={styles.vibe}>{vibe}</Text>
      
      </TouchableOpacity>
      <View style={styles.cardDetails}>
        <View  style={styles.bannerDetails}>
          
            <Text style={styles.location}>{title}</Text>
            <Text style={styles.road}>{location}</Text>
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
    
   
  },
   
  item: {
    flexDirection:'column',
    backgroundColor: '#ffff',
    padding:10,
    borderRadius:10,
    width:'95%',
    height:300,
    marginVertical: 15,
    marginTop:0,
    marginHorizontal: 8,
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
  backgroundColor:"rgba(24,24,24,0.4)",
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
    borderRadius:8,
    
  },

  title: {
    fontSize: 15,
    color:'#000',
    fontWeight: '800',
    textAlign:'center',
    

  },
  bannerDetails: {
    flexDirection:'column',
    alignItems:'center',
    height:'100%',
    justifyContent:'center',
    
    width:'100%',
  },
  location:{
    fontSize: 18,
    color:'#000',
    fontWeight: '900',
    textAlign:'center',
   

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
    position:'absolute',
    color:'white',
    minWidth:90,
    backgroundColor:'#000',
    padding:10,
    paddingVertical:10
  }
  
});

export default Details;