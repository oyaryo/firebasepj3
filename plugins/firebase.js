// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHkzcPsloeu2piH2dCB78kZNW_PeLF0tc",
  authDomain: "fir-pj3-26803.firebaseapp.com",
  projectId: "fir-pj3-26803",
  storageBucket: "fir-pj3-26803.appspot.com",
  messagingSenderId: "838211147520",
  appId: "1:838211147520:web:523d8526d8a90ed923c5e5",
  measurementId: "G-P71C7Y3VSN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// export default (context, inject) => {
//   inject("firebase", firebaseApp);
// };

export default firebaseApp;