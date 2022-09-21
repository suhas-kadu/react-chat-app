import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "chat-edd94.firebaseapp.com",
    projectId: "chat-edd94",
    storageBucket: "chat-edd94.appspot.com",
    messagingSenderId: "822051608563",
    appId: "1:822051608563:web:d5b2014cf28234c1216486"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();