//Ejercicio 5

function diaMinuto(minutos) {
    let dias = 0,
    horas = 0;

    if(minutos>0){
        dias = minutos / 1440;
        horas = minutos / 60;

        document.write("Dias:", dias);
        document.write("<br>");
        document.write("Horas:", horas);
        document.write("<br>");
        document.write("Minutos:", minutos);
    }
}

let minutos = parseFloat(prompt("Ingrese el tiempo en minutos"));

diaMinuto(minutos);
