// Ejercicio 17

function sumaSalarios() {
    const salarios = [];
    let salario = parseFloat(prompt("Ingrese el salario de la persona 1 (ingrese 0 para terminar):"));

    while (salario !== 0) {
        salarios.push(salario);
        salario = parseFloat(prompt(`Ingrese el salario de la persona ${salarios.length + 1} 
        (ingrese 0 para terminar):`));
    }

    let sumaSalarios = 0;
    for (let i = 0; i < salarios.length; i++) {
    sumaSalarios += salarios[i];
    }

    document.write("La suma de los salarios ingresados es de: ", sumaSalarios);
    // document.write("<br>")
    // document.write(salarios);
}

sumaSalarios();

