// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDEHtnAY95tE-obHT0OhyT5Dr5Bw4MTp9g",
//   authDomain: "bookstore-71eab.firebaseapp.com",
//   projectId: "bookstore-71eab",
//   storageBucket: "bookstore-71eab.appspot.com",
//   messagingSenderId: "943894913668",
//   appId: "1:943894913668:web:025382363624265de8d8d1",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCocZGcg0eGWfZbGLXa-OFgo7H0MNgUcCM",
  authDomain: "store-c6ad6.firebaseapp.com",
  projectId: "store-c6ad6",
  storageBucket: "store-c6ad6.appspot.com",
  messagingSenderId: "923735185097",
  appId: "1:923735185097:web:b8dcd69b9d4276617d9f18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
