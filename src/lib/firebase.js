import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAs8Vb5OmhOA4CoAOmf7CAOU11Cvl-CGCI',
  authDomain: 'r-portfolio-02.firebaseapp.com',
  projectId: 'r-portfolio-02',
  storageBucket: 'r-portfolio-02.firebasestorage.app',
  messagingSenderId: '961374526607',
  appId: '1:961374526607:web:5b0a3d1bf59c83bd1ca4fa',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Project r-portfolio-02. Firestore is the default Standard database in eur3.
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
