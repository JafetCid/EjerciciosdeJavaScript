//Ejercicio 24

let palabra =prompt("Ingrese una palabra : ");
let vocales =["a","e","i","o","u"];
let vocalesEncontradas=[];

function vocal(palabra,vocales) {
    for(let i=0; i<palabra.length;i++){
        if(vocales.includes(palabra[i])){
            vocalesEncontradas.push(palabra[i]);
        }
    }
    if(vocalesEncontradas.length>0){
    
        document.write(`Las vocales encontradas en la palabra ${palabra} son : `+ vocalesEncontradas.join(", "));
    
    }else{
        document.write("No se encontraron vocales en la palabra: " , palabra);
    }
}

vocal(palabra, vocales);