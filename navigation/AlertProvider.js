import React, {createContext, useState} from 'react';
import AlertComponent from '../Entry/FancyCustomAlert';
const initialState = {  isOpen: false,  message: '',  buttonText: '',icon:''};
export const alertErrorContext = createContext(initialState);


const AlertProvider = ({children}) => {
  const [alertState, setAlertState] = useState(initialState);  
   const alert = (message, buttonText = 'OK',icon) => { 
           setAlertState({isOpen: true, message,buttonText,icon});
          };  
           
   const  close = () => {    setAlertState(initialState);  };
    return (
        <>     
         <alertErrorContext.Provider 
         value={'Hello'}>{children}</alertErrorContext.Provider>      
         <AlertComponent {...alertState} close={close} />    
         </>
    )
}

export default AlertProvider
