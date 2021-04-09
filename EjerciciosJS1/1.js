'use strict';
// Ejercicio 1. Crea una función que reciba una cadena,un booleano, una función y un array numérico por parámetro. Si el tipo de algún parámetro no es el esperado debes imprimir un error (suponemos que si nos pasan un array sí que en todas sus posiciones habrá un dato numérico). Si es lo esperado, si el valor del booleano es true, recorre el array con la estructura foreach. Si el producto de todos los ítems en mayor a 100 entonces comprueba si en la cadena hay alguna “a”. Si hay alguna a saca por pantalla un mensaje diciendo que la “a” no está permitida. Si no la hay, saca por pantalla un mensaje diciendo, “Muy bien no has usado la ‘a’”. En caso de que el producto del array fuera menor de 100 informa al usuario: “El resultado de tu array es insuficiente para comprobar la cadena”. Si el valor del booleano es false entonces ejecuta la función recibida por parámetro.


function multiplicarElementos (array){
    let total = 0; /*Te dará siempre 0 porque la variable la inicializas a 0, y 0 * número siempre es igual a 0*/

    array.forEach((elemento) => {total *= elemento});
    return total;
}

/*Para saber si es un array usa isArray()*/
function comprobarTipo (datos){
        
    let tipo = ['string', 'boolean', 'function', 'number'];
    
    for (let index = 0; index < datos.length; index++) {
        
        if (typeof datos[index] == tipo[index])
            return true;
        else
            console.log("El dato " + datos[index] + " no es correcto."); 
    }
}
/*No hace falta que pongas tantos módulos (funciones), al final aumentas la complejidad y realmente en este caso no es necesario*/
function Ejercicio1(...datos) {

    let total = 0;

    if(comprobarTipo(datos) == true) {
        if (datos[1] === true)
            total = multiplicarElementos(datos[3]);
        if (datos[1] === true)
            datos[2];
        if (total > 100)
            conlole.log (datos[0].indexOf('a') < 0 ? "La 'a' no esta permitida" 
                                                    : "Muy bien no has usado la 'a'");
        if (total < 100)
            console.log("El resultado de tu array es insuficiente para comprobar la cadena");
    }
}
Ejercicio1("hola mundo", true, [1,2,3,4,5,6], ()=>{alert("Se acabo el juego")})
Ejercicio1("si", false, [10,2,3,4,5,6], ()=>{alert("Se acabo el juego")})
Ejercicio1("si", true, [10,2,3,4,5,6], ()=>{alert("Se acabo el juego")})
