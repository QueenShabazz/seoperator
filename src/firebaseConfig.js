import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import withFirebaseAuth from 'react-with-firebase-auth';

let base;
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const firebaseConfig = {
  apiKey: "AIzaSyBucgtabvE1xYbbvrtRy-Vja9X5DzaS3-Y",
  authDomain: "seosift.firebaseapp.com",
  databaseURL: "https://seosift.firebaseio.com",
  projectId: "seosift",
  storageBucket: "seosift.appspot.com",
  messagingSenderId: "7941375871",
  appId: "1:7941375871:web:4131f01d6e9b4813ad3c4a",
  measurementId: "G-0V33FT5SN2"
};
 if (!firebase.apps.length) {
  try {
      base = firebase.initializeApp(firebaseConfig).auth();
  } catch (err) {
      console.error('Firebase initialization error raised', err.stack)
  }
}

export default withFirebaseAuth({
  providers,
  base
})