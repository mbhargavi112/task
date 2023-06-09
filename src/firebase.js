import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'



//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCSndVLIEG_Reg5E_Cph9kBSStetvdyjxk",
    authDomain: "task-df0b5.firebaseapp.com",
    projectId: "task-df0b5",
    storageBucket: "task-df0b5.appspot.com",
    messagingSenderId: "254506067996",
    appId: "1:254506067996:web:531b1a03f74f3aa53297d9",
    measurementId: "G-5P9R89SW2W"
  };
  
  // Initialize Firebase
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth,app}