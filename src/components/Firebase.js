import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDHWXsrsKWQ7NIHibotyyTZMws5PftPaKA",
  authDomain: "auth-ab773.firebaseapp.com",
  projectId: "auth-ab773",
  storageBucket: "auth-ab773.appspot.com",
  messagingSenderId: "139199890585",
  appId: "1:139199890585:web:466be41962bfa1264ae408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result => {
        const name = result.user.displayName;
        const email = result.user.email;
        const picture = result.user.photoURL; 
    })).catch((error) => {
        console.log(error);
    })
} ;