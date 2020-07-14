import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgGgmfvPlnRBqt6p-di8XGvq8tyJnXdHw",
    authDomain: "crwn-db-fcb18.firebaseapp.com",
    databaseURL: "https://crwn-db-fcb18.firebaseio.com",
    projectId: "crwn-db-fcb18",
    storageBucket: "crwn-db-fcb18.appspot.com",
    messagingSenderId: "858567318885",
    appId: "1:858567318885:web:2e7fa001af49a7ed4fd58c",
    measurementId: "G-NQ753BHXJ2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // check if user signing in exists in db
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // if userRef doesn't exist:
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        // try to create user with these attributes
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;