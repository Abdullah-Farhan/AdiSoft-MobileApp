import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from '../assests/Icon.png'
import Writing from '../assests/Writing.png';

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.bg}>
            <View style={styles.logos}>
                {<Image source={Icon}/>}
                <Image source={Writing}/>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate('Login')}}
                style={styles.button}
                >
                    <Text style={styles.txt}>Start Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    bg: {
        flex:1,
        justifyContent:'center'
    },

    logos:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:-100
    },

    button: {
        borderRadius:40,
        backgroundColor:'#004F42',
        width:135,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    
    txt: {
        color:'white',
        fontSize:20
    }
})