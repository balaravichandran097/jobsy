import React, {createContext, useState} from 'react';
import {auth} from "../firebase.js";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(children);
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth.signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
      
        register: async (email, password) => {
          try {
            await auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser);
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                alert('Something went wrong with sign up: ', error.message);
            });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth.signOut().then(()=>{
              navigation.navigate('Login');
            });
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;