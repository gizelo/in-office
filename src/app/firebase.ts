import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBiLrUKOV9nqyHuk9AmtBXohXSICpeDQGY",
    authDomain: "in-office-863ec.firebaseapp.com",
    projectId: "in-office-863ec",
    storageBucket: "in-office-863ec.appspot.com",
    messagingSenderId: "711326671628",
    appId: "1:711326671628:web:d8dd34824940f5c8665f29",
    measurementId: "G-M3H4CMZMP7"
})

export const firestore = getFirestore(firebaseApp)