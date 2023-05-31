//Ejercicio 14

function descuentoTienda(monto) {
    let descuento=0;

    if(monto>=500){
        descuento = monto * (30/100);
        document.write("Monto: ", monto);
        document.write("<br>");
        document.write("Su monto total con 30% de descuento es de: ", monto-descuento);
        document.write("<br>");

    }else if(monto<500 && monto>=200){
        document.write("Monto: ", monto);
        document.write("<br>");
        descuento = monto * (20/100);
        document.write("Su monto total con 20% de descuento es de: ", monto-descuento);

    }else if(monto<200 && monto>=100){
        document.write("Monto: ", monto);
        document.write("<br>");
        descuento = monto * (20/100);
        document.write("Su monto total con 10% de descuento es de: ", monto-descuento);

    }else{
        document.write("Su monto total no acredita a un descuento por lo tanto");
        document.write("<br>");
        document.write("Su moto total es de: ", monto);
    }
}

document.write("TIENDAS PATITO");
document.write("<br>");
document.write("Ofertas");
document.write("<br>");

let monto = parseInt(prompt("Ingrese el monto total de la compra"));

descuentoTienda(monto);
