import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import axios from "axios";

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState(null);

    const submit = async () => {

        const userData ={
            email:email
        }

        try{
            await axios.post("http://172.20.10.3:8080/auth/request", userData)

            navigation.navigate("ResetPassword", {data: email})
        }
        catch(error){
            console.error("Failed to Verify Email: ", error.message);
        }
    }

    return(
        <View style={styles.bg}>
            <Text style={styles.header}>Forgot Password</Text>
            <View style={styles.form}>
                <Text style={styles.mail}>Email</Text>
                <TextInput
                style={styles.inp}
                placeholder="Enter Email"
                value={email}
                onChangeText={(val) => {setEmail(val)}}/>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={submit}>
                        <Text style={{color:'white', fontSize:16}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    bg: {
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },

    header: {
        fontWeight:'700',
        color:'#1B2D41',
        fontSize:30,
        marginTop:'-10%',
        marginBottom:'5%'
    },

    form: {
        width:"80%",

    },
    
    mail: {
        color:'black',
        fontSize:16,
        fontWeight:'600',
        marginBottom:'3%'
    },

    inp: {
        borderRadius:10,
        borderWidth:2,
        fontSize:18,
        marginBottom:'7%'
    },  

    btn: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#004F42',
        elevation:10,
        height:40,
        borderRadius:10,
        width:"40%"
    }

})