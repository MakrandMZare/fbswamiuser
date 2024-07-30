import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYu7pVyv3ismcUgprWOFQP6b2UyyPzwvU",
  authDomain: "swamireactuser.firebaseapp.com",
  databaseURL: "https://swamireactuser-default-rtdb.firebaseio.com",
  projectId: "swamireactuser",
  storageBucket: "swamireactuser.appspot.com",
  messagingSenderId: "718345685090",
  appId: "1:718345685090:web:8b0d14411150353f89e93b",
  measurementId: "G-72X73GRV4M"
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
