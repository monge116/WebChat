
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
login = document.getElementById("login_form");
signup = document.getElementById("sign_up_form")
buttons = document.getElementById("log_out")
perfil = document.getElementById("log_in")
function fLoginWrapper(){
    login.style.display = "grid"
    signup.style.display = "none"
}
function fSignUpWrapper(){
    signup.style.display = "grid"
    login.style.display = "none"
}
function floggedIn(){
    
    if(document.getElementById("email").value != null && document.getElementById("password").value != null){
        console.log("hola")
        // login.style.display = "none"
        buttons.style.display = "none"
        perfil.style.display = "flex"
    }
    
}

