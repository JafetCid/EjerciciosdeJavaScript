//Ejercicio 8

function edadG(edad) {
    if(edad > 0 && edad <=10){
        document.write("Eres un Niño");
    
    }else if(edad>=11 && edad<=14){
        document.write("Eres un Puberto");
    
    }else if(edad>=15 && edad<=18){
        document.write("Eres un Adolecente");
    
    }else if(edad>=19 && edad<=25){
        document.write("Eres un Joven");
    
    }else if(edad>=26 && edad<=65){
        document.write("Eres un Adulto");
                
    }else{
        document.write("Eres un Anciano");
    }
}
let edad = parseFloat(prompt("Ingrese su edad"));

edadG(edad);

