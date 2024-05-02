import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

const form = document.forms['contact-form']

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    

    const email = document.getElementById('email').value;
    
    const password = document.getElementById('password').value;
    


    createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert('Received successfully...')
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert('Received error!') 
        });

});
