import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD2QoIawdWyy74lOq8yabnG489NEkQDFG8",
  authDomain: "portfolio-17bde.firebaseapp.com",
  projectId: "portfolio-17bde",
  storageBucket: "portfolio-17bde.appspot.com",
  messagingSenderId: "932447192764",
  appId: "1:932447192764:web:3eeece81fd49dcd98db2b9",
  measurementId: "G-XSPJRPB1FX"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
