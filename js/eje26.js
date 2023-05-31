//Ejercicio 26        
        
let jornalMensual = [];
        
while(true){
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas (0 para salir):"));
    let turno = 0,
        tarifaHoraD = 10,
        tarifaHoraN = 20;
                
    if (horasTrabajadas === 0) {
        break;
    }else if(horasTrabajadas<15){
        turno = parseInt(prompt("Elija su turno 1.-Diurno, 2.-Nocturno"));

        if(turno ==  1){

            document.write("<br>");
            document.write("Turno: Diurno");
            document.write("<br>");
            document.write(`Usted esta despedido ya que sus ${horasTrabajadas} horas son menores que 15`);
            document.write("<br>");
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraD);
            document.write("<br>");

        }else if(turno == 2){
            document.write("<br>");
            document.write("Turno: Nocturno");
            document.write("<br>");
            document.write(`Usted esta despedido ya que sus ${horasTrabajadas} horas son menores que 15`);
            document.write("<br>");
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraN);
            document.write("<br>");
        }
                
    }else{
                
        turno = parseInt(prompt("Solo se permite 1 o 2\
                Elija su turno 1.-Diurno, 2.-Nocturno"));
        if(turno == 1){
            document.write("<br>");
            document.write("Turno: Diurno");
            document.write("<br>");
            document.write(`Horas trabajadas: ${horasTrabajadas}`);
            document.write("<br>");
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraD);
            document.write("<br>");

        }else if(turno == 2){
            document.write("<br>");
            document.write("Turno: Nocturno");
            document.write("<br>");
            document.write(`Horas trabajadas: ${horasTrabajadas}`);
            document.write("<br>");
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraN);
            document.write("<br>");
        }
    }

    jornalMensual.push(horasTrabajadas);

    function sumarArreglo(jornalMensual) {
        let suma = 0;
        for (let i = 0; i < jornalMensual.length; i++) {
            suma += jornalMensual[i];
        }
        return suma;
    }
    let resultado = sumarArreglo(jornalMensual);
    document.write("<br>");
    document.write("Jornal mensual: ",resultado);
    document.write("<br>");
        
}