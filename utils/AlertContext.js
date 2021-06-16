import React, {createContext, useState} from 'react';
import AlertComponent from '../Entry/FancyCustomAlert';
const initialState = {  isOpen: false,  message: '',  buttonText: '',icon:''};
export const alertErrorContext = React.createContext(initialState);

const AlertContext = ({children}) => {
    console.log(children);
    console.log('check');
   const [alertState, setAlertState] = React.useState(initialState);  
   const alert = (message, buttonText = 'OK',icon) => { 
           setAlertState({isOpen: true, message,buttonText,icon});
          };  
           
   const  close = () => {    setAlertState(initialState);  };
    return (
        <>     
         <alertErrorContext.Provider 
         value={alert,alertState}>{children}</alertErrorContext.Provider>      
         <AlertComponent {...alertState} close={close} />    
         </>
    )
}

export default AlertContext;
