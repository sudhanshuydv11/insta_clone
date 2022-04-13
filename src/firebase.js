// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app=firebase.initializeApp({
  apiKey: "AIzaSyAp1oJN3iZxsJe9bMYPN5v9wn2QWzraM0Q",
  authDomain: "insta-clone-c9165.firebaseapp.com",
  projectId: "insta-clone-c9165",
  storageBucket: "insta-clone-c9165.appspot.com",
  messagingSenderId: "618936425293",
  appId: "1:618936425293:web:6c992efc9cbbd20dfc3504",
  measurementId: "G-GM0ZJKXV2S"
});

// Initialize Firebase
const db=app.firestore();
const auth=firebase.auth();

//const storage=firebase.storage();
export {db,auth};

