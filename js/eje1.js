// Ejercicio 1

function horasTrabajo(horasTrabajadas) {
    let tarifaPagoHora = 10,
    horasNormales = 40,
    horasExtra = 0;

    if(horasTrabajadas>40){
        let tarifaPagoHoraExtra = tarifaPagoHora +(tarifaPagoHora * (50/100));
        // tarifaPagoHora = tarifaPagoHora + tarifaPagoHoraExtra;
        horasExtra = horasTrabajadas - horasNormales;
        let pagoHorasExtra = horasExtra * tarifaPagoHoraExtra;

        document.write("Horas trabajadas: ", horasTrabajadas);
        document.write("<br>");
        document.write("Horas extra: ", horasExtra);
        document.write("<br>");
        document.write("Pago por las horas extra: ", pagoHorasExtra);
        document.write("<br>");
        document.write("Salario total: ", pagoHorasExtra + (horasNormales * tarifaPagoHora) );  
    }else{
        document.write("Horas trabajadas: ", horasTrabajadas);
        document.write("<br>");
        document.write("Salario total: ", horasTrabajadas * tarifaPagoHora);
    }

    // document.write("Salario total: ", horasTrabajadas * tarifaPagoHora);
}
let horasTrabajadas = parseFloat(prompt("Ingrese sus horas de trabajo"));

horasTrabajo(horasTrabajadas);


