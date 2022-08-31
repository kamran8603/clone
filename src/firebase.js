import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsPeq1TwLRTJ1lasewn5ZnEd6W4rp3RR0",
  authDomain: "clone-f3302.firebaseapp.com",
  projectId: "clone-f3302",
  storageBucket: "clone-f3302.appspot.com",
  messagingSenderId: "399599044075",
  appId: "1:399599044075:web:f79949d6b2dd13e8d8c5ae",
  measurementId: "G-376G9CYYF4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };