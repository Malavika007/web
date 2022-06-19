import  React,{Component} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'


export default class Footer extends React.Component {
    render(){
        return(
            <View style={styles.container}> 

               <Text style={styles.txt}> 
                FIND ME ONLINE
               </Text>
                <View style={styles.iconPack}>
               <Ionicons name="logo-github" size={32} color="black" style={{marginRight:10}}/>

               <Ionicons name="logo-linkedin" size={32} color="black" style={{marginRight:10}} />
               <Ionicons name="logo-instagram" size={32} color="black" style={{marginRight:10}}/>

               </View>
               <br/>
               <Text style={{fontFamily:'monospace'}}>Email : malavikagmalu@gmail.com</Text>
               <br/>
               <Text style={{fontFamily:'monospace'}} >made by me</Text>
               <Text>❤️</Text>
               <br/>
             
            </View>

        )
    }
}



const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:window.innerWidth,
        height:window.innerHeight/2,
        backgroundColor:'#ffffff',
  
    },

    txt:{
        color:"#000000",
        fontFamily:'monospace',
        fontSize:20,
        marginTop:25 
    },

    iconPack: {
        display:'flex',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-around',
        
    }
});