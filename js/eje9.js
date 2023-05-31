//Ejercicio 9

function programasTV(hora) {
    if(hora >= 10 && hora <=12){
        document.write("dibujos animados");
    }else if(hora >= 13 && hora <=16){
        document.write("tele serie");
    }else if(hora >= 16 && hora <=18){
        document.write("novelas repetidas");
    }else if(hora >= 18 && hora <=22){
        document.write("dibujos animados");
    }else if(hora >= 22 && hora <=23){
        document.write("Noticiero");
    }else{
        document.write("No hay programacion");
    }
}
let hora = parseInt(prompt("Que hora es?"));

programasTV(hora);
        
