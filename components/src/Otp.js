import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

const Otp = ({navigation, route}) => {

    const [otp, setOtp] = useState(null);
    const email = route.params?.data || "No mail";

    const verify = async () => {

        const userData = {
            email: email,
            otp: otp
        }

        try{
            const response = await axios.post("http://172.20.10.3:8080/auth/verify-otp", userData)

            console.log(response.data);
            Alert.alert("Signed Up Successfully!")
            navigation.navigate("Login")
        }
        catch(error){
            console.error("Sign Up Failed: ", error.message);
        }
    }

    return(
        <View style={styles.bg}>
            <Text style={styles.header}>Otp Verification</Text>
            <Text style={styles.msg}>Enter Otp Code Sent to</Text>
            <Text style={styles.mail}>{email}</Text>
            <TextInput
            style={styles.inp}
            value={otp}
            onChangeText={(val) => {setOtp(val)}}
            placeholder="Otp Code"
            />
            <TouchableOpacity style={styles.btn}
            onPress={verify}
            >
                <Text style={{color:'white'}}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp;

const styles = StyleSheet.create({

    bg: {
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },

    header: {
        fontSize:40,
        fontWeight:'700',
        color:'black'
    },

    msg: {
        color:"black",
        fontSize:20,
        marginTop:"5%"
    },

    mail:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
        marginBottom:"3%"
    },

    inp: {
        borderColor:'#004F42',
        borderWidth:2,
        width:"80%",
        borderRadius:10,
    },

    btn: {
        backgroundColor:'#004F42',
        width:"40%",
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        elevation:10,
        marginTop:"5%"
    }
})