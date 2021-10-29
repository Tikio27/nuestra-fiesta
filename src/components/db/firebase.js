// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBi7V9swVRvIt27CmGQoXTVlNBCMmakOmo",
  authDomain: "events-edc77.firebaseapp.com",
  databaseURL: "https://events-edc77-default-rtdb.firebaseio.com",
  projectId: "events-edc77",
  storageBucket: "events-edc77.appspot.com",
  messagingSenderId: "122960523154",
  appId: "1:122960523154:web:233996cd75c18171221b4b"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);