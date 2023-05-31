//Ejercicio 10

function Triangulo(a,b,c) {
    if(a+b >c && a+c >b && b+c >a){
        if(a === b && b===c){
            document.write("Usted a formando un triangulo equilatero");
        }else if(a=== b || b === c || c === a){
            document.write("Usted a formando un triangulo isoseles");
        }else{
            document.write("Usted a formando un triangulo escaleno");
        }
    }else{
        document.write("Usted no a formando un triangulo ");
    }
}
let a = parseInt(prompt("Ingrese el primer valor"));
let b = parseInt(prompt("Ingrese su segundo valor"));
let c= parseInt(prompt("Ingrese su tercer valor"));

// Triangulo (a,b,c);

document.querySelector(Triangulo (a,b,c));
