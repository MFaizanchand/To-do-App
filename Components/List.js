import {View, Text, StyleSheet, TextInput, TouchableOpacity ,FlatList, Alert} from 'react-native'
import React, { useState, useEffect} from 'react'
import Modal from "react-native-modal";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const List = () => {
    const [mydata, setmydata] = useState("");
    const [newID , setnewID] = useState('');
    const[things , setnewThings] = useState('');
    const [state , setState] = useState();
    const [modelVisible, setModelVisible] = useState(false);
  
//     const [uid, setUid] = useState('');
//   const [user, setUser] = useState();   
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);
//   function onAuthStateChanged(user) 

//     setUser(user);
//     console.log('Information :', user?.uid);
//     setUid(user?.uid);
//     Readdata(user?.uid);

//   }
const Update = async (id , newthings, updateStatus )=>{
database()
  .ref('/users/' + id)
  .update({
    things: newthings,
    id: id,
    state: updateStatus,
  })

  .then(() => console.log('Data updated.'))
}
    const AddData = async () => {
        database()
          .ref('/users/' + newID)  //  uid
          .set({
            things : things,
            id : newID,
            state: state,
          })
          .then(() => console.log('Data set.'));  
      }
    
      const Readdata = async () => {  // uder id rem
      
        database()
          .ref('/users/' )
          .on('value', snapshot => {
            setmydata(snapshot.val());
            setnewID(snapshot?.val().length);
        
          }); 
      }
      const Delete = async (id) => {
        await database().ref('/users/' + id).remove(); 
      }
       
      const createTwoButtonAlert = async   (id , newthings) =>
      Alert.alert('Starting or Done?', '', [
        {
          text: 'Completed',
          onPress : () => Update(id , newthings , 2),
          style: 'cancel',
        },
        {text: 'Started', onPress: () => Update(id , newthings , 1)},
      
      ]);

      const RenderonFlat = ({ item }) => {
        return (
            <View>
          <TouchableOpacity onPress={()=>createTwoButtonAlert(item.id , item.things)}>
            <View  style={[styles.text, item.state ===1 ? styles.textinvalid : styles.textvalid]} >
            <Text style={{ textAlign:'center',
             fontSize:20, fontFamily: 'Poppins-Bold' , color:'white' , marginTop:5   }} >{item?.things}</Text>
              
             </View>
          </TouchableOpacity>
      
          </View>
        )
      }
      useEffect(() => {
        Readdata()
      }, [])
    return (
        <View style={{ flex: 1 }} >
              <TouchableOpacity  style={{position: 'absolute', justifyContent:'center' , alignItems:'center', right:0 , bottom:0 , marginEnd:10, marginBottom:10 , backgroundColor: '#095ae6' , height:60 , width:60 , borderRadius:30}}
                    onPress={() => setModelVisible(true)} >
                    <Text style={{ fontSize: 30, color:'white' }} >+</Text></TouchableOpacity>
            <View style={styles.toplayout} >
                <View style={{ width: '100%', height: '100%', position: 'absolute' }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: "white", padding: 10 }} >M</Text>
                        <Text style={{ color: 'white', fontSize: 20, padding: 10, fontWeight: '500'}} >Demo App</Text>
                        <Text style={{ fontSize: 25, marginRight: 20, padding: 10, color: 'white'}}>F</Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 24, alignSelf: 'center', marginTop: 30 }}>Good Eve</Text>
                    <Text style={{ color: 'white', fontSize: 24, alignSelf: 'center', marginTop: 10 }}>Here is your activity</Text>
                </View>
            </View>
           
            <View  >
            <FlatList 
          data={mydata}
          renderItem={({ item }) => <RenderonFlat item={item} />}  />
            </View>
            <View>
              
            </View>
            <Modal isVisible={modelVisible} >
                <View style={{ padding: 30, backgroundColor: "plum", borderRadius: 25, }} >
                    <TouchableOpacity onPress={() => setModelVisible(false)}>
                        <Text style={{ fontSize: 23, marginLeft: 280 }}>*</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '500', }} >Enter Item</Text>
                    <TextInput placeholder='Enter'
                    value={things}
                    onChangeText={(e) => setnewThings(e)}
                        style={styles.inputBox}
                    />
                    <TouchableOpacity
                     onPress={AddData}
                      style={styles.register}>  
                        <Text style={styles.registerTitle}>Add</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            
        </View>
    )
}

export default List
const styles = StyleSheet.create({
    toplayout: {
        width: '100%',
        height: 200,
        backgroundColor: '#095ae6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    appname: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
    },
    eve: {
        color: "white",
        fontSize: 18,
        fontWeight: '500',
        //    alignSelf:'center',
        marginTop: 50,
        marginRight: 50
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 100,
        borderRadius: 15,
        width: '100%',
        marginTop: 20,
    }, register: {
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
    text: {
        width: '70%', height: 50, marginTop: 14,
             backgroundColor: 'white', alignSelf: 'center', borderWidth: 2, borderRadius: 20 
    },
    textvalid: {
        backgroundColor: 'green',
    },
    textinvalid: {
        backgroundColor: 'red',
    },
}) 