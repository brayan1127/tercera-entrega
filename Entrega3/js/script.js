let pantalla = "";

// Funciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}

// Operaciones de la calculadora
function agregarNumero(numero) {
    pantalla += numero;
    actualizarPantalla();
}

function seleccionarOperacion(operacion) {
    pantalla += operacion;
    actualizarPantalla();
}

function limpiar() {
    pantalla = "";
    actualizarPantalla();
}

function borrar() {
    pantalla = pantalla.slice(0, -1);
    actualizarPantalla();
}

function calcular() {
    try {
        pantalla = eval(pantalla).toString();
    } catch {
        pantalla = "Error";
    }
    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById("resultado").value = pantalla;
}

// Funciones extras
function cuadrado() {
    pantalla = multiplicar(parseFloat(pantalla), parseFloat(pantalla)).toString();
    actualizarPantalla();
}

function calcularPromedio() {
    let a = parseFloat(prompt("Ingresa el primer número:"));
    let b = parseFloat(prompt("Ingresa el segundo número:"));
    let c = parseFloat(prompt("Ingresa el tercer número:"));
    pantalla = (sumar(sumar(a, b), c) / 3).toString();
    actualizarPantalla();
}

function calcularPorcentaje() {
    let porcentaje = parseFloat(prompt("Porcentaje a calcular:"));
    pantalla = dividir(multiplicar(parseFloat(pantalla), porcentaje), 100).toString();
    actualizarPantalla();
}

function generarPorcentaje() {
    let total = parseFloat(prompt("Ingresa el total:"));
    pantalla = dividir(multiplicar(parseFloat(pantalla), 100), total).toString();
    actualizarPantalla();
}

function verificarParidad() {
    let num = parseFloat(pantalla);
    pantalla = num % 2 === 0 ? "Par" : "Impar";
    actualizarPantalla();
}

function sumarSecuencia() {
    let inicio = parseInt(prompt("Número inicial:"));
    let fin = parseInt(prompt("Número final:"));
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    pantalla = suma.toString();
    actualizarPantalla();
}
