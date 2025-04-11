import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Veritabanı
import { getAuth } from "firebase/auth"; // Kimlik doğrulama

const firebaseConfig = {
  apiKey: "AIzaSyAgvJinNVC5WafnPCUZc-hRZinjwo73pIg",
  authDomain: "sayloud-dca99.firebaseapp.com",
  projectId: "sayloud-dca99",
  storageBucket: "sayloud-dca99.firebasestorage.app",
  messagingSenderId: "869306738017",
  appId: "1:869306738017:web:bab23e2494058223cd9120",
  measurementId: "G-FLPJ8WBVN7"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firebase servislerini al
const db = getFirestore(app); // Firestore veritabanı
const auth = getAuth(app); // Kimlik doğrulama

export { db, auth };
