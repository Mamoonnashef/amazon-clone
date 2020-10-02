// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6I2zVc4rZKR54lQuG8kqHVwhkMK_dUYU",
  authDomain: "clone-b3726.firebaseapp.com",
  databaseURL: "https://clone-b3726.firebaseio.com",
  projectId: "clone-b3726",
  storageBucket: "clone-b3726.appspot.com",
  messagingSenderId: "759401990722",
  appId: "1:759401990722:web:a904c30fab942afab7bbdb",
  measurementId: "G-0ZF2EF4Y9W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
