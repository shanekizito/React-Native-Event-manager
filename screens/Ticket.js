import React from 'react'
import { SafeAreaView, View, FlatList,ImageBackground, StyleSheet, Text, StatusBar,Image,TouchableOpacity,navigation} from 'react-native';
import { assets} from "../constants";
import { HomeHeaderWhite} from "../components";



const Ticket = ({navigation}) => {
  return (
    
    <View style={styles.container}>
    <HomeHeaderWhite header={"YOUR TICKET"} navigation={navigation}/>
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
        <Image style={styles.qrcode}resizeMode="cover"source={assets.qrcode}/>
        <Text  style={styles.info}>Tell your visiting code to employee or use barcode</Text>
     </View> 
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
     
     
    },
    place:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:10,

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
    row3:{
marginTop:20,

alignItems:'center',
justifyContent:"center",


    }
    ,
    info:{
marginTop:15,
color:"grey"
    },

    venueContainer: {
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e4e3e3',
        borderStyle:'dotted',
        paddingBottom:40
    },
    tinyBanner:{
        width:90,
        height:90,
        borderRadius:15,
        marginRight:20,
    },
    
    venueInfoContainer: {
        
    }
    ,
    
    venueName: {
    },
    venueLocation: {
        fontSize:12
    },
    
    userInfoContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:'#e4e3e3',
        paddingBottom:40
    },
    row1:{
   marginRight:100,

    },
    title:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:15,

    },
    qrcode: {
        width:110,
        height:100
    }
})

export default Ticket



