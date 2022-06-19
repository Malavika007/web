import  React,{Component} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';



export default class Header extends React.Component {

    render(){
        return(
        <View> 
        <Card style = {styles.container} >
        <Text style={styles.txt}>
        Malavika G
        </Text>

        </Card>
        </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        width:window.innerWidth-30,
        margin:10,
        backgroundColor:'#ffffff',
        color:'#000000',
        alignSelf:'center',   
    },

    txt:{
        color:"#000000",
        fontFamily:'Bangers_400Regular',
        fontSize:25,
        margin:25,
     
    },

});