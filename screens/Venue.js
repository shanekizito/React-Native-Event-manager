import React from 'react';
import { SafeAreaView, View, FlatList,ImageBackground, StyleSheet, Text, StatusBar,Image,TouchableOpacity,navigation} from 'react-native';
import { NFTCard, HomeHeaderWhite, DropDown, FocusedStatusBar } from "../components";
import { LinearGradient } from 'expo-linear-gradient';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";







const Venue= ({navigation}) => {
  
  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={() =>
      navigation.navigate('Details', { name: 'Jane' })
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title} </Text>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="chevron-right" size={25} color="#000"/>
        </IconComponentProvider>
    </TouchableOpacity>

  );

  const Item = ({ title ,banner,location,vibe}) => (
    <View style={styles.item}>
     
     <ImageBackground  
      style={styles.bannerImage}
      resizeMode="cover"
      source={{ uri:'https://kenyaonthego.com/wp-content/uploads/2021/11/clubda-5.jpg' }}>  
      </ImageBackground>
      
      <View style={styles.card}>
      <LinearGradient
          // Background Linear Gradient
          colors={['rgba(95, 93, 93, 0.623)', 'black', 'black']}
          style={styles.linearGrd}
        >
          <View style={styles.venueContent}>

         <Text style={styles.area}>Club Da Place</Text>
         <View style={styles.date}>
        
        <Text style={styles.dateTextContainer} >Feb</Text>
        <Text style={styles.dateText}>5</Text>
        </View>
      </View>
         <View style={styles.eventDetails}>
          
        <View style={styles.venue}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="flag" size={30} color="#fff"/>
        </IconComponentProvider>
          <Text  style={{color:"white",fontSize:15,textAlign:'center',color:"rgba(229, 233, 229, 0.938)",marginLeft:20}}>Mamboleo Stage Kisumu </Text>
        </View>
  
       
        </View>
      <Text style={styles.vibe}>We welcome you to come and join us in experiencing three magnificent films that will entertain and edutain you as our lovely guest. </Text>
      <View >
        <AppButton title="Location" size="sm" backgroundColor="#fff" />
      </View> 
      </LinearGradient>
     
      </View>
    </View>
  );
  
  const BackButton = ({  title }) => (
    <View style={styles.BackButtonContainer}>
    <TouchableOpacity onPress={() =>
      navigation.navigate('Home', { name: 'Jane' })
    } >
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="chevron-left" size={22} color="white"/>
      </IconComponentProvider>
    </TouchableOpacity>
    </View>
  );

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
    
  },
  item:{
    marginTop:-21,
    height:'99%',
  },
  eventDetails:{
  marginTop:30,
  marginBottom:70,
  marginLeft:20,

  },
  dateTextContainer:{
   
    fontSize:15, 
    flexDirection:"column",
    justifyContent:"center",

  },
  dateTextMonth:{

  },
  bannerImage:{
    width:'100%',
    height:'98%',
    borderRadius:100,
  },
  card:{
     flexDirection:'column',
     position:'absolute',
     
     marginTop:70,
     borderRadius:35,
     borderBottomLeftRadius:0,
     borderBottomRightRadius:0,
    
     width:'100%',
     
  
     alignItems:'center',
     height:"100%",
  },
  linearGrd:{
    flex:1,
    height:'100%',
    alignItems:'flex-start',
    
    width:'100%',
    justifyContent:'flex-start',
    width:'100%',
     borderRadius:25,
     textAlign:'center',
     borderBottomLeftRadius:0,
     borderBottomRightRadius:0,
     borderTopRightRadius:0,
  },
  vibe:{
    lineHeight:25,
    fontSize:15,
    marginLeft:20,
    
    color:'rgba(109, 109, 109, 0.945)',
    marginBottom:15,
    
  },
  date:{
    fontSize:12,
    color:'grey',
     justifyContent:'flex-start',
     marginTop:30,
     backgroundColor:"#ffff",
     width:70,
     marginLeft:127,
     marginTop:-20,
     padding:12,
     borderRadius:12,

  },
  venueContent:{
 flexDirection:'row',
  },
  dateText:{
color:'#000',
borderTopWidth:3,
borderTopColor:'grey',
borderStyle:'dashed',
fontWeight:'bold',
fontSize:25,


  },
  venue:{
    fontSize:15,
    alignItems:'center',
    flexDirection:'row',
    color:'#fff',
  },

  area:{
    fontSize:22,
    marginLeft:20,
    fontWeight:'bold',
    marginTop:30,
    textAlign:'center',
    color:'white',
  },

  road:{
    fontSize:10,
    textAlign:'center',
    marginTop:20,
    alignSelf:'stretch',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fff",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:'center',
    marginTop:120,
    marginLeft:20,
    borderRadius: 115,
    width:320,
    height:45,
    paddingVertical:9,
    paddingHorizontal: 5,
    zIndex:3
  },
  appButtonText: {
    fontSize: 17,
    color: "#000",
    alignSelf: "center",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginRight:10,
    marginLeft:10

  },
  BackButtonContainer:{
    backgroundColor:"black",
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:-20,
    marginBottom:40,
    marginLeft:10,
    padding:5,
    width:40,
    height:40
  },
});

 

 

export default Venue;