import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCzT8fFHR__uoC7t--KyIq_6DSGocf9PXk',
  authDomain: 'dave-portfolio-2e28a.firebaseapp.com',
  projectId: 'dave-portfolio-2e28a',
  storageBucket: 'dave-portfolio-2e28a.appspot.com',
  messagingSenderId: '941442232223',
  appId: '1:941442232223:web:87e4431a2b96ebeb7fd7aa',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
