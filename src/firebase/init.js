import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCLFuIXf2ZqD2ajs8MrBAOspxwjKgd4TRI",
  authDomain: "taskscheduler-67101.firebaseapp.com",
  databaseURL: "https://taskscheduler-67101.firebaseio.com",
  projectId: "taskscheduler-67101",
  storageBucket: "",
  messagingSenderId: "515171215528",
  appId: "1:515171215528:web:a429c1f5fce9b511"
};

const firebaseConnect = firebase.initializeApp(firebaseConfig);
firebaseConnect.firestore().settings({});

export default firebaseConnect.firestore;
