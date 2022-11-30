const { getAuth } = require("firebase/auth");

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyACvOcyqqwkugwrxLWLNaj9S1fIIBGGO2w",
  authDomain: "undangan-e6327.firebaseapp.com",
  projectId: "undangan-e6327",
  storageBucket: "undangan-e6327.appspot.com",
  messagingSenderId: "899063582795",
  appId: "1:899063582795:web:f461c26a219faa5f967dce",
  measurementId: "G-GW7VX9MMRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export default app;
export const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "brides");
//   const citySnapshot = await getDocs(citiesCol);
//   const [cityList] = citySnapshot.docs.map((doc) => doc.data());
//   console.log(cityList);
//   return cityList;
// }

// getCities(db);
