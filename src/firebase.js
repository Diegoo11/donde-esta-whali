import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
    addDoc,
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    query,
    updateDoc,
    where
  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyAw3p2VQwC6yc5ojPTHzgBH50r3oIm6CKg",
    authDomain: "where-is-whali.firebaseapp.com",
    projectId: "where-is-whali",
    storageBucket: "where-is-whali.appspot.com",
    messagingSenderId: "591293260324",
    appId: "1:591293260324:web:f876de31655bc9f89d6eb1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTime = (name, time) => addDoc(collection(db, 'times'), {name, time})

  export const getTimes = async (set) => {
    const querySnapshot = await getDocs(collection(db, 'times'))
    const docs = []
    querySnapshot.forEach(doc => {
      docs.push({ ...doc.data(), id: doc.id})
    });
    docs.sort((a,b) => {
      if(a.time < b.time){
        return -1
      }
      if(a.time > b.time){
        return +1
      }
      return 0
    })
    set(docs)
    
  }