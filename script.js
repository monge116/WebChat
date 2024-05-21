
const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');

profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})


document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    }
});
const login = document.getElementById("login_form");
const  signup = document.getElementById("sign_up_form")
const buttons = document.getElementById("log_out")
const perfil = document.getElementById("log_in")
function fCerrarWrapper(modal){
    if(modal == login){
        login.style.display = "none"
    }
    if(modal == signup){
        signup.style.display = "none"
    }
    
}
function fMostrarModal(modal){
    if(modal == login){
        login.style.display = "grid"
        signup.style.display = "none"
    }
    if(modal== signup){
        
        signup.style.display = "grid"
        login.style.display = "none"
    }
        
      
}
// function fLoginWrapper(){
    
// }
// function fSignUpWrapper(){
    
// }
function floggedIn(){
    
    if(document.getElementById("email").value != "" && document.getElementById("password").value != ""){
        console.log("hola")
        login.style.display = "none"
        buttons.style.display = "none"
        perfil.style.display = "flex"
    }else{
        console.log("no")
    }
    
}

function fsingUp(){
    console.log(document.getElementById("l-name").value); 
    l_name = document.getElementById("l-name")
    l_lastname = document.getElementById("l-lastname")
    l_email = document.getElementById("l-email")
    l_password = document.getElementById("l-password")
    l_r_password = document.getElementById("l-r-password")
    if(l_name.value != "" && l_lastname.value != "" && l_email.value != "" && l_password.value != "" && l_r_password.value != ""){
        fLoginWrapper()
        l_name.value = ""
        l_lastname.value = "" 
        l_email.value = ""
        l_password.value = ""
        l_r_password.value = ""
        console.log("ha")
        
        
    }else{
        console.log("no")
    }
    
}

