//Ejercicio 18

let notas = [5,6,7,8,9,10,7,7,9,10,5,5];

function arr(notas) {
    let aprobadas = 0;
    let desaprobadas = 0;
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >=8 && [i]<=10) {
            aprobadas++;
        } else {
            desaprobadas++;
        }
        suma += notas[i];
    }

    let promedio = suma / notas.length;
    let promedioAprobadas = (suma - (desaprobadas * 10)) / aprobadas;
    let promedioDesaprobadas = (suma - (aprobadas * 10)) / desaprobadas;

    document.write("Notas aprobadas: " + aprobadas);
    document.write("<br>");
    document.write("Notas desaprobadas: " + desaprobadas);
    document.write("<br>");
    document.write("Promedio de notas: "+ promedio);
    document.write("<br>");
    document.write("Promedio de notas aprobadas: " + promedioAprobadas);
    document.write("<br>");
    document.write("Promedio de notas desaprobadas: " + promedioDesaprobadas);
    document.write("<br>");
}

arr(notas);

