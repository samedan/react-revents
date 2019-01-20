import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFQqqpQNDeWUcIpIAOI49EVVA4Srt-DOo',
  authDomain: 'reactclientpanel-31428.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-31428.firebaseio.com',
  projectId: 'reactclientpanel-31428',
  storageBucket: 'reactclientpanel-31428.appspot.com',
  messagingSenderId: '1053177882308'
};

firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };
// firestore.settings(settings);
firebase.firestore();

export default firebase;
