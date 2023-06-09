import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const db = getFirestore();

const colRef = collection(db, "task");

export const addTask = (data) => {
  addDoc(colRef, data);
}