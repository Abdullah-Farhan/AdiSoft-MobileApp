import { React, useState } from 'react';
import Writing from '../assests/Writing.png';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';


const Signup = ({navigation}) => {

    const [name, setName] = useState("name");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [cnfmPass, setCnfmPass] = useState(null)

    const signup = async () => {
        const pattern = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/)
        const passPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        
        console.log(pattern.test(email));
        if (!pattern.test(email)){
            Alert.alert("Please enter a Proper Email!")
        }
        if (!passPattern.test(password)){
            Alert.alert("Please enter a Strong Password")
        }

        if (password !== cnfmPass){
            Alert.alert("Password do not match!")
        }

        const userData = {
            name: name,
            email: email,
            password: password,
            type:"user",
            otp: "",
            verified:false
        }

        console.log(name, email, password, cnfmPass);

        if(pattern.test(email) && passPattern.test(password)){
            try{
                const response = await axios.post("http://172.20.10.3:8080/auth/signup", userData)

                console.log(response.data);
                navigation.navigate("Otp", {data: email})
            }
            catch(error){
                console.error("Sign Up Failed: ", error.message);
            }
        }
    }


    return (
        <View style={styles.bg}>
            <Image
            source={Writing}
            style={styles.img}
            />
            <View style={styles.form}>
                <Text style={styles.txt}>Name</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setName(val)}}
                placeholder='Name'
                />
                <Text style={styles.txt}>Email</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setEmail(val)}}
                placeholder='Email'
                />
                <Text style={styles.txt}>Password</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setPassword(val)}}
                secureTextEntry={true}
                placeholder='Password'
                />
                <Text style={styles.txt}>Confirm Password</Text>
                <TextInput
                style={styles.txtinput}
                onChangeText={(val) => {setCnfmPass(val)}}
                secureTextEntry={true}
                placeholder='Password'
                />
                <TouchableOpacity style={styles.button} onPress={signup}>
                    <Text style={styles.btntxt}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.login}>
                    <Text style={styles.txtlogin}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={styles.log}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    bg: {
        alignItems:'center'
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

    button: {
        width:"100%",
        backgroundColor:"#004F42",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginTop:"10%"
    },

    txtlogin: {
        color:"black",
        fontSize:18,
    },

    log: {
        color:"#004F42",
        fontWeight:"700",
        fontSize:18,
    },
    
    login: {
        flexDirection:"row",
        width:"90%",
        marginLeft:"5%",
        marginTop:"3%",
        paddingLeft:"3%"
    }
})