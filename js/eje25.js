//Ejercicio 25

function aleatorio() {
  let numerosAleatorios = [];
  for (let i = 0; i < 2500; i++) {
    numerosAleatorios[i] = Math.floor(Math.random() * 1000) + 1;
  }

  let numeroMenor = numerosAleatorios[0];
  let indiceNumeroMenor = 0;
  let numeroMayor = numerosAleatorios[0];
  let indiceNumeroMayor = 0;

  for (let i = 1; i < numerosAleatorios.length; i++) {
    if (numerosAleatorios[i] > numeroMayor) {
      numeroMayor = numerosAleatorios[i];
      indiceNumeroMayor = i;
    }else if(numerosAleatorios[i]<numeroMenor){
      numeroMenor = numerosAleatorios[i];
      indiceNumeroMenor = i;
    }
  }
  // document.write(numerosAleatorios);
  document.write("La cuenta " + indiceNumeroMenor+ " posee la cantidad de : " + numeroMenor);
  document.write("<br>")
  document.write("La cuenta " + indiceNumeroMayor+ " posee la cantidad de : " + numeroMayor);
}

aleatorio();