import { React, useState } from 'react';
import Writing from '../assests/Writing.png';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';


const IdeaInsight = () => {

    const [name, setName] = useState("name");
    const [domain, setDomain] = useState(null);
    const [description, setDescription] = useState(null)

    const submit = () => {
        
    }


    return (
        <View style={styles.bg}>
            <Text style={styles.header}>Idea Insight</Text>
            <View style={styles.form}>
                <Text style={styles.txt}>Name</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setName(val)}}
                placeholder='Enter Project Name'
                />
                <Text style={styles.txt}>Domain</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setDomain(val)}}
                placeholder='Enter Project Domain'
                />
                <Text style={styles.txt}>Description</Text>
                <TextInput
                style={styles.txtinput1}
                onChangeText={(val) => {setDescription(val)}}
                secureTextEntry={true}
                multiline={true}
                placeholder='Enter Decription'
                />

                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.btntxt}>Check</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IdeaInsight;

const styles = StyleSheet.create({
    bg: {
        alignItems:'center'
    },

    header: {
        fontSize:30,
        fontWeight:'700',
        color:'#1B2D41',
        marginTop:30
    },  

    form: {
        width:'80%'
    },

    btntxt: {
        color:"white",
        fontSize:25
    },

    txt: {
        color:'black',
        fontSize:15,
        marginLeft:15,
        marginTop:20,
        marginBottom:5
    },

    txtinput: {
        borderRadius:40,
        borderWidth:2,
        borderColor:"#004F42",
        elevation:10,
        paddingLeft:15,
        fontSize:15,
        backgroundColor:"white",
        height:40
    },

    txtinput1: {
        borderRadius:20,
        borderWidth:2,
        borderColor:"#004F42",
        elevation:10,
        paddingLeft:15,
        fontSize:15,
        backgroundColor:"white",
        height:150
    },

    button: {
        width:"50%",
        backgroundColor:"#004F42",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginTop:"10%",
        marginLeft:"25%"
    },
})