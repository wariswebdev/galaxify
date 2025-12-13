import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEhBY7lLZYuk_euTZopukxyTvCdgQZNGY",
  authDomain: "galaxify-tbm.firebaseapp.com",
  databaseURL: "https://galaxify-tbm-default-rtdb.firebaseio.com",
  projectId: "galaxify-tbm",
  storageBucket: "galaxify-tbm.firebasestorage.app",
  messagingSenderId: "618319506796",
  appId: "1:618319506796:web:7edb2d56ce1698c21fd749"
};

const app = initializeApp(firebaseConfig);

const appDatabase = getDatabase(app);

export {
    appDatabase,
    get,
    ref,
    set,
};
