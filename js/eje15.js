//Ejercicio 15

let numerosNaturales = [];

function seleccionarNumero(n){
    if(n <0){
        return false;
    }
    if(n  <15){
        numerosNaturales.push(n +" Es menor a 15, ");

    }else if(n >50){
        numerosNaturales.push(n+ " Es mayor a 50, ");

    }else if(n >=25 && n<=50){
        numerosNaturales.push(n +" Esta comprendido entre 25 y 50")
    }
return true;

}
while (true) {
  let input = parseInt(prompt("Ingrese un número natural (ingrese un número negativo para terminar):"));

  if (!seleccionarNumero(input)) {
    break;
  }
}

document.write("Números seleccionados:");
for (var i = 0; i < numerosNaturales.length; i++) {
  document.write(numerosNaturales[i]);
}