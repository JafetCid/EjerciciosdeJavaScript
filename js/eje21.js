//Ejercicio 21

let numero= parseInt(prompt("Inserte el número"));
function factorial(numeroX){
    
    if(numeroX === 0 || numeroX === 1 ){
        return 1;
    }
    else{
        return numeroX * factorial(numeroX - 1);
    }
}

if(numero < 0){
    document.write("El numero debe ser positivo");

}else{
    document.write("El factorial de : " + numero + " es " + factorial(numero));

}