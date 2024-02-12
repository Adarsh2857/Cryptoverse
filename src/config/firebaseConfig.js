import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHyhN8r96u13VwV3BrM2Zud4dwS4zdT_k",
  authDomain: "cryptobase-cecb7.firebaseapp.com",
  projectId: "cryptobase-cecb7",
  storageBucket: "cryptobase-cecb7.appspot.com",
  messagingSenderId: "17578396836",
  appId: "1:17578396836:web:13d4a588b12a2fdcaeaa31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
