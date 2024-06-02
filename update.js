import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth ,GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUBVx8xmHYmVl-AVcgm0Ls3ZFReu_tBlM",
  authDomain: "account-management-f6ae3.firebaseapp.com",
  databaseURL: "https://account-management-f6ae3-default-rtdb.firebaseio.com",
  projectId: "account-management-f6ae3",
  storageBucket: "account-management-f6ae3.appspot.com",
  messagingSenderId: "958665331477",
  appId: "1:958665331477:web:4fe9d8cbb7a595c29c0f1c",
  measurementId: "G-Y9SXH2MC5W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const user = auth.currentUser;

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user)
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account & Log In")
        window.location.href = "/index.html";
    }
});