import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  /* env properties must start with REACT_APP in react, otherwise it will throw error  */
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
