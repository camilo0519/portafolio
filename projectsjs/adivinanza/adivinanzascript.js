//El Juego selecciona un numero random
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById ("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0

//Accion se ejecuta con el boton chequear
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Introduce un numero valido entre 1 y 100"
        return
    }

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = '!FELICITACIONES! Has adivinado el número'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '!Más Alto, el numero es mayor al que dijiste'
        mensaje.style.color = 'red';

    } else {
         mensaje.textContent = 'Mas bajo, el numero es menor al que dijiste'
        mensaje.style.color = 'red';
    }


        
}

