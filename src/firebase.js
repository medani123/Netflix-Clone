import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC14fHbHqHGdVlu_8DJLizSSOnz24S7XOQ",
  authDomain: "netflix-clone-5e34f.firebaseapp.com",
  projectId: "netflix-clone-5e34f",
  storageBucket: "netflix-clone-5e34f.appspot.com",
  messagingSenderId: "918373676995",
  appId: "1:918373676995:web:b0801035f628c3db2f6f76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
