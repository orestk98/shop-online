import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyA6oeAXSgDAShnBbBcY4N6i8VItQdZHowg",
    authDomain: "shop-online-acd2c.firebaseapp.com",
    databaseURL: "https://shop-online-acd2c.firebaseio.com",
    projectId: "shop-online-acd2c",
    storageBucket: "shop-online-acd2c.appspot.com",
    messagingSenderId: "845274388892",
    appId: "1:845274388892:web:a8a82c3211a592c4755059",
    measurementId: "G-V37D840HS8"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();


if (!snapShot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData})
    }   catch(error){
    console.log('error creating user', error.message);
  }

  }
return userRef;
}



  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
