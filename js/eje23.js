//Ejercicio 23

function sumaDeN() {
    let suma =0;
    let pares =1;
    for(let i=20; i <=400;i++){
        if(i % 2 ===0){
            suma+=i
            pares+=i
        }
    }
    document.write("La suma de los números pares es: ", suma);
    document.write("<br>");
    document.write("<br>");
    document.write("El producto de los números pares es: ", pares);
}

sumaDeN();