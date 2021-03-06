'use strict';
// Ejercicio 3. Pide datos al usuario y crea un array insertando los datos al principio. Los datos tienen que ser de tipo numérico, si introduce uno que no sea de tipo numérico dejarás de pedir datos (puedes utilizar isNaN(caracter) que te devuelve un booleano indicando si el carácter definido es un número o no). Si estamos ante un número de vez que le pedimos el dato par,  utiliza el operador + para convertir a número, si no conviértelo mediante el constructor Number(). Seguidamente,ordena el array de mayor a menor conservando del array original sólo los múltiplos de 3 (usa el método filter). Muestra ambos por pantalla.

let dato, numeroVeces;
let datos = new Array();
do {
    numeroVeces++;
    if (numeroVeces % 2 == 0) 
        dato = +prompt("Escribe un número:"); 
    else 
        dato = Number(prompt("Escribe un número:"));
    
    if(isNaN(dato) == false)
        datos.unshift(dato);
    
} while (isNaN(dato) == false);


let datosOrdenados = datos.sort((a,b) => b-a);
let datosMultiplos3 = datos.filter(multiplos3 => multiplos3 % 3 == 0);

console.log(datosOrdenados);
console.log(datosMultiplos3);
