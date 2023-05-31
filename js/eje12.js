//Ejercicio 12

const clavesCorrectas = [
    "TIENES",
    "QUE SER",
    "INVITADO",
    "PARA",
    "INGRESAR"
    ];

const clavesIngresadas = ["tienes", "que ser", "invitado", "para", "ingresar"];
const resultado = verificarClaves(clavesIngresadas);
document.write(resultado);

function verificarClaves(clavesIngresadas) {
    
    if (clavesIngresadas.length !== clavesCorrectas.length) {
        return "TE EQUIVOCASTE DE FIESTA";
    }
    
    for (let i = 0; i < clavesCorrectas.length; i++) {
        if (clavesIngresadas[i] !== clavesCorrectas[i]) {
            return "TE EQUIVOCASTE DE FIESTA";
        }
    }   
    return "BIENVENIDO A LA FIESTA";
}
