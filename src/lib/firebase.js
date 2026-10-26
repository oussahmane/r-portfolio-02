import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAoguK2ED_iAKne2vrQZTQMVqKNm2zNKDg',
  authDomain: 'td-portfolio-01.firebaseapp.com',
  projectId: 'td-portfolio-01',
  storageBucket: 'td-portfolio-01.firebasestorage.app',
  messagingSenderId: '985508358412',
  appId: '1:985508358412:web:99759f104c20c983de8129',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Project td-portfolio-01. The live Firestore database is the default one.
// A database ID named "td-portfolio-01" does not exist in this project.
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
