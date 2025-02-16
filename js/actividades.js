var act1 = "Por hacer"
var act2 = "Por hacer"
var act3 = "Por hacer"
var act4 = "Por hacer"
var act5 = "Por hacer"
var act6 = "Por hacer"
var act7 = "Por hacer"
var act8 = "Por hacer"

function validar(){
        let parrafo =document.getElementById("check");
        let btnDesc = document.getElementById("btnFinalizar")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act1 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}


function validar1(){
        let parrafo = document.getElementById("check1");
        let btnDesc = document.getElementById("btnFinalizar1")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act2 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
        
}

function validar2(){
        let parrafo = document.getElementById("check2");
        let btnDesc = document.getElementById("btnFinalizar2")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act3 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function validar3(){
        let parrafo = document.getElementById("check3");
        let btnDesc = document.getElementById("btnFinalizar3")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act4 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function validar4(){
        let parrafo = document.getElementById("check4");
        let btnDesc = document.getElementById("btnFinalizar4")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act5 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function validar5(){
        let parrafo = document.getElementById("check5");
        let btnDesc = document.getElementById("btnFinalizar5")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act6 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function validar6(){
        let parrafo = document.getElementById("check6");
        let btnDesc = document.getElementById("btnFinalizar6")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act7 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function validar7(){
        let parrafo = document.getElementById("check7");
        let btnDesc = document.getElementById("btnFinalizar7")
        let confirmar = confirm("¿Desea finalizar la actividad?")
        if(confirmar){
                parrafo.textContent = "Finalizado";
                parrafo.style.color ="green";
                btnDesc.disabled = true;
                btnDesc.style.background = "grey";
                btnDesc.style.cursor = "default"
                act8 = "Hecho"
        }else{
                alert("Envío cancelado!")
        }
}

function finalizar(){
        if(act1 == "Hecho" && act2 == "Hecho" && act3 == "Hecho" && act4 == "Hecho" && act5 == "Hecho" && act6 == "Hecho" && act7 == "Hecho" && act8 == "Hecho"){
                window.location = "empleado.html"
        }else if(act1 == "Por hacer" && act2 == "Por hacer" && act3 == "Por hacer" && act4 == "Por hacer" && act5 == "Por hacer" && act6 == "Por hacer" && act7 == "Por hacer" && act8 == "Por hacer"){
                alert("No hay actividades para enviar!")
        }else{
                var incompleta = confirm("Existen actividades sin finalizar ¿Desea continuar de todas formas?")
                if(incompleta){
                        alert('Actividades enviadas con éxito')
                        window.location = "empleado.html"
                }
        }
        
    }
