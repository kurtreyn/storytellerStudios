import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrInuKwB2NTjpLfCcZ3Yjj29flzf41xik',
  authDomain: 'storyteller-studios.firebaseapp.com',
  projectId: 'storyteller-studios',
  storageBucket: 'storyteller-studios.appspot.com',
  messagingSenderId: '783027831521',
  appId: '1:783027831521:web:24d5861c1278231f75eda0',
  measurementId: 'G-8KN5DNQKNQ',
};

// init firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
// init services
export const db = getFirestore();
export const featureProdRef = collection(db, 'featured_product');

export const featuredProdRefQuery = query(
  collection(db, 'feautred_product'),
  orderBy('createdAt', 'desc')
);
