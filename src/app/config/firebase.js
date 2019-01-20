import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };
// firestore.settings(settings);
firebase.firestore();

export default firebase;
