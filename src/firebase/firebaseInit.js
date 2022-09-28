/* eslint-disable prettier/prettier */



import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArLtQl68NYNuM-Rl9MqatK94mAVgIJpxg",
  authDomain: "fireblogs-f4652.firebaseapp.com",
  projectId: "fireblogs-f4652",
  storageBucket: "fireblogs-f4652.appspot.com",
  messagingSenderId: "1081695131891",
  appId: "1:1081695131891:web:5780b6a49d367e32f3bf86"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
