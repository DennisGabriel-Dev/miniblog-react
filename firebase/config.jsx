import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUfaDTH5PF5xoycirtlA-ej6zwpBUA4Qw",
  authDomain: "miniblog-9025d.firebaseapp.com",
  projectId: "miniblog-9025d",
  storageBucket: "miniblog-9025d.firebasestorage.app",
  messagingSenderId: "690681749444",
  appId: "1:690681749444:web:467760edd871480bfc8e91"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }