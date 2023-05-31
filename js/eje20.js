//Ejercicio 20

let numeros =[2,3,4,1,4,412,124,142,415,667,767,23,432,423,-3,-8,-1,23,12,24 
            -2,-10,23,45,32,23,52,123,.122,-12,124,-32,-35,-23,90,88,-99,20,43,
            22,34,35,-32,123,234,43,5,-120,400,32,8]
                
// document.write(numeros);
function arreglo(numeros) {
    let positivos = numeros.filter((numeros) => numeros>0 )
    let negativos = numeros.filter((numeros)=> numeros <0);
    let pares = numeros.filter(function(numeros){
        return numeros %2 ==0;
    })
    let impares = numeros.filter(function(numeros){
        return numeros %2 ==1;
    })
    document.write("Negativos");
    document.write("<br>");
    document.write(negativos);
    document.write("<br>");
    document.write("Positivos");
    document.write("<br>");
    document.write(positivos);
    document.write("<br>");
    document.write("Impares");
    document.write("<br>");
    document.write(impares);
    document.write("<br>");
    document.write("Pares");
    document.write("<br>");
    document.write(pares);
}

arreglo(numeros);