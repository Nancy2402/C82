import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCKzJWAQozh8bpjnGILLrS0ABU5GO7m9lo",
  authDomain: "santa-book-5caf0.firebaseapp.com",
  databaseURL: "https://santa-book-5caf0.firebaseio.com",
  projectId: "santa-book-5caf0",
  storageBucket: "santa-book-5caf0.appspot.com",
  messagingSenderId: "165489344714",
  appId: "1:165489344714:web:3510c5722e49c2b1743433"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  /*var firebaseConfig = {
    apiKey: "AIzaSyCmMxvac_obZnPh3DNy2GuX3n5q_IeeW6c",
    authDomain: "book-santa-fa416.firebaseapp.com",
    databaseURL: "https://book-santa-fa416.firebaseio.com",
    projectId: "book-santa-fa416",
    storageBucket: "book-santa-fa416.appspot.com",
    messagingSenderId: "602538203039",
    appId: "1:602538203039:web:0cc8515a905c53c9fa4faa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/
  export default firebase.firestore();