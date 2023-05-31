//Ejercicio 2

function Salario(sueldo) {
    if (sueldo<=1000){
        let sueldo2 = sueldo * (10/100);
        sueldo = sueldo - sueldo2;
        document.write("El descuento de sueldo es el 10%");
        document.write("<br>");
        document.write("Su sueldo total es de:",sueldo);

    }else if(sueldo > 1000 && sueldo <=1999){
        let sueldo3 = sueldo * (5/100);
        sueldo = sueldo - sueldo3;
        document.write("El descuento de sueldo es el 5%")
        document.write("<br>");
        document.write("Su sueldo total es de:",sueldo);

    }else {
        let sueldo4 = sueldo * (3/100);
        sueldo = sueldo - sueldo4;
        document.write("El descuento de sueldo es el 3%")
        document.write("<br>");
        document.write("Su sueldo total es de:",sueldo);
    }
}

let s = parseFloat(prompt("Ingrese su sueldo"));

Salario(s);

 