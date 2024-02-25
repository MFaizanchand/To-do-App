import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = () => {
        if (email && password) {
            auth().signInWithEmailAndPassword(email, password)
                .then(response => {
                    console.log('response :', response);
                    Alert.alert('User LogIn')
                })
                .catch(error => {
                    console.log(`${error}`);
                })
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.signup}>Log In </Text>
            <TextInput
                placeholder="Email"
                style={styles.inputBox}
                value={email}
                onChangeText={value => setEmail(value)}
            />
            <TextInput
                placeholder="Password"
                style={styles.inputBox}
                value={password}
                onChangeText={value => setPassword(value)}
            />
            <Text style={styles.check} >remember me</Text>
            <TouchableOpacity style={styles.register}
                onPress={onLogin}>
                <Text style={styles.registerTitle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forget}  >
                <Text style={styles.forgettext}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={styles.account} >
                <Text style={styles.accounttext} >Don't have an account?  </Text>
            </View>
            <TouchableOpacity style={styles.signuptext}
                onPress={() => navigation.navigate('SignUp')}  >
                <Text style={{ fontSize: 15, color: 'blue', fontWeight: 'bold' }} >SignUp</Text></TouchableOpacity>

        </View>
    )
}

export default LoginScreen

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
        fontSize: 20,
        padding: 15,

    },
    register: {
        width: '100%',
        backgroundColor: '#2580c7',
        padding: 15,
        borderRadius: 18,
        alignItems: 'center',
        marginTop: 30,
    },
    registerTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'Poppins-Bold'
    },
    signup: {
        fontSize: 35,
        color: '#000000',
        fontWeight: '600',

        marginBottom: 60,
    },
    check: {
        textAlign: 'left',
        marginLeft: -210,
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    forget: {
        marginLeft: 190,
        marginTop: 15,
    },
    forgettext: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'blue'
    },
    account: {

        marginTop: 120
    },
    accounttext: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    signuptext: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'Poppins-Bold',
        color: 'white',
        marginTop: 10,
    }
})