import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase);

export { firebase, firestore, collection, getDocs, doc, deleteDoc, addDoc, updateDoc } 