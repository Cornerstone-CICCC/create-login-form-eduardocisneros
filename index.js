const expresion = {
    email: /^[a-zA-Z0-9_.=-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const answer = document.getElementById("answer");
const eyes = document.getElementById("eyes");

/* LOCK COLOR */

password.addEventListener("mouseover", (e)=>{

})

/* SHOW PASSWORD */
eyes.addEventListener("click", (e)=>{
    password.type = "text";
})

/* FORM */
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!expresion.email.test(email.value)){
        answer.innerHTML = "Email is incorrect";
    } else if(!expresion.password.test(password.value)){
        answer.innerHTML = "Password isn't correct";
    } else{
        form.reset();
        answer.innerHTML = "Loading...";

    }
})
