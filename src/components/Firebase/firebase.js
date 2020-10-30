import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDK3mQ42xYkFXH1R_R6H-tj9Qzf_9fzIuE",
    authDomain: "one-way-twitter.firebaseapp.com",
    databaseURL: "https://one-way-twitter.firebaseio.com",
    projectId: "one-way-twitter",
    storageBucket: "one-way-twitter.appspot.com",
    messagingSenderId: "61600544810",
    appId: "1:61600544810:web:960321e6973fe834b12b53",
    measurementId: "G-MVTVDB396S"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();

          this.twitterProvider = new app.auth.TwitterAuthProvider();
      }

      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      doSignInWithTwitter = () =>
        this.auth.signInWithRedirect(this.twitterProvider);

      doSignOut = () => {
          console.log('Signing out...');
          this.auth.signOut()
      };

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;