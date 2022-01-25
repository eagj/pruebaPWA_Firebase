if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdXj3rCQiRVQLj0j-dIjVyTVj8JjSBxs",
  authDomain: "notispwa.firebaseapp.com",
  projectId: "notispwa",
  storageBucket: "notispwa.appspot.com",
  messagingSenderId: "132372598911",
  appId: "1:132372598911:web:7f6163e63c9c9250206f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);