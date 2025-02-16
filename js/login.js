


function validarPassword(){
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if(usuario == "" || password == ""){
        alert('Todos los campos son obligatorios')
    }else if(usuario =='admin1' || 'admin2'){
    if(password == '123456'){
        window.location = "empleado.html" 
        alert('Bienvenido '+usuario)
    }else{
        alert('Usuario o clave incorrecta')
    }
    }
}




   


