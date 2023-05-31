//Ejercicio 3

function descuentos(cantidad) {
    let descuento;
    if(cantidad >100){
        descuento= cantidad *0.1;
    }else{
        descuento =cantidad *0.02;
    }
    document.write("Cantidad ingresada: ", cantidad);
    document.write("<br>");
    document.write("El descuento es : "+ descuento);
}
let cantidad =parseFloat(prompt("Ingrese la cantidad"));

descuentos(cantidad);
