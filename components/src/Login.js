import React, { useState } from "react";
import Writing from '../assests/Writing.png';
import google from '../assests/google.png';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import eye from '../assests/eye.png'
import hide from '../assests/hide.png'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [isPasswordVisible, setPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };


    const emailValidation = (email) => {
        const pattern = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/)
        return pattern.test(email)
    }

    const googleLogin = async () => {

        try{              
            await axios.get("http://172.20.10.3:8080/auth/google")
        }
        catch(error){
            console.log(error);
            console.error("Login Failed: ", error.message);
        }
    }

    const login = async () => {
        const validEmail = emailValidation(email)

        if(!validEmail){
            return Alert.alert("Enter Correct Email");
        }

        userData ={ 
            email: email,
            password: password
        }


        var token = "";
        var msg = "";

        try{              
            const response = await axios.post("http://172.20.10.3:8080/auth/login", userData)
            token = response.data;
            if (response.data.token){
                token = token.token;
            }
            else{
                msg = response.data.msg
            }
        }
        catch(error){
            console.log(error);
            console.error("Login Failed: ", error.message);
        }

        if (token !== ""){
            try {
                await AsyncStorage.setItem('jwtToken', token);
                console.log('Token saved successfully.');
              } 
            catch (error) {
                console.error('Error saving token:', error);
              }
        }
          
        const getTokenFromAsyncStorage = async () => {
            try {
                const token = await AsyncStorage.getItem('jwtToken');
                return token;
            } 
            catch (error) {
                console.error('Error retrieving token:', error);
            }
          };
          
        const jwtToken = await getTokenFromAsyncStorage();
          
        //Verifying if token received is saved successfully then navigating to next screen
        if(jwtToken === token){
            navigation.navigate('Home')
        }
        else{
            Alert.alert("Login failed!")
        }
          
    }

    return(
        <View style={styles.bg}>
            <Image
            source={Writing}
            />
            <View style={styles.form}>
            <Text style={styles.txt}>Email</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setEmail(val)}}
                placeholder='Enter Email'
                />
                <Text style={styles.txt}>Password</Text>
                <View style={{flexDirection:'row', width:"100%"}}>
                    <TextInput
                    style={styles.txtinput}
                    onChangeText={(val) => {setPassword(val)}}
                    secureTextEntry={isPasswordVisible}
                    placeholder='Password'
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}
                    style={{marginLeft:'-10%'}}>
                        <Image source={isPasswordVisible ? eye : hide} style={{width:30, height:30, marginLeft:-10, marginTop:5}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.btntxt}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gmail} onPress={googleLogin}>
                <Image
                    style={styles.goog}
                    source={google}
                    />
                    <Text style={styles.gtxt}>Sign in with Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.fpass} onPress={()=>{navigation.navigate('ForgotPassword')}}>
                    <Text style={styles.gtxt}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', marginTop:"10%"}}>
                    <Text style={styles.signup}>Don't have an Account?</Text>
                    <Text onPress={()=>{navigation.navigate('Signup')}}> Sign Up</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({

    bg: {
        alignItems:'center'
    },

    signup:{
        color:'black'
    },  

    goog: {
        width:20,
        height:20,
        marginRight:10
    },

    gtxt: {
        color:"black",
        fontWeight:'700'
    },

    form: {
        width:'80%'
    },

    fpass: {
        marginLeft:"55%",
        marginTop:15,
        flexDirection:'row'
    },  

    gmail: {
        width:"100%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginTop:"10%",
        borderWidth:2,
        borderColor:"#004F42",
        elevation:10,
        backgroundColor:"white",
        flexDirection:'row'
    },

    txt: {
        color:'black',
        fontSize:15,
        marginLeft:15,
        marginTop:20,
        marginBottom:5
    },

    btntxt: {
        color:"white",
        fontSize:25
    },

    txtinput: {
        borderRadius:40,
        borderWidth:2,
        borderColor:"#004F42",
        elevation:10,
        paddingLeft:15,
        fontSize:15,
        backgroundColor:"white",
        height:40,
        width:'100%'
    },

    button: {
        width:"100%",
        backgroundColor:"#004F42",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginTop:"10%",
        elevation:10
    },
})