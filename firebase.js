import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, //to get our database from firebase
  ref, //gives us specific references in our databases
  push, //creates a new location in a given reference
  set, //adds data to our database
  onValue, //reads data from our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAqy2v_nuz95jyephF_NKGph707Mm45nI",
    authDomain: "fir-32893.firebaseapp.com",
    databaseURL: "https://fir-32893-default-rtdb.firebaseio.com",
    projectId: "fir-32893",
    storageBucket: "fir-32893.appspot.com",
    messagingSenderId: "344832059336",
    appId: "1:344832059336:web:efc011c1c15052e57582fd"
  };


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, push, set, onValue };