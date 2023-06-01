// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage}from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp0QJzH0qG352qiBusP4Wz8TewRdZkEvM",
  authDomain: "autoparts-b2792.firebaseapp.com",
  projectId: "autoparts-b2792",
  storageBucket: "autoparts-b2792.appspot.com",
  messagingSenderId: "1060412990599",
  appId: "1:1060412990599:web:35319f4ece47eab60d4422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth=getAuth();
  const storage=getStorage(app)
  const db=getFirestore(app)
  export {auth,app,storage,db};