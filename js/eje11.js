//Ejercicio 11

function ventas(montoVenta) {
    let comisionVenta = 0;
    if(montoVenta >=10000){
        comisionVenta = montoVenta * (15/100);
        document.write("Sueldo total: ", sueldoMensual + comisionVenta);
    
    }else if(montoVenta>=5000 && montoVenta<10000){
        comisionVenta = montoVenta * (5/100);
        document.write("Sueldo total: ", sueldoMensual + comisionVenta);
    
    }else if(montoVenta<5000){
        document.write("Sueldo total: ", sueldoMensual);
    }
}

let sueldoMensual = parseInt(prompt("Ingrese el sueldo mensual del vendedor")),
    montoVenta = parseInt(prompt("Ingrese el monto de venta del vendedor"));

ventas(montoVenta);

