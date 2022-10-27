
import { SafeAreaView, View, FlatList,ImageBackground, StyleSheet, Text, StatusBar,Image,TouchableOpacity,navigation,Button} from 'react-native';
import { NFTCard, HomeHeaderWhite, DropDown, FocusedStatusBar } from "../components";
import { LinearGradient } from 'expo-linear-gradient';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { assets} from "../constants";

import Barcode from 'react-native-barcode-svg';


import React, { useCallback, useMemo, useRef } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';




import {
  BottomSheetModal,
  
} from '@gorhom/bottom-sheet';

 


 





const Venue= ({navigation}) => {

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '85%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);


  const handleClosePress = () => bottomSheetModalRef.current.close()
  
  const AppButton = ({  title }) => (
    <TouchableOpacity onPress={
      handlePresentModalPress
    } style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>
      {title} </Text>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name="chevron-right" size={25} color="#000"/>
        </IconComponentProvider>
    </TouchableOpacity>

  );

  const CloseAppButton = ({  title }) => (
    <TouchableOpacity onPress={
      handleClosePress
    } style={styles.CloseappButtonContainer}>
      <Text style={styles.CloseappButtonText}>
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
      source={{ uri:'https://cdn.uc.assets.prezly.com/63e33bf5-3a17-4b2d-bfae-18b6a1c528cc/-/preview/1200x1200/-/format/auto/' }}>  
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
          <Text  style={{color:"white",fontSize:15,textAlign:'center',color:"rgba(229, 233, 229, 0.938)",marginLeft:20,fontFamily: 'RalewayRegular'}}>Mamboleo Stage Kisumu </Text>
        </View>
  
       
        </View>
      <Text style={styles.vibe}>We welcome you to come and join us in experiencing three magnificent films that will entertain and edutain you as our lovely guest. </Text>
      <View >
        <AppButton title="Get Ticket" size="sm" backgroundColor="#fff" />
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
      
     <HomeHeaderWhite navigation={navigation} header={'ABOUT'}/>
     <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose

        >
          <View style={styles.contentContainer}>
          
    
    <View style={styles.ticket}>
       <View style={styles.venueContainer}>
            <Image style={styles.tinyBanner}resizeMode="cover"source={{ uri:"https://kenyaonthego.com/wp-content/uploads/2021/11/black-pearl-4-520x397.jpg" }}/>
            <View style={styles.venueInfoContainer}>
                <Text style={styles.place}>Club Da Place</Text>
                <Text style={styles.venueLocation}>Mamboleo stage - Kisumu</Text>
            </View>
        </View>
        <View style={styles.userInfoContainer}>
            <View style={styles.row1}>
            <Text style={styles.title}>Shane Kizito</Text>
            <Text style={styles.title}>Feb 29 2023</Text>
            </View>

            <View style={styles.row2}> 
                <Text style={styles.title}>4:30 PM</Text>
            <Text style={styles.title}></Text>
            </View>
        </View>
       <View style={styles.row3}>
        
       <Text  style={styles.info}>Security barcode</Text>
       <Barcode value="Hello World" format="CODE128" />
       <CloseAppButton title="Proceed" size="sm" backgroundColor="#fff" />
      
        
     </View> 
    </View>
     
          
          </View>
        </BottomSheetModal>
        <Item/>
   
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bottomSheetRef: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  item:{
    marginTop:-10,
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
    fontFamily: 'RalewayRegular',
    color:'#fff',
    marginBottom:15,
    
  },
  date:{
    fontFamily: 'RalewayRegular',
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
fontFamily: 'RalewayRegular',

  },
  venue:{
    fontSize:15,
    alignItems:'center',
    flexDirection:'row',
    color:'#fff',
    fontFamily: 'RalewayRegular',
  },

  area:{
    fontSize:22,
    fontFamily: 'RalewayRegular',
    marginLeft:20,
    fontWeight:'600',
    marginTop:30,
    textAlign:'center',
    color:'white',
  },

  road:{
    fontSize:10,
    textAlign:'center',
    fontFamily: 'RalewayRegular',
    marginTop:20,
    alignSelf:'stretch',
  },CloseappButtonContainer: {
    elevation: 8,
     backgroundColor: "#000",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:'center',
    marginTop:120,
    marginLeft:10,
    borderRadius: 115,
    width:320,
    height:45,
    paddingVertical:9,
    paddingHorizontal: 5,
    zIndex:3
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
    fontFamily: 'RalewayRegular',
    color: "#000",
    alignSelf: "center",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginRight:10,
    marginLeft:10

  },
  CloseappButtonText: {
    fontSize: 17,
    fontFamily: 'RalewayRegular',
    color: "#fff",
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
  place:{
    fontFamily: 'RalewayBold',
    fontSize:18,
    marginBottom:10,

},
barCode:{
height:100,
width:100,
color:"#0f0",


},
ticket:{
    shadowColor: "#000",
    flexDirection:'column',
    backgroundColor: '#ffff',
    padding:20,
    borderRadius:10,
    width:'95%',
    justifyContent:'center',
    marginVertical: 15,
    marginTop:10,
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
row3:{
marginTop:20,

alignItems:'center',
justifyContent:"center",


}
,
info:{
marginTop:0,
marginBottom:15,
color:"grey",
fontFamily: 'RalewayRegular',
},

venueContainer: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#e4e3e3',
    borderStyle:'dotted',
    paddingBottom:20
},
tinyBanner:{
    width:40,
    height:40,
    borderRadius:15,
    marginRight:20,
},

venueInfoContainer: {
    
}
,

venueName: {
},
venueLocation: {
    fontSize:12,
    fontFamily: 'RalewayRegular',
},

userInfoContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    borderBottomWidth:1,
    borderBottomColor:'#e4e3e3',
    paddingBottom:10
},
row1:{
marginRight:100,

},
title:{
fontSize:18,
fontFamily: 'RalewayBold',
marginTop:10,

},
qrcode: {
    width:110,
    height:60
}
});

 

 

export default Venue;