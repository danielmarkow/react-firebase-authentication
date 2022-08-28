import { initializeApp } from "firebase/app";
import { 
    getAuth,
    // createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // signOut,
    // sendPasswordResetEmail,
    // updatePassword
} from "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

// Initialize Firebase
// const app = initializeApp(config);
// const analytics = getAnalytics(app);

class Firebase {
    constructor() {
        const app = initializeApp(config);

        this.auth = getAuth(app);
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;