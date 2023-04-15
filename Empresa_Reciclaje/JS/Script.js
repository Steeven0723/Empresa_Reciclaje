
const correo = document.getElementById("email");
const password = document.getElementById("password")
const form = document.getElementById("link");
const formColegio = document.getElementById("formColegio");
const parrafo = document.getElementById("validacion");
const emailError = document.getElementById("emailError");
const PasswordError = document.getElementById("passwordError");

form.addEventListener("submit", e=>{

    let warnings = "";
    let entrar = false;
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    parrafo.innerHTML="";
    emailError.innerHTML = "";
    PasswordError.innerHTML="";

    if(!validEmail.test(correo.value)){
        // warnings += `El Email no es valido <br>
        emailError.innerHTML = `El Email no es valido* <br>`
        entrar = true;
    }

    if(password.value.length < 8){
        //warnings += `La contraseña es muy corta <br>`
        PasswordError.innerHTML = `La contraseña no es valido* <br>`
        entrar = true;
    }

    if(entrar){
        e.preventDefault()
        // parrafo.innerHTML = warnings;
    }

})

formColegio.addEventListener("submit" , e=>{
      
})