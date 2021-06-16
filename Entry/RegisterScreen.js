import React,{ useState,useLayoutEffect,createRef} from 'react'
import { StyleSheet, View,Alert,TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import {Button,Input,Image,Text} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import {auth} from "../firebase.js";
import Loader from "./Loader.js";

const RegisterScreen = ({navigation}) => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
      ] = useState(false);
  const emailInputRef = createRef();
  const imageInputRef = createRef();
  const passwordInputRef = createRef();
  const emptyState = () => {
    setName('');
    setEmail('');
    setPassword('');
   
  };
   showAlert2=()=> {  
        Alert.alert(  
            'Alert Title',  
            'My Alert Msg',  
            [  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ],  
            {cancelable: false}  
        )  
    }  
  
    const register=()=>{
        console.log("Inside Register");
        setErrortext('');
        if (!name) {
           showAlert2();
          return;
        }
        if (!email) {
            Alert.alert('Please fill Email');
          return;
        } if (!password) {
            Alert.alert('Please fill Password');
          return;
        }
        //Show Loader
      setLoading(true);
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
           setIsRegistraionSuccess(true);
           setLoading(false);
           console.log(authUser);
            
        })
        .catch((error)=>{
            setErrortext(error.message);
            setLoading(false);
            alert(error.message);
        }
       );
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle:"Back to Home"
        })

    },[navigation])
    if (isRegistraionSuccess) {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#307ecc',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/success.png')}
              style={{
                height: 150,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
            <Text style={styles.successTextStyle}>
              Registration Successful
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonTextStyle}>Login Now</Text>
            </TouchableOpacity>
          </View>
        );
      }
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
              <StatusBar style="light"/>
             <Loader loading={loading} />
            <Text h3 style={{marginBottom:50}}>Create a JOBZI Account</Text>
            <View style={styles.inputContainer}>
                       <Input 
                       placeholder="FullName" autoFocus 
                       placeholderTextColor="#8b9cb5"
                       autoCapitalize="sentences"
                       returnKeyType="next"
                       onSubmitEditing={() =>
                    emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
                       value={name} onChangeText={(text)=>setName(text)}
                       />
                        <Input 
                        value={email} 
                       underlineColorAndroid="#f000"
                       placeholder="Enter Email"
                       placeholderTextColor="#8b9cb5"
                       keyboardType="email-address"
                       ref={emailInputRef}
                       returnKeyType="next"
                       onSubmitEditing={() =>
                         passwordInputRef.current &&
                         passwordInputRef.current.focus()
                       }
                       blurOnSubmit={false}
                       
                       onChangeText={(text)=>setEmail(text)}
                       />
                        <Input 
                       secureTextEntry value={password}
                       underlineColorAndroid="#f000"
                       placeholder="Enter Password"
                       placeholderTextColor="#8b9cb5"
                       ref={passwordInputRef}
                       returnKeyType="next"
                        onSubmitEditing={() =>
                        imageInputRef.current &&
                        imageInputRef.current.focus()
                       }
                       blurOnSubmit={false}
                       onChangeText={(text)=>setPassword(text)}
                       />
                       
            </View>
            <Button containerStyle={styles.button}
            title="Register"
            raised
            onPress={register}
            />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"white",
},
button:{
    width:200,
    marginTop:10,
},
inputContainer:{
    width:300,
},
 SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
})
