import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input,Image} from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {auth} from "../firebase.js";

const LoginScreen = ({navigation}) => {
    const signUp=()=>{

    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                console.log(authUser);
                navigation.replace("Home");
            }
        })
      return unsubscribe;
    },[])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
      
        <KeyboardAvoidingView behavior="padding" style={styles.container} > 
              <StatusBar style="light"/>
            <Image 
              source={require('../assets/job.jpg')}
            style={{width:200,height:200}}
            />
          <View style={styles.inputContainer}>
              <Input placeholder="Enter Your Email"
              autoFocus
               type="email"
               value={email}
               onChangeText={(text)=>setEmail(text)}
               />
                <Input placeholder="Enter Your Password"
              secureTextEntry type="password"
              value={password}
               onChangeText={(text)=>setPassword(text)}
              />
              <Button containerStyle={styles.button} 
              onPress={signUp} title='login'/>
              <Button containerStyle={styles.button} 
              type="outline" onPress={()=>navigation.navigate("Register")} title='Register'/>
              </View>
        <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
       
    }
   
})
