import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img4 from '../assests/img4.png'

const HomePage = ({navigation}) => {
    return(
        <View>
            <View style={styles.bg}> 
                <Text style={styles.header}>Hey, YOU!</Text>
                <Text style={styles.footer}>Pave you path towards success</Text>
            </View>
            <View style={styles.imgs}>
                <Image
                style={{marginRight:5}}
                source={img1}
                />
                <Image
                source={img2}
                />
            </View>
            <View style={styles.imgs}>
                <Image
                style={{marginRight:5}}
                source={img3}
                />
                <Image
                source={img4}
                />
            </View>
            <View style={styles.bg}>
                <TouchableOpacity style={styles.button}
                onPress={()=>{navigation.navigate('IdeaInsight')}}
                >
                    <Text style={{color:"white"}}>Let's Go!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    imgs: {
        flexDirection:"row",
        width:"90%",
        marginLeft:"5%",
        marginBottom:10,
    },

    bg: {
        alignItems:'center'
    },

    header: {
        fontSize:25,
        fontWeight:'700',
        color:"#1B2D41"
    },

    footer: {
        fontSize:16,
        marginTop:5,
        marginBottom:"2%"
    },

    button: {
        width:"40%",
        backgroundColor:"#004F42",
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:40,
    }
})