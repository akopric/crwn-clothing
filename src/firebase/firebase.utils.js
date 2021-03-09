import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIRZtdkuQlaEK8ZtvmkRbInSXn3ItZDPY",
    authDomain: "crwn-db-d37a1.firebaseapp.com",
    projectId: "crwn-db-d37a1",
    storageBucket: "crwn-db-d37a1.appspot.com",
    messagingSenderId: "475038241817",
    appId: "1:475038241817:web:57d14fcaa55502cd988688",
    measurementId: "G-HPPJQNNK9R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;