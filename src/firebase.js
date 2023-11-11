import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBue2fy_74e21sJifIh170VDVHdSwiLWKM",
    authDomain: "vgogh-website.firebaseapp.com",
    projectId: "vgogh-website",
    storageBucket: "vgogh-website.appspot.com",
    messagingSenderId: "968985829603",
    appId: "1:968985829603:web:c1a6c005fc6db6cdefa5d6",
    measurementId: "G-QYE23D0H5B"
  };

  const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
