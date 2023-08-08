const btnSignIn = document.getElementById("sign-in"),
    btnSignUP = document.getElementById("sign-up");
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
} )

btnSignUP.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")

    SignUpForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const email = document.querySelector('Sign-up-email').value;
        const password = document.querySelector('Sign-up-password').value;

        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCrecential =>{
            console.log('sign-up')
        })
    })


} )
