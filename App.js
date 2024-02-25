import LoginScreen from './Components/LoginScreen'
import SignUp from './Components/SignUp'
import List from './Components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState , useEffect } from 'react';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const App = () => {
    const [user, setUser] = useState();
    // function onAuthStateChanged(user) {
    //   setUser(user);
    //   console.log(user);
    //  }
    //  useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);
    
    return (
        <List/>
        //   <NavigationContainer>
        //   <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
        //     {user ?
           
        //    // <Stack.Screen name="Login" component={LoginScreen} />
        //    <Stack.Screen name="List" component={List} />:
        //    <Stack.Screen name="Login" component={LoginScreen} />
        //     // <Stack.Screen name="SignUp" component={SignUp} 
            
        //    }
        //   </Stack.Navigator>
        // </NavigationContainer>
    )
}
export default App

