import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  // apiKey: '',
  // authDomain: '',
  databaseURL: "https://netflix-course.firebaseio.com",
  // projectId: '',
  // storageBucket: '',
  // messagingSenderId: '',
  // appId: '',
  apiKey: "AIzaSyDfX4K6cemFhGw6anjQVeXT3m_aNAv782o",
  authDomain: "netflix-course.firebaseapp.com",
  projectId: "netflix-course",
  storageBucket: "netflix-course.appspot.com",
  messagingSenderId: "531324622403",
  appId: "1:531324622403:web:16fecf602690d0143426f6",
  //   apiKey: "AIzaSyDfX4K6cemFhGw6anjQVeXT3m_aNAv782o",
  //   authDomain: "netflix-course.firebaseapp.com",
  //   projectId: "netflix-course",
  //   storageBucket: "netflix-course.appspot.com",
  //   messagingSenderId: "531324622403",
  //   appId: "1:531324622403:web:b952c1160ff894273426f6",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

// seedDatabase(firebase);
export { firebase };
