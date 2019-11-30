
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyBSkMRh3iUF5tH9PHnFkEI4eovKyrQdKo8",
    authDomain: "fire-planning-app.firebaseapp.com",
    databaseURL: "https://fire-planning-app.firebaseio.com",
    projectId: "fire-planning-app",
    storageBucket: "fire-planning-app.appspot.com",
    messagingSenderId: "995871349247",
    appId: "1:995871349247:web:5ef2ed48c200bb320dafca",
    measurementId: "G-3NL8LGDFC4",
    
  };
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase