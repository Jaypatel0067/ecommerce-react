import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 

const config = {
    apiKey: "AIzaSyAXK1yDs18rGVHco6J4DMaEaWHg8MM26Ws",
    authDomain: "ecommerce-db-cd6e9.firebaseapp.com",
    projectId: "ecommerce-db-cd6e9",
    storageBucket: "ecommerce-db-cd6e9.appspot.com",
    messagingSenderId: "773590329911",
    appId: "1:773590329911:web:6498f441fd8917a7842db2",
    measurementId: "G-6ZNXGKBDQ2"
  };

export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth) return;

  const userref = firestore.doc(`User_list/${userAuth.uid}`)
  const snapshot = await userref.get();
  if(!snapshot.exists){
    const {displayName,email}  = userAuth;
    const createdAt = new Date();
    try{
      await userref.set({
        displayName,
        email,createdAt,
        ...additionalData
      })
      
        
       

    }catch(error){
      console.log('error creating user',error.message)
    }
  }
return userref

}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;