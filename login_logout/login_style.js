import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQYgI5oa7cyZbNelTuTNn4zL2RiLyRAFQ",
    authDomain: "login-example-f7fc6.firebaseapp.com",
    projectId: "login-example-f7fc6",
    storageBucket: "login-example-f7fc6.appspot.com",
    messagingSenderId: "559804348869",
    appId: "1:559804348869:web:d0d710977dfb2ed9bbb3ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(event) {
        
      event.preventDefault(); // Ngăn chặn hành vi mặc định của form

      const email = document.getElementById('Email').value;
      
      const password = document.getElementById('Password').value;

      signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          alert('Login successfully...')
          window.location.href = "/Student-Management-main/home.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert("Invalid email or password. Please try again.");
      });

    });
});
