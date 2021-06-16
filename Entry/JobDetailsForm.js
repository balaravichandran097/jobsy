import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,ScrollView,StyleSheet,Platform} from 'react-native'
import styles from './styles';
import { useTheme } from 'react-native-paper';
import { Button } from 'react-native-paper';
import dialog from './DialogModal';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Ionicons } from '@expo/vector-icons';
import {alertErrorContext} from '../navigation/AlertProvider';
import {db} from '../firebase';
import { Alert } from 'react-native';
import Loader from "./Loader.js";
export default function JobDetailsForm({navigation}) {
    const {value}=useContext(alertErrorContext);
    console.log(value);
    const [jobTitle, setjobTitle] = useState('')
    const [jobDescription, setJobdescription] = useState('')
    const [jobCategory, setjobcategory] = useState('')
    const [joblocation, setjoblocation] = useState('')
    const [jobexperience, setjobexperience] = useState('')
    const [jobid, setjobid] = useState('')
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
      ] = useState(false);
    const toggleAlert = React.useCallback(() => {
      setVisible(!visible);
      navigation.navigate('JobDetailsForm');
    }, [visible]);

const { colors } = useTheme();
const onsubmitform=async()=>{
  
    setLoading(true);
    console.log(value);
    
    if (!jobid) {
        alert('Please Enter the Job Id !');
        return;
    }
    if (!jobTitle) {
        alert('Please Enter the Job Id !');
      return;
    } if (!jobDescription) {
        alert('Please Enter the Job Id !');
      return;
    }
    await db.collection('jobDetails').add({
        jobid:jobid,
        jobTitle:jobTitle,
        jobDescription:jobDescription,
        joblocation:joblocation
    }).then(()=>{
        setIsRegistraionSuccess(true);
        setVisible(true);
        setLoading(false);
        console.log('Job Added Successfully!!');
    }
   ).catch((error)=>console.log(error));

}

if (isRegistraionSuccess) {
    return (
        
      <FancyAlert
      visible={visible}
      style={styles1.alert}
      icon={
        <View style={[ styles1.icon, { borderRadius: 32 } ]}>
          <Ionicons
            name={Platform.select({ ios: 'ios-close', android: 'md-checkmark-circle' })}
            size={36}
            color="#007b00"
          />
        </View>
        
      }
     >
     <View style={styles1.content}>
    <Text style={styles1.contentText}>Job Added Successfully!!</Text>

    <TouchableOpacity style={styles1.btn} onPress={toggleAlert}>
      <Text style={styles1.btnText}>OK</Text>
    </TouchableOpacity>
  </View>
    </FancyAlert>

 
    );
  }
   
    return (
        <View style={styles.container}>
            <ScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
               
                <TextInput
                    style={styles.input}
                    placeholder='JobId'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setjobid(text)}
                    value={jobid}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Please enter the Job Title'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setjobTitle(text)}
                    value={jobTitle}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                   
                    placeholder='Please enter the Job Description'
                    onChangeText={(text) => setJobdescription(text)}
                    value={jobDescription}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                  
                    placeholder='Please Enter the Job Location'
                    onChangeText={(text) => setjoblocation(text)}
                    value={joblocation}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onsubmitform()}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>
               
            </ScrollView>
    
        </View>
        
    )
}
const styles1 = StyleSheet.create({
    alert: {
      backgroundColor: '#EEEEEE',
    },
    icon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -16,
      marginBottom: 16,
    },
    contentText: {
      textAlign: 'center',
    },
    btn: {
      borderRadius: 32,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
      alignSelf: 'stretch',
      backgroundColor: '#4CB748',
      marginTop: 16,
      minWidth: '50%',
      paddingHorizontal: 16,
    },
    btnText: {
      color: '#FFFFFF',
    },
  });
   