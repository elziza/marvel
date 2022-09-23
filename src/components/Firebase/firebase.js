import app from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAOlaBLbRneTaLddWrz207HP6h8fQBpJF4",
    authDomain: "marvel-5f121.firebaseapp.com",
    projectId: "marvel-5f121",
    storageBucket: "marvel-5f121.appspot.com",
    messagingSenderId: "413105642466",
    appId: "1:413105642466:web:025483d055863faeb3f7bb"
  };

class Firebase{
    constructor(){
        app.initializeApp(config)
        this.auth=app.auth();
    }
    // Isncription
    signUpUser=(email,password)=>{
        this.auth.createUserWithEmailAndPassword(email,password)
    }
    //connexion
    login=(email,password)=>{
        this.auth.signInWithEmailAndPassword(email,password)
    }
    // Deconnexion
    signOut=()=>this.auth.signOut();
}

export default Firebase;