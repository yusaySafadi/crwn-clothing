import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =  {
    apiKey: "AIzaSyAsH05u3wlCBWjUeN8pUvkv9fBDOyZgVT8",
    authDomain: "crwn-db-f5adc.firebaseapp.com",
    databaseURL: "https://crwn-db-f5adc.firebaseio.com",
    projectId: "crwn-db-f5adc",
    storageBucket: "crwn-db-f5adc.appspot.com",
    messagingSenderId: "680512259250",
    appId: "1:680512259250:web:a5991ae0fe9aee57d6f5ab",
    measurementId: "G-BF55HEZ3F2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;