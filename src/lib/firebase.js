import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyCz72eusmKBo_tRnboFGi2L4phUn3ePCVg",
  authDomain: "instagram-clone-devanshtivari.firebaseapp.com",
  projectId: "instagram-clone-devanshtivari",
  storageBucket: "instagram-clone-devanshtivari.appspot.com",
  messagingSenderId: "124130574859",
  appId: "1:124130574859:web:8e64048a2043e776a97d0e",
  measurementId: "G-C8VNEX92ZW",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export {firebase , FieldValue};