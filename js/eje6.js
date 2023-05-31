//Ejercicio 6

function horas(horasTrabajadas2, tarifasPago) {
    let salario = horasTrabajadas2*tarifasPago;
    document.write("El salario es : "+ salario);
}
let horasTrabajadas2 = parseFloat(prompt("Ingrese las horas trabajas"));
let tarifasPago =parseFloat(prompt("Ingrese la tarifa de pago"));

horas(horasTrabajadas2, tarifasPago);


