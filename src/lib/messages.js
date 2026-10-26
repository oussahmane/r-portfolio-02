import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const messagesCollection = collection(db, 'messages');

export function subscribeToMessages(onChange, onError) {
  const messagesQuery = query(messagesCollection, orderBy('createdAt', 'desc'));
  return onSnapshot(
    messagesQuery,
    (snapshot) => {
      onChange(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
    },
    onError,
  );
}

export function sendMessage({ name, email, message }) {
  return addDoc(messagesCollection, {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
    status: 'unread',
    processingStatus: 'pending',
    source: 'r-portfolio-02',
  });
}

export function setMessageStatus(id, status) {
  return updateDoc(doc(db, 'messages', id), { status });
}

export function removeMessage(id) {
  return deleteDoc(doc(db, 'messages', id));
}

export function messageErrorText(error) {
  if (error?.code === 'permission-denied') {
    return 'The database refused this request. Publish the Firestore rules, then try again.';
  }
  if (error?.code === 'not-found') {
    return 'The Firestore database was not found.';
  }
  if (error?.code === 'unavailable') {
    return 'The database could not be reached. Try again in a moment.';
  }
  return 'The database request failed. Try again.';
}
