const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAWJtElN4XSwVo2H1vkT_9Y0sWt88OP4s0",
  authDomain: "garage-1a5b4.firebaseapp.com",
  projectId: "garage-1a5b4",
  storageBucket: "garage-1a5b4.appspot.com",
  messagingSenderId: "883226580665",
  appId: "1:883226580665:web:5941d35b76d94c66ec6d68",
  measurementId: "G-77E3T67QL3",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;


// FIREBASE_API_KEY="AIzaSyAWJtElN4XSwVo2H1vkT_9Y0sWt88OP4s0"
// FIREBASE_AUTH_DOMAIN="garage-1a5b4.firebaseapp.com"
// FIREBASE_PROJECT_ID="garage-1a5b4"
// FIREBASE_STORAGE_BUCKET="garage-1a5b4.appspot.com"
// FIREBASE_MESSAGING_SENDER_ID ="883226580665"
// FIREBASE_APP_ID="1:883226580665:web:5941d35b76d94c66ec6d68"
// FIREBASE_MEASUREMENT_ID="G-77E3T67QL3"
// FIREBASE_GARAGE_COLLECTION_NAME="garageRecords"