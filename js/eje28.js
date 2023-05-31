//Ejercicio 28

let personas=[
    {"edad":25,"sexo": "masculino"},{"edad":25,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":25,"sexo": "masculino"},{"edad":25,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":25,"sexo": "masculino"},{"edad":25,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"},{"edad":13,"sexo": "femenino"},
    {"edad":23,"sexo": "masculino"},{"edad":15,"sexo": "femenino"}];
    
let masculinoMay=0;
let femeninoMen=0;
let mayores = 0;
let menores= 0;

function arregloPer(personas) {
    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        if (persona["sexo"] == "masculino") {
            if (persona["edad"] >= 18) {
                masculinoMay += 1;
            }
        } else if(persona["sexo"]=="femenino") {
            if(persona["edad"]<18) {
                femeninoMen += 1;
            }
        }
        if (persona["edad"] >= 18) {
            mayores += 1;
        } else {
            menores += 1;
        }
    }            
    let porcentaje_mayores = (mayores / personas.length) * 100;
    let porcentaje_menores = (menores / personas.length) * 100;
    document.write("Cantidad de personas masculinas mayores de edad:", masculinoMay);
    document.write("<br>");
    document.write("<br>");
    document.write("Cantidad de personas femeninas menores de edad:", femeninoMen);
    document.write("<br>");
    document.write("<br>");
    document.write("Cantidad de personas mayores:", mayores);
    document.write("<br>");
    document.write("<br>");
    document.write("Cantidad de personas menores:", menores);
    document.write("<br>");
    document.write("<br>");
    document.write("Porcentaje de personas mayores:", porcentaje_mayores, "%");
    document.write("<br>");
    document.write("<br>");
    document.write("Porcentaje de personas menores:", porcentaje_menores, "%");
    document.write("<br>");
    document.write("<br>"); 
}


arregloPer(personas);