//Ejercicio 13

function ecuacionCuadratica(a, b, c) {
    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        document.write("Existen 2 raices imaginarias");
        return;
    }

    const raizDiscriminante = Math.sqrt(discriminante);
    const x1 = (-b + raizDiscriminante) / (2 * a);
    const x2 = (-b - raizDiscriminante) / (2 * a);

    document.write("Las raíces de la ecuación son:");
    document.write("<br>");
    document.write("x1 =", x1);
    document.write("<br>");
    document.write("x2 =", x2);
}

let a = parseInt(prompt("Ingresa el valor de a")),
    b = parseInt(prompt("Ingresa el valor de b")),
    c = parseInt(prompt("Ingresa el valor de c"));

ecuacionCuadratica(a,b,c);