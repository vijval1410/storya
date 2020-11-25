import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBfZ_ySPsAqdnqqzCYwyVAvxr6a7Y_PdK0",
    authDomain: "bedtimestory-ef786.firebaseapp.com",
    databaseURL: "https://bedtimestory-ef786.firebaseio.com",
    projectId: "bedtimestory-ef786",
    storageBucket: "bedtimestory-ef786.appspot.com",
    messagingSenderId: "782410312796",
    appId: "1:782410312796:web:8b50b3cd80757920af4a99"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()