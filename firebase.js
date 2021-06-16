import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCbMZczLawPeUxOBvOZWOPKFHYqC35JvJ0",
    authDomain: "jobzi-df07e.firebaseapp.com",
    projectId: "jobzi-df07e",
    storageBucket: "jobzi-df07e.appspot.com",
    messagingSenderId: "477586198582",
    appId: "1:477586198582:web:0fb0bd4aae9f4c9a394897"
  };

  let app;

  if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
  }
  else{
    app=firebase.app();
  }
  const db=app.firestore();
  export const jobref=firebase.firestore().collection('jobDetails');
  const auth=firebase.auth();


  export {db,auth}