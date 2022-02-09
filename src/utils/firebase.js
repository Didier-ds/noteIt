// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
// import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const fireBaseRef = ref()
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAywirXRMZfY-Mp51T80C5bl4ebYsyd1Y",
    authDomain: "noteit-7didier.firebaseapp.com",
    databaseURL: "https://noteit-7didier-default-rtdb.firebaseio.com",
    projectId: "noteit-7didier",
    storageBucket: "noteit-7didier.appspot.com",
    messagingSenderId: "550104670249",
    appId: "1:550104670249:web:8979b9d1b92797b6467c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const all = { app, db, ref, set, onValue }
export default all;