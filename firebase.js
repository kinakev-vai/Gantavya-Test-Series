import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3MxWODlavvudFu0utDUUCVnH1VM-UA_8",
  authDomain: "gantavya-test-series.firebaseapp.com",
  projectId: "gantavya-test-series",
  storageBucket: "gantavya-test-series.firebasestorage.app",
  messagingSenderId: "913874899973",
  appId: "1:913874899973:web:cc73a6e0c35c05e657786c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
