//Ejercicio 4

function tiempoS() {
    let Tiempo = 123;
    function segundosR(segundos) {
        let S = 60;
        let M = segundos % S;
        return M;
    }
    let M =segundosR(Tiempo);
    document.write("Segundos restantes: " + M);
} 

tiempoS();

