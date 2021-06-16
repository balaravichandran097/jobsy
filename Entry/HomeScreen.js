import React, {useContext,useState} from 'react'
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import FormButton from '../Components/ButtonComponent';
import {AuthContext} from '../navigation/AuthProvider';
import Button from '../Components/CustomButtonComponent';
import Modal from 'react-native-modal';
import JobDetailsForm from './JobDetailsForm';




const HomeScreen = ({navigation}) => {
const {logout,user} = useContext(AuthContext);
const [isModalVisible, setIsModalVisible] = useState(false);
const toggleModal = () => {
  setIsModalVisible(!isModalVisible);
};
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to JOBZI </Text>
        
      <Button
        text='Search For Job'
        type='outlined'
        bordered
        size='small'
        onPress={()=> navigation.navigate('jobDetails')}
      />
      <Button title=""
       text='PROVIDE JOB'
       type='outlined'
       bordered
       size='small'
      onPress={()=> navigation.navigate('JobDetailsForm')} />
     
      <Button title=""
       text='Signout'
       type='outlined'
       bordered
       size='small'
      onPress={()=>logout()} />
        </View>
      
      );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    marginBottom: 40,
   
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
