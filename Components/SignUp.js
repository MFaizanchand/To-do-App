import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const SignUp = ({ navigation }) => {
const[email , setEmail] = useState();
const[password , setPassword] = useState();
const[name , setName] = useState();



    const NewUser=()=>{
        auth().createUserWithEmailAndPassword(email,name, password)
      .then(() => {
        console.log('User account created');
        Alert.alert('User Created');
      }).catch(error => {
        // if (error.code === 'auth/invalid-email') {
        //   Alert.alert('That email address is invalid!');
        // }
        console.log(`${error}`);
      });
  };
    
    return (
        <View style={styles.container}>
            <Text style={styles.signup}>Sign Up</Text>
            <TextInput
                placeholder="Name"
                style={styles.inputBox}
                value={name}
                onChangeText={(value)=>setName(value)}
            />
            <TextInput
                placeholder="Email"
                style={styles.inputBox}
                value={email}
                onChangeText={(value)=>setEmail(value)}
            />
            <TextInput
                placeholder="Password"
                style={styles.inputBox}
                value={password}
                onChangeText={(value)=>setPassword(value)}
            />
           
            <TouchableOpacity style={styles.register}
            onPress={NewUser}>
                <Text style={styles.registerTitle}
                >Sign Up</Text>
            </TouchableOpacity>
           
            <View style={styles.account} >
                <Text style={styles.accounttext} >Already have an account?  </Text>
                <TouchableOpacity style={styles.signuptext}
                onPress={()=>navigation.navigate('Login')} >
                <Text style={{marginLeft:80 , fontSize:15 , color:'blue' , fontWeight:'bold'}} >LogIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    inputBox: {
        borderWidth: 2,
        borderColor: 'blue',
        paddingHorizontal: 15,
        borderRadius: 18,
        width: '100%',
        marginTop: 40,
        fontSize:20,
        padding:15,
        
    },
    register: {
        width: '100%',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 18,
        alignItems: 'center',
        marginTop: 30,
    },
    registerTitle: {
        fontSize: 16,
       color:'blue',
        fontWeight: '600',
        fontFamily:'Poppins-Bold'
    },
    signup: {
        fontSize: 35,
        color: '#000000',
        fontWeight: '600',
        fontFamily:'Poppins-Bold',
        marginBottom:60,
    },
    check:{
        textAlign:'left',
        marginLeft:-210,
        marginTop:15,
                fontSize:18,
        fontWeight: 'bold',
    color:'black',
    },
    forget:{
         marginLeft:190,
         marginTop:15,
    },
    forgettext:{
        fontSize:17,
        fontWeight:'bold',
        color:'blue'
    },
    account:{
        
       marginTop:120
    },
    accounttext:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        fontFamily:'Poppins-SemiBoldItalic'
    },
    signuptext:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'blue',
        marginTop:10,
        fontFamily:"Poppins-Semi-Bold"
    }
})