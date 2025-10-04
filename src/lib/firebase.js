import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDHUdTcM7oHWcThvxBzoVCTmkY6N6ogHCI",
  authDomain: "pioneer-database.firebaseapp.com",
  databaseURL: "https://pioneer-database-default-rtdb.firebaseio.com",
  projectId: "pioneer-database",
  storageBucket: "pioneer-database.firebasestorage.app",
  messagingSenderId: "1095575708432",
  appId: "1:1095575708432:web:b66d84298bae6a0595fb95",
  measurementId: "G-8R0QEHG2R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const db = getFirestore(app)          
export const rtdb = getDatabase(app)          
export const storage = getStorage(app)       
export default app
