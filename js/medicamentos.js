var med1 = "Por hacer"
var med2 = "Por hacer"
var med3 = "Por hacer"
var med4 = "Por hacer"

function enviar0() {

    var estado = document.getElementById("1estado")
    var btnDesc = document.getElementById('1btnFinalizar')
    var confirmar = confirm('¿Desea confirmar la administración de  medicamentos?')
    if (confirmar) {
        estado.textContent = "Realizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        med1 = "Hecho"
    }
}

function enviar2() {

    var estado = document.getElementById("estado2")
    var btnDesc = document.getElementById('btnFinalizar2')
    var confirmar = confirm('¿Desea confirmar la administración de  medicamentos?')
    if (confirmar) {
        estado.textContent = "Realizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        med2 = "Hecho"
    }
}
function enviar3() {

    var estado = document.getElementById("estado3")
    var btnDesc = document.getElementById('btnFinalizar3')
    var confirmar = confirm('¿Desea confirmar la administración de  medicamentos?')
    if (confirmar) {
        estado.textContent = "Realizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        med3 = "Hecho"
    }
}
function enviar4() {

    var estado = document.getElementById("estado4")
    var btnDesc = document.getElementById('btnFinalizar4')
    var confirmar = confirm('¿Desea confirmar la administración de  medicamentos?')
    if (confirmar) {
        estado.textContent = "Realizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        med4 = "Hecho"
    }
}
                        
function finalizar1(){
    if(med1 == "Hecho" && med2 == "Hecho" && med3 == "Hecho" && med4 == "Hecho"){
        alert('Administracion realizada  con éxito')
        window.location = "medicamentos.html"
    }else if(med1 == "Por hacer" && med2 == "Por hacer" && med3 == "Por hacer" && med4 == "Por hacer"){
        alert('No hay medicamentos administrados')
    }else{
        var mediSuministrados = confirm('No ha suministrado el total de medicamentos ¿Desea enviar de todas formas?')
        if(mediSuministrados){
            window.location = "medicamentos.html"
        }
    }
}

                            

