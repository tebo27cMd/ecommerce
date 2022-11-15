// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgUf3QvLwcV-mzZGxXUBhWVe96Js2p8AQ",
  authDomain: "restaurant-eb802.firebaseapp.com",
  databaseURL: "https://restaurant-eb802-default-rtdb.firebaseio.com",
  projectId: "restaurant-eb802",
  storageBucket: "restaurant-eb802.appspot.com",
  messagingSenderId: "675761069490",
  appId: "1:675761069490:web:f205381fd7ba29cbf018ab",
  measurementId: "G-YKD9NJ3W4P"
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};