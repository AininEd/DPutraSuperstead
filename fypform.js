

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCSqmievzCdO0Ig6gEYW9ZNok3zqfnxlZQ",
    authDomain: "testdatabase-818fe.firebaseapp.com",
    databaseURL: "https://testdatabase-818fe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testdatabase-818fe",
    storageBucket: "testdatabase-818fe.appspot.com",
    messagingSenderId: "601971669370",
    appId: "1:601971669370:web:b1bfc656166918d8c77ec3",
    measurementId: "G-JVN0MV7LFV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Signup function
function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("SignUp Successfully");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// SignIN function
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("SignIn Successfully");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// SignOut
function signOut() {
    auth.signOut()
        .then(() => {
            alert("SignOut Successfully from System");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
    } else {
        alert("No Active user Found");
    }
});
