import { Alert, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";


const ResetPassword = ({navigation, route}) => {

    const email = route.params?.data
    const [password, setPassword] = useState(null);
    const [cnfmPass, setCnfmPass] = useState(null);
    const [otp, setOtp] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false)

    const validatePassowrd = (password) => {
        const pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        return pattern.test(password);
    }

    const submit = async () => {
        valPass = validatePassowrd(password)
        if(!valPass){
            return Alert.alert("Please Choose a Strong Password!")
        }
        else{
            if(password === cnfmPass){
                const userData ={
                    email:email,
                    password:password,
                    otp:otp
                }
    
                try{
                    const response = await axios.post("http://172.20.10.3:8080/auth/confirm", userData)
    
                    console.log(response.data);
                    Alert.alert("Password changed SuccessFully!")
                    navigation.navigate("Login")
                }
                catch(error){
                    console.error("Sign Up Failed: ", error.message);
                }
            }
            else{
                return Alert.alert("Password do not match!")
            }
        }
    }

    return(
        <View style={styles.bg}>
            <Text style={styles.header}>Password Reset</Text>
            <View style={styles.form}>
                <Text style={styles.txt}>New Password</Text>
                <TextInput
                style={styles.inp}
                placeholder="Enter New Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(val)=>{setPassword(val)}}
                />
                <Text style={styles.txt}>Confirm Password</Text>
                <TextInput
                style={styles.inp}
                placeholder="Confirm Password"
                value={cnfmPass}
                secureTextEntry={true}
                onChangeText={(val)=>{setCnfmPass(val)}}
                />
                <Text style={styles.txt}>Enter Otp sent at</Text>
                <Text style={{fontWeight:'700',fontSize:20, color:'black'}}>{email}</Text>
                <TextInput
                style={styles.inp}
                placeholder="Enter Otp"
                value={otp}
                onChangeText={(val)=>{setOtp(val)}}
                />
                <TouchableOpacity onPress={submit}
                style={styles.btn}
                >
                    <Text style={{color:'white'}}>
                        Change Password
                    </Text>
                </TouchableOpacity>
            </View>        
        </View>
    )
}

export default ResetPassword;

const styles = StyleSheet.create({
    bg: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    inp: {
        borderWidth:2,
        borderRadius:10,
    
    },

    form: {
        width:'80%',
        marginTop:"-15%",
    },

    txt: {
        color:'black',
        fontWeight:'500',
        fontSize:16,
        marginTop:'5%',
        marginBottom:'3%'
    },
    btn: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#004F42',
        height:40,
        width:'50%',
        marginLeft:'25%',
        marginTop:"5%"
    },
    header: {
        color:'black', 
        marginBottom:'25%', 
        marginTop:'-20%',
        fontSize:25,
        fontWeight:'700',
    }
})