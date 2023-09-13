import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAusZ43_bV7Q8aGqndP4dZscX9AtTiK6dU",
    authDomain: "portfolio-74e66.firebaseapp.com",
    projectId: "portfolio-74e66",
    storageBucket: "portfolio-74e66.appspot.com",
    messagingSenderId: "629193541627",
    appId: "1:629193541627:web:251c8d8cd5db7bd5336d5e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);