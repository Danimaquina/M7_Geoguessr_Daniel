// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración obtenida de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBbJYNKjQvW3gq6ypubArGdcTaHB8AbaSE",
    authDomain: "geoguasser-29130.firebaseapp.com",
    projectId: "geoguasser-29130",
    storageBucket: "geoguasser-29130.firebasestorage.app",
    messagingSenderId: "614772850434",
    appId: "1:614772850434:web:32eb2eef123e2962074c1b",
    measurementId: "G-G4WXYSSEQX"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const firestore = getFirestore(app);

export { firestore };
