import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_J8IRPkgwGozKFlsGijvOSVNoxwqNzUw",
  authDomain: "sobremimreact.firebaseapp.com",
  projectId: "sobremimreact",
  storageBucket: "sobremimreact.appspot.com",
  messagingSenderId: "971752824842",
  appId: "1:971752824842:web:92449c2ab74b5c4ce4fff3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
