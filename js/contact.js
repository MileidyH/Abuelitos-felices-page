function enviar(){
    var nombre = document.contact.name.value;
    var correo = document.contact.correo.value;
    var telefono = document.contact.telefono.value;
    var expreCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (nombre=="" || correo=="" || telefono=="") {
        alert("Todos los campos son obligatorios")     
    }else if(!expreCorreo.test(correo)){
        alert('Ingrese un correo válido')
    }else {
        alert("Datos enviados con éxito, ¡Te estaremos contactando!")
        HTMLFormElement.reset()
    }
        
    
}