import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Entry/HomeScreen';
import JobDetailsForm from '../Entry/JobDetailsForm';
import JobListing from '../Entry/JobListing';
import jobDetails from '../Entry/Jobdetails';
import jobDescription from '../Entry/jobDescription';
const Stack = createStackNavigator();

const HomeStack = () => {
   return (
 
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#00B0FF'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='JobDetailsForm' component={JobDetailsForm} />
          <Stack.Screen name='JobListing' component={JobListing} />
          <Stack.Screen name='jobDetails' component={jobDetails} />
          <Stack.Screen name='jobDescription' component={jobDescription} />
        </Stack.Navigator>
      
      );
}

export default HomeStack




