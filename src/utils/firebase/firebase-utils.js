import { initializeApp } from 'firebase/app';

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser, additionalInformation = {} ) => {
    if (!authUser) return;
    console.log({authUser})
    const userDocRef = doc(db, 'users', authUser.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = authUser;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const onUserAuthStateChanged = (next) => onAuthStateChanged(auth, next);

export const onUserSignOut = () => signOut(auth);