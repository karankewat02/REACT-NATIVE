// Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
// import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCvQiXOcxweCbzZI6M0-F4nErpauh-2lE0",
  authDomain: "cravingbowl-karan.firebaseapp.com",
  projectId: "cravingbowl-karan",
  storageBucket: "cravingbowl-karan.appspot.com",
  messagingSenderId: "765647835710",
  appId: "1:765647835710:web:bb16f558479ad3d195f76f",
};

// initializeApp(firebaseConfig)

// export const auth = getAuth();

// export const signUpUser = (name,email,password,)=>{
//   createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
//     console.log('The User was Created' , cred.user);
//     if(auth.currentUser){
//       updateProfile(auth.currentUser,{
//         displayName:name,
//       })
//     }
//   }).catch((err)=>{
//     console.log(err);
//   })
// }