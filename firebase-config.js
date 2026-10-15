import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js';

import {
  getAuth,
  setPersistence,
  browserSessionPersistence
} from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js';

import {
  getFirestore
} from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js';

import {
  getStorage
} from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyCPUR1MU8G9pf61kGP6OMXZNWoENGb1eZs",
  authDomain: "gabshop-c1484.firebaseapp.com",
  projectId: "gabshop-c1484",
  storageBucket: "gabshop-c1484.firebasestorage.app",
  messagingSenderId: "1058319948043",
  appId: "1:1058319948043:web:38d330414ab0528cdc6a0e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const authReady = setPersistence(
  auth,
  browserSessionPersistence
);