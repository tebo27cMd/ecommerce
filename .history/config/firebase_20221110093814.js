// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:675761069490:web:d22c489d0754b4e9f018ab",
  measurementId: "G-7MCHXHSRBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);