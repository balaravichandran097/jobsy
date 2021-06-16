
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import {auth} from "../firebase.js";
import AuthStack from '../navigation/AuthStack';
import HomeStack from '../navigation/HomeStack';
import {AuthContext} from '../navigation/AuthProvider';
import Loading from '../Entry/Loader';
import AlertProvider from '../navigation/AlertProvider';

const RouterComponent = () => {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
     // Handle user state changes
     function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
      }
      useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
      if (loading) {
        return <Loading />;
      }
      return (
        <AlertProvider>
        <NavigationContainer>
          {user ?<HomeStack />  : <AuthStack />}
        </NavigationContainer>
        </AlertProvider>
      );
}

export default RouterComponent

const styles = StyleSheet.create({})
