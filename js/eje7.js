//Ejericio 7

let articulo ="Pantalon";
let cantidad2 = parseFloat(prompt("Ingresa la cantidad deseada "));
let precio = 20.00;

function Factura(articulo,cantidad2,precio) {
    let iva = 0.15;
    let descuento = 0.05;

    let precioNeto = precio * cantidad2;
    let precioIva = precioNeto + (precioNeto*iva);
    let total = precioIva;

    if (precioIva > 50.00) {
        let descuentoAplicado = precioIva * descuento;
            total -= descuentoAplicado;
    }

    document.write("Ticket de compra ");
    document.write("<br>");
    document.write("Articulo: "+ articulo);
    document.write("<br>");
    document.write("Cantidad: " + cantidad2);
    document.write("<br>");
    document.write("Precio por Unidad: " + precio);
    document.write("<br>");
    document.write("subtotal: " + precioNeto.toFixed(2));
    document.write("<br>");
    document.write("Iva (" + (iva * 100) + "%): " + (precioNeto*iva).toFixed(2));

    if (precioIva > 50.00){
        document.write("Descuento (" + (descuento * 100) + "%): " + descuentoAplicado.toFixed(2));
    }
    document.write("Total a pagar: " + total.toFixed(2));
}

document.querySelector(Factura(articulo,cantidad2,precio));

// Factura(articulo,cantidad2,precio); 

