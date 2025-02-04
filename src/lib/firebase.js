// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_I,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addEmail = async (email) => {
	try {
	  // Create a document ID from the email (you might want to hash it or sanitize it)
	  const docId = email.toLowerCase().replace(/[^a-z0-9]/g, '_');
	  
	  // Use setDoc with merge:true to avoid overwriting if document exists
	  await setDoc(doc(db, "waitlist", docId), {
		email: email.toLowerCase(), // Store email in lowercase for consistency
		timestamp: new Date(),
		updatedAt: new Date()
	  }, { merge: true });
	  
	  return {
		success: true,
		id: docId
	  };
	} catch (error) {
	  console.error("Error adding email:", error);
	  return {
		success: false,
		error: error.message
	  };
	}
  };