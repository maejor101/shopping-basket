import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD2BDgttWLPs_rIWIJnH5VeuXKTbeddKwY",
  authDomain: "shopping-list-6cfd7.firebaseapp.com",
  projectId: "shopping-list-6cfd7",
  storageBucket: "shopping-list-6cfd7.appspot.com",
  messagingSenderId: "923218851218",
  appId: "1:923218851218:web:b1deea71bd3fb6f61bbd4b",
  measurementId: "G-TFKS031GTL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

