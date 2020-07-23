import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBfxDqhuXMgPiS8tQ6ZLBTyTsHS-SV9hSo",
    authDomain: "burger-queen-f1fd7.firebaseapp.com",
    databaseURL: "https://burger-queen-f1fd7.firebaseio.com",
    projectId: "burger-queen-f1fd7",
    storageBucket: "burger-queen-f1fd7.appspot.com",
    messagingSenderId: "789930118006",
    appId: "1:789930118006:web:785b80b6a37b3822a18857"
});

export default firebaseConfig;