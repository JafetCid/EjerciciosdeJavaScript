//Ejercicio 19

function sumas(numero) {
    let sumar = sumarNumero(numero);

    function sumarNumero(numero) {
        let suma = 0;
        for (let digito of numero.toString()) {
            suma += parseInt(digito);
        }
        return suma;
    }

    document.write(`La suma de los dígitos de ${numero} es: ${sumar}`);
}

let numero = parseInt(prompt("Introduce un numero"));

sumas(numero);

