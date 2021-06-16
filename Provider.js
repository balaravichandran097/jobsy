import React from 'react';
import AuthProvider from './navigation/AuthProvider';
import Routes from './Entry/RouterComponent';


const Provider = () => {
    return (
        <AuthProvider>
         
          <Routes />
        
        </AuthProvider>
      );
}

export default Provider


