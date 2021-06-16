import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCwiDPAHv6J4JUR6YzGAepLyNMHvg8UPTQ",
  authDomain: "horizon-5939b.firebaseapp.com",
  projectId: "horizon-5939b",
  storageBucket: "horizon-5939b.appspot.com",
  messagingSenderId: "1049186433845",
  appId: "1:1049186433845:web:433dd877a405fda971ea7c",
  measurementId: "G-KEY4XGC6PB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      
    firebase.firestore().settings({timestampsInSnapshots: true});
    export default firebase;