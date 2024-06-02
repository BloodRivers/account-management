  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
  const analytics = getAnalytics(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login");
  googleLogin.addEventListener("click", () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "../logged.html";

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
  })

  updateUserProfile()