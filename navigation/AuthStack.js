import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../Entry/SignUpComponent';
import LoginScreen from '../Entry/LoginComponent';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerStyle:{
                backgroundColor:'#009387'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
      );
}

export default AuthStack


