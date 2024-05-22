
function fInicio(){
    fMostrarUsuarios();
}
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
function fNoti(action){
    
    if(action == 'prox'){
        document.getElementById('noti-incorrecto').classList.add('mostrar-noti');
        setTimeout(fQuitarNoti, 3000)
    }
    
}
function fQuitarNoti(){
    document.getElementById('noti-incorrecto').classList.remove('mostrar-noti');
    // document.getElementById('noti-incorrecto').classList.remove('mostrar-noti');
}
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
function fMostrarUsuarios(){
    const URL = 'assets/php/servidor.php?peticion=CargarUsuarios';
    fetch(URL)
        .then ((response) => response.json())
        .then((data) => {
            console.log(data);
            
        let html = "";
        for (i =0; i<data.datos.length; i++) {
        //    html+= "<div>" + data.datos[i].foto_foto + "</div>"
            let id = data.datos[i].id;
            let nombre = data.datos[i].nombre;
            let apellido = data.datos[i].apellido;
            let alias = data.datos[i].alias;
            let foto = data.datos[i].foto;
            let ruta = 'assets/imágenes/photo/'
            
            
           
                html+= 
            `
                    <div id='user' onclick='fMostrarPerfil(${id})'>

                        <div id='photo'>
                            <img src="${ruta + foto}">
                        </div>
                        <div>
                            <div id='nombre'>
                                ${nombre} ${apellido}
                            </div>
                            <div id='alias'>
                                ${"@" + alias}
                            </div>
                        </div>
                        <div id='arrow'>
                           <img src="assets/arrow1.svg"> 
                        </div>
                        
                    </div>
            `;
            
            
        
        }
        document.querySelector("#users").innerHTML = "<div class='container'>"+ html + "</div>";

            
    })
}
function fMostrarPerfil(id){
    const URL = 'assets/php/servidor.php?peticion=CargarInfoUsuario&id='+id;
    fetch(URL)
        .then ((response) => response.json())
        .then((data) => {
            console.log(data);
            
        let html = "";
        for (i =0; i<data.datos.length; i++) {
        //    html+= "<div>" + data.datos[i].foto_foto + "</div>"
            let id = data.datos[i].id;
            let nombre = data.datos[i].nombre;
            let apellido = data.datos[i].apellido;
            let alias = data.datos[i].alias;
            let descripcion = data.datos[i].descripción_larga;
            let correo = data.datos[i].correo;
            // let contraseña = data.datos[i].contra;
            // let fecha_nacimiento = data.datos[i].fecha;
            let genero = data.datos[i].genero;
            let foto = data.datos[i].foto;
            let ruta = 'assets/imágenes/photo/'
            
            
           
                html+= 
            `
                    <div class='container' id='info-detallada'>
                        <div id='photo-big'>
                            <img src="${ruta + foto}">
                        </div>
                        <div>
                            <div id='nombre-big'>
                                ${nombre} ${apellido}
                            </div>
                            <div id='alias-big'>
                                ${"@" + alias}
                            </div>
                            <div id='desc-big'>
                                ${descripcion}
                            </div>
                            <div id='correo-big'>
                                ${correo}
                            </div>
                           
                            <div id='genero-big'>
                                ${'Genero: '+genero}
                            </div>
                        </div>
                        <div id='modify' onclick='fMostrarForm(${id})'>
                            <img src="assets/modify.svg">
                        </div>
                        <div id='trash' onclick='fMostrarForm(${id})'>
                            <img src="assets/trash.svg">
                        </div>
                        <div id='return' onclick='fMostrarUsuarios()'>
                            <img src="assets/arrow-return.svg">
                        </div>

                    </div>
            `;
            
            
        
        }
        document.querySelector("#users").innerHTML =  html ;

            
    })
}
function fMostrarForm(id){
    const URL = 'assets/php/servidor.php?peticion=CargarInfoUsuario&id='+id;
    fetch(URL)
        .then ((response) => response.json())
        .then((data) => {
            console.log(data);
            
        let html = "";
        for (i =0; i<data.datos.length; i++) {
        //    html+= "<div>" + data.datos[i].foto_foto + "</div>"
            // let id = data.datos[i].id;
            let nombre = data.datos[i].nombre;
            let apellido = data.datos[i].apellido;
            let alias = data.datos[i].alias;
            let descripcion = data.datos[i].descripción_larga;
            let correo = data.datos[i].correo;
            let contraseña = data.datos[i].contra;
            let fecha = data.datos[i].fecha;
            let genero = data.datos[i].genero;
            let foto = data.datos[i].foto;
            
            
           
                html+= 
            `
                    <div class='container' id='info-detallada'>

                    <div class="my-form">
                    <form class="text-field">
                        <label>Nombre: </label>
                        <input
                            id="nombre"
                            value="${nombre}"
                            type="text"
                        >
                    </div>
                    <div class="text-field">
                        <label>Apellido: </label>
                        <input      
                            id="apellido"
                            value="${apellido}"
                            type="text"
                        >
                    </div>
                    <div class="text-field">
                        <label>Alias: </label>
                        <input      
                            id="alias"
                            value="${alias}"
                            type="text"
                        >
                    </div>
                    <div class="text-field">
                        <label>Descripcion: </label>
                       
                        <input      
                            id="desc"
                            value="${descripcion}"
                            type="text"
                        >
                    </div>
                    <div class="text-field">
                        <label>Correo: </label>
                        <input      
                            id="correo"
                            value="${correo}"
                            type="text"
                        >
                    </div>
                    <div class="text-field">
                        <label>Genero: </label>
                        <input      
                            id="genero"
                            value="${genero}"
                            type="text"
                        >
                    </div>
                    <input type="submit" class="my-form__button" value="Confirmar" onclick="fActualizar(${id},'${contraseña}', '${fecha}', '${foto}')">
            
                    <div id='return' onclick='fMostrarPerfil(${id})'>
                            <img src="assets/arrow-return.svg">
                    </div>
                </form>
            </div>
            `;
            
            
        
        }
        document.querySelector("#users").innerHTML =  html ;

            
    })
}

function fActualizar(id,contraseña, fecha, foto){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let alias = document.querySelector("#alias").value;
    let desc = document.querySelector("#desc").value;
    let correo = document.querySelector("#correo").value;
    let genero = document.querySelector("#genero").value;
    let devolucion = "";
    
    console.log(nombre)
    let sql = `UPDATE usuario SET 
                nombre='${nombre}',
                apellido='${apellido}',
                alias='${alias}',
                descripción_larga='${desc}',
                contraseña='${contraseña}',
                fecha_nacimiento='${fecha}',
                correo='${correo}',
                genero='${genero}',
                foto='${foto}'
            WHERE id=${id}`;

    console.log(sql);

    let URL = 'assets/php/servidor.php?peticion=ModificarUsuario';
    URL += "&sql=" + sql;
    URL += "&devolucion="  + devolucion;
    fetch(URL)
        .then ((response) => response.json())
        .then((data) => {
            console.log("crud asiganaturas ", data); 
            fMostrarPerfil(id);
})
}


