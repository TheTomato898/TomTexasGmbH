  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAJjmyFnA-IW0jDIpm3uI0e0Nt_MyNi93w",
    authDomain: "tomtexasgmbh-einsendungen.firebaseapp.com",
    databaseURL: "https://tomtexasgmbh-einsendungen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tomtexasgmbh-einsendungen",
    storageBucket: "tomtexasgmbh-einsendungen.firebasestorage.app",
    messagingSenderId: "959560149638",
    appId: "1:959560149638:web:a930d31d1a835849507f07"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // get ref to database services
  const db = getDatabase(app);

  document.getElementById('submit').addEventListener('click', funktion(e){

    set(ref(db, 'Name/' + document.getElementById('Name').value),{

        Name: document.getElementById('Name').value,
        Vorname: document.getElementById('Vorname').value,
        E-mail: document.getElementById('E-mail').value
        Nachricht: document.getElementById('Nachricht').value

    });
    alert('Ihre Nachricht wurde gespeichert!')
  })

