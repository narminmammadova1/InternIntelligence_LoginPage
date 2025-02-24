// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZ4qyeVpC1lwpZJw55xaxIQQmXlJwh5po",
//   authDomain: "loginpage-2f48c.firebaseapp.com",
//   projectId: "loginpage-2f48c",
//   storageBucket: "loginpage-2f48c.firebasestorage.app",
//   messagingSenderId: "614093578945",
//   appId: "1:614093578945:web:37c2e282e0bfbe7b51aa40",
//   measurementId: "G-EGVB7NL9YY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);





import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCZ4qyeVpC1lwpZJw55xaxIQQmXlJwh5po",
  authDomain: "loginpage-2f48c.firebaseapp.com",
  projectId: "loginpage-2f48c",
  storageBucket: "loginpage-2f48c.firebasestorage.app",   
  messagingSenderId: "614093578945",
 appId: "1:614093578945:web:37c2e282e0bfbe7b51aa40",
 measurementId: "G-EGVB7NL9YY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const currentUser=auth.currentUser

export { auth, firestore, createUserWithEmailAndPassword,currentUser,db,ref,get};