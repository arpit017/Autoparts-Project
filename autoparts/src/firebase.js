// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage}from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnwyDcT1gXlSfIOVjOjaIPr8dH75rBsew",
  authDomain: "openbooktech-871a4.firebaseapp.com",
  projectId: "openbooktech-871a4",
  storageBucket: "openbooktech-871a4.appspot.com",
  messagingSenderId: "824647282741",
  appId: "1:824647282741:web:0169b2cc1ed30778b5417c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const storage=getStorage(app)
const db=getFirestore(app)
export {auth,app,storage,db};


//storeage locations