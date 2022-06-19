import * as React from 'react';
import { Text, View, StyleSheet,ScrollView, SafeAreaView, Image,Button,TouchableOpacity } from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import AppLoading from 'expo-app-loading';
import Header from './header';
import Footer from './components/footer';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,   
} from '@expo-google-fonts/montserrat';

    export default () => {
      let[fontsLoaded] = useFonts({
        Bangers_400Regular,
        Montserrat_200ExtraLight,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
        Montserrat_300Light
    });

  function MouseOver(event){
    event.target.style.color = 'blue'
 
  }

  function MouseOut(event){
    event.target.style.color = 'black'
 
  }

    if (!fontsLoaded){
      return <AppLoading/>
    } else {
      return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: '#000000', height:window.innerHeight + 100, width:window.innerWidth}}>
        <Header/>
        <View  style={styles.con2}>
        <Text style={{fontSize:window.innerWidth/40, fontFamily:'monospace', color:'#ffffff',marginTop:20}}>
        HELLO !
        I'm Malavika.
        </Text>
        <Image style={styles.Image} source={require('./assets/logo.png')}></Image>
        <View>

        <Text  style={{fontSize:window.innerWidth/40, fontFamily:'Montserrat_400Regular', color:'#ffffff',marginLeft:window.innerWidth/100}}>Student ⋅ Progammer </Text>
        <br/>


        <View style={styles.viewStyle}>
        <Ionicons name="logo-python" size={window.innerWidth/30} color="white" style={{marginRight:10}} />
        <Ionicons name="logo-react" size={window.innerWidth/30} color="white" style={{marginRight:10}} />
        <Ionicons name="logo-html5" size={window.innerWidth/30} color="white" style={{marginRight:10}} />
        <Ionicons name="logo-css3" size={window.innerWidth/30} color="white" style={{marginRight:10}} />
        </View>
        </View>
        </View>
        </View>

{/* hhhh */}

<View style={styles.whiteSpace}>
<Text style={{fontSize:window.innerWidth/80, fontFamily:'Montserrat_500Medium', color:'#000000'}} onMouseOver={MouseOver}
onMouseOut={MouseOut}> I'm a beginner to Programming, But I love what I do. </Text>
<Image source={require('./assets/8.png')} style={styles.Image1}></Image>
<View>
<Text style={{fontSize:window.innerWidth/80, fontFamily:'Montserrat_500Medium', color:'#000000', alignSelf:'center'}} onMouseOver={MouseOver}
onMouseOut={MouseOut}> My favourites are Front-End development, game development and data analysis using python. </Text>
<br/>
<Text style={{fontSize:window.innerWidth/70, fontFamily:'Montserrat_200ExtraLight_Italic', color:'#000000', alignSelf:'center'}} onMouseOver={MouseOver}
onMouseOut={MouseOut}> ~ Programming since 2020 ~</Text>

<Text style={{fontSize:window.innerWidth/70, fontFamily:'Montserrat_200ExtraLight_Italic', color:'#000000', alignSelf:'center'}} onMouseOver={MouseOver}
onMouseOut={MouseOut}> ~ Currently living my junior year in Highschool ~ </Text>

</View>
</View>

<View style={{backgroundColor:'#000000', height:window.innerHeight + 100, color:'#ffffff'}}>
  <br/>
<Text style={{fontSize:window.innerWidth/50, fontFamily:'Montserrat_400Regular', color:'#ffffff', alignSelf:'center'}} >Recent Projects</Text>
<Text style={{fontSize:window.innerWidth/80, fontFamily:'Montserrat_500Medium', color:'#ffffff', alignSelf:'center'}} > Here are a few projects I've worked on recently. </Text>

<View style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center'}}> 
<Image source={require('./assets/10.png')} style={styles.Image2}></Image>
<Image source={require('./assets/11.png')} style={styles.Image2}></Image>
</View>
<View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
<Image source={require('./assets/9.png')} style={styles.Image2}></Image>
<Image source={require('./assets/6.jpg')} style={styles.Image2}></Image>

</View>
</View>

      <Footer/>
     
      </ScrollView>
      </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width:window.innerWidth,
    height:window.innerHeight + 100,
  },
  paragraph: {
    margin: 24,
    fontSize:window.innerWidth/5.5,
    paddingTop:50,
    textAlign: 'center',
    fontFamily:'Bangers_400Regular',
    color:'#ffffff'
  },
  whiteSpace: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    height:window.innerHeight+100,
    width:window.innerWidth
  },
  Image : {
    width:window.innerWidth/4,
    height:window.innerWidth/4
  },

  Image1 : {
    width:window.innerWidth/4,
    height:window.innerWidth/4,
    margin:window.innerWidth/20,
    
  },
  Image2 : {
    width:window.innerWidth/3,
    height:window.innerWidth/6,
    margin:window.innerWidth/20,
    
  },
  viewStyle: {
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  },
  con2:{
alignItems:'center',
justifyContent:'center'
  }
});