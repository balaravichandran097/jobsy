import React from 'react';
import { Platform, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 




    

const FancyCustomAlert = (props) => {
    const { isOpen, close, buttonText, message,icon } = props;
   
   
    return <FancyAlert
    visible={isOpen}
    style={styles.alert}
    icon={
      <View style={[ styles.icon, { borderRadius: 32 } ]}>
        <MaterialIcons name="dangerous" size={34} color="#FFFFFF" />
       
      </View>
      
    }
   >
   <View style={styles.content}>
  <Text style={styles.contentText}>{message}</Text>

  <TouchableOpacity style={styles.btn} onPress={close}>
    <Text style={styles.btnText}>{buttonText}</Text>
  </TouchableOpacity>
</View>
  </FancyAlert>

  }


export default FancyCustomAlert

const styles = StyleSheet.create({
    alert: {
      backgroundColor: '#EEEEEE',
    },
    icon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C3272B',
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
   
