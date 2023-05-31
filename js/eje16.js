//Ejercicio 16

function numeros(numero) {
    let suma;
    suma = numero * (numero+1)/2;
    document.write("la suma es " + suma);
}
let numero = parseInt(prompt("Ingrese un numero del 1 al 9"));

numeros(numero);