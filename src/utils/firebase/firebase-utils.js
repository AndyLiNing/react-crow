import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIa6-Jx17Ue4ZHgXpANZkYr30Ko9oRoTM",
    authDomain: "crwn-clothing-fc9fb.firebaseapp.com",
    projectId: "crwn-clothing-fc9fb",
    storageBucket: "crwn-clothing-fc9fb.appspot.com",
    messagingSenderId: "661764682012",
    appId: "1:661764682012:web:1f187ac2ddda1ec1f44ad9",
    measurementId: "G-KBWSPZ4ZJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});