import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqPeoY2_44sMZjf31gInA-N68uEsz9wG8",
    authDomain: "tinder-clone-2e7a1.firebaseapp.com",
    databaseURL: "https://tinder-clone-2e7a1.firebaseio.com",
    projectId: "tinder-clone-2e7a1",
    storageBucket: "tinder-clone-2e7a1.appspot.com",
    messagingSenderId: "317253202026",
    appId: "1:317253202026:web:54e2c93ee36683a5f41a13",
    measurementId: "G-46HP8D69BY",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;