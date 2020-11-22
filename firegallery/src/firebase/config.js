import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDa_WOdXdRedw0lqCkHFuw3iC2yoDzuaCE",
    authDomain: "photo-gallery-68ac4.firebaseapp.com",
    databaseURL: "https://photo-gallery-68ac4.firebaseio.com",
    projectId: "photo-gallery-68ac4",
    storageBucket: "photo-gallery-68ac4.appspot.com",
    messagingSenderId: "33828938294",
    appId: "1:33828938294:web:013a1b2de86c2f95a1ae97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};