import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNCy_W8ftqXIBauRSzAL25b9bShUkPP9s",
    authDomain: "crown-clothing-db-410dc.firebaseapp.com",
    projectId: "crown-clothing-db-410dc",
    storageBucket: "crown-clothing-db-410dc.appspot.com",
    messagingSenderId: "1053094965699",
    appId: "1:1053094965699:web:0cf130429db52945ea0d76"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }
      catch(error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  }