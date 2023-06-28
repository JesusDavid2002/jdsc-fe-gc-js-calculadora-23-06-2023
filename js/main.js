let operadorA;
let operadorB;
let operacion;

// Recoger todos los parametros de la calculadora
let cero = document.getElementById('cero');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');

let decimal = document.getElementById('decimal');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multi = document.getElementById('multi');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let mostrar = document.getElementById('resultado');
let limpiar = document.getElementById('limpiar');

// Metodos de onClick de los números
uno.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "1";
    mostrar.value =mostrar.textContent;
}
dos.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "2";
    mostrar.value = mostrar.textContent;
}
tres.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "3";
    mostrar.value =mostrar.textContent;
}
cuatro.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "4";
    mostrar.value = mostrar.textContent;
}
cinco.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "5";
    mostrar.value = mostrar.textContent;
}
seis.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "6";
    mostrar.value = mostrar.textContent;
}
siete.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "7";
    mostrar.value = mostrar.textContent;
}
ocho.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "8";
    mostrar.value = mostrar.textContent;
}
nueve.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "9";
    mostrar.value = mostrar.textContent;
}
cero.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + "0";
    mostrar.value = mostrar.textContent;
}
decimal.onclick = (e) => {
    mostrar.textContent = mostrar.textContent + ".";
    mostrar.value = mostrar.textContent;
}
// Metodos de onClick de las operaciones
suma.onclick = (e) => {
    operadorA = mostrar.textContent;
    operacion = "+";
    mostrar.value += operacion;
    Limpiar();
}

resta.onclick = (e) => {
    operadorA = mostrar.textContent;
    operacion = "-";
    mostrar.value += operacion;
    Limpiar();
}

multi.onclick = (e) => {
    operadorA = mostrar.textContent;
    operacion = "*";
    mostrar.value += operacion;
    Limpiar();
}

division.onclick = (e) => {
    operadorA = mostrar.textContent;
    operacion = "/";
    mostrar.value += operacion;
    Limpiar();
}

igual.onclick = (e) => {
    operadorB = mostrar.textContent;
    mostrar.value = Resolver();
}

limpiar.onclick = (e)=>{
    Limpiar();
    mostrar.value = "";
}

// Funciones de la calculadora
const Limpiar = () =>{
    mostrar.textContent = "";
}

const Resolver = () =>{
    let valor = 0;
    switch (operacion) {
        case "+":
            valor = parseFloat(operadorA) + parseFloat(operadorB);
            break;
        case "-":
            valor = parseFloat(operadorA) - parseFloat(operadorB);
            break;
        case "*":
            valor = parseFloat(operadorA) * parseFloat(operadorB);
            break;
        case "/":
            valor = parseFloat(operadorA) / parseFloat(operadorB);
            break;
    }
    Limpiar();
    return valor;
}