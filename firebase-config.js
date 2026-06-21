import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmd1CucGowAVPKSy-_If4QtpARb-Fy6a0",
  authDomain: "school-d39f3.firebaseapp.com",
  projectId: "school-d39f3",
  storageBucket: "school-d39f3.firebasestorage.app",
  messagingSenderId: "720081607100",
  appId: "1:720081607100:web:cd08945040adddf45d73b9",
  measurementId: "G-XQJGXYL0WD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
