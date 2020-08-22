import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAj__L2pjEvpyGjcDKqHKho7mOT8uxQwZo",
    authDomain: "clone-ba0bf.firebaseapp.com",
    databaseURL: "https://clone-ba0bf.firebaseio.com",
    projectId: "clone-ba0bf",
    storageBucket: "clone-ba0bf.appspot.com",
    messagingSenderId: "733647293894",
    appId: "1:733647293894:web:ed00076ba1e2dbf642b6c7",
    measurementId: "G-Z2WS1X3GJK"
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth};