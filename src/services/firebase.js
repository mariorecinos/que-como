import firebase from 'firebase/app';
import 'firebase/auth';

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUCfKbVNIBm8ke3H8pp41zGalFp9tnTOE",
  authDomain: "que-como-a4442.firebaseapp.com",
  projectId: "que-como-a4442",
  storageBucket: "que-como-a4442.appspot.com",
  messagingSenderId: "524345672953",
  appId: "1:524345672953:web:04a32fcbd25e8c402e4e28"
};

firebase.initializeApp(firebaseConfig);

// set up auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

function signIn() {
  return auth.signInWithPopup(provider);
}

function logOut() {
  return auth.signOut();
}

export {
  auth,
  signIn,
  logOut
}
