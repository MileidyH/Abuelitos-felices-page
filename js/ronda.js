var rnd1 = "Por hacer"
var rnd2 = "Por hacer"
var rnd3 = "Por hacer"
var rnd4 = "Por hacer"
var rnd5 = "Por hacer"
var rnd6 = "Por hacer"
var rnd7 = "Por hacer"
var rnd8 = "Por hacer"
function enviar() {
    var estado = document.getElementById('estado')
    var btnDesc = document.getElementById('btnFinalizar')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd1 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}

function enviar1() {
    var estado = document.getElementById('estado1')
    var btnDesc = document.getElementById('btnFinalizar1')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd2 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}
function enviar2() {
    var estado = document.getElementById('estado2')
    var btnDesc = document.getElementById('btnFinalizar2')
    
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd3 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}
function enviar3() {
    var estado = document.getElementById('estado3')
    var btnDesc = document.getElementById('btnFinalizar3')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd4 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}
function enviar4() {
    var estado = document.getElementById('estado4')
    var btnDesc = document.getElementById('btnFinalizar4')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd5 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}
function enviar5() {
    var estado = document.getElementById('estado5')
    var btnDesc = document.getElementById('btnFinalizar5')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd6 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}
function enviar6() {
    var estado = document.getElementById('estado6')
    var btnDesc = document.getElementById('btnFinalizar6')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd7 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}

function enviar7() {
    var estado = document.getElementById('estado7')
    var btnDesc = document.getElementById('btnFinalizar7')
    var confirmar = confirm('¿Desea finalizar esta ronda?')
    if (confirmar) {
        estado.textContent = "Finalizado"
        estado.style.color = "green"
        btnDesc.disabled = true;
        btnDesc.style.background = "Gray"
        btnDesc.style.cursor = "default"
        rnd8 = "Hecho"
    } else {
        alert("Modificación cancelada.");
    }
}

function  finalizar(){
    if(rnd1 == "Hecho" && rnd2 == "Hecho" && rnd3 == "Hecho" && rnd4 == "Hecho" && rnd5 == "Hecho" && rnd6 == "Hecho" && rnd7 == "Hecho" && rnd8 == "Hecho"){
        window.location = "empleado.html"
    }else if(rnd1 == "Por hacer" && rnd2 == "Por hacer" && rnd3 == "Por hacer" && rnd4 == "Por hacer" && rnd5 == "Por hacer" && rnd6 == "Por hacer" && rnd7 == "Por hacer" && rnd8 == "Por hacer"){
        alert('No hay rondas por enviar')            
        }else{
            var incompleta = confirm('Hay rondas sin finalizar ¿Desea enviar de todas formas?')
            if(incompleta){
            window.location = "empleado.html"
        }
    }
}

/*function finalizar() {
    if (opcion == 0) {
        var enviar = parseInt(prompt('Hay rondas sin finalizar ¿desea enviar de todas formas? 1.Si 2.No'))
        if (enviar == 1) {
            alert('Rondas enviadas con éxito')
            window.location = "empleado.html"
        }
    }
}*/