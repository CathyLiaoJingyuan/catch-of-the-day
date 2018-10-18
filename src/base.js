import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2IwxVLNQWYinvnrTMyb8MtKr50OkbNzU",
  authDomain: "catch-of-the-day-cathy-liao.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cathy-liao.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };
//default export
export default base;
