// Declaración de variables
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 0;
const numeroMaximo = 10;

// Inicialización del juego
condicionesIniciales();

// Funciones

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario < numeroSecreto) {
        asignarTextoElemento('p', "El número secreto es mayor");
        limpiarCaja();
    } else {
        asignarTextoElemento('p', "El número secreto es menor");
        limpiarCaja();
    }
    intentos++;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //console.log(numeroGenerado);
   
    
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles. Reinicie la página.');
        
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            //console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto);
}
