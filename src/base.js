// import Rebase from 're-base';
// import firebase from 'firebase';

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyAArRHUo0lgs2KAXVZ4wqIrxSSzlE-pu6M",
//     authDomain: "catch-of-the-day-jackkill.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-jackkill.firebaseio.com",
//     projectId: "catch-of-the-day-jackkill"
// });
// const base = Rebase.createClass(app.database());

// export default base;

// import Rebase from 're-base';
// import firebase from 'firebase';

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyAybYdCVrz0Njxjg9qDItG-Av-bhtvfROM",
//     authDomain: "simple-portfolio.firebaseapp.com",
//     databaseURL: "https://simple-portfolio.firebaseio.com",
//     projectId: "simple-portfolio"
// });
// const base = Rebase.createClass(app.database());

// export default base;

import firebase from 'firebase';
    const config = {
        apiKey: "AIzaSyAybYdCVrz0Njxjg9qDItG-Av-bhtvfROM",
        authDomain: "simple-portfolio.firebaseapp.com",
        databaseURL: "https://simple-portfolio.firebaseio.com",
        projectId: "simple-portfolio",
        storageBucket: "simple-portfolio.appspot.com",
        messagingSenderId: "699483416866"
    };
    firebase.initializeApp(config);
    let db = firebase.firestore();
export default db;