'use strict';
// Ejercicio 1. Crea una función que reciba una cadena,un booleano, una función y un array numérico por parámetro. Si el tipo de algún parámetro no es el esperado debes imprimir un error (suponemos que si nos pasan un array sí que en todas sus posiciones habrá un dato numérico). Si es lo esperado, si el valor del booleano es true, recorre el array con la estructura foreach. Si el producto de todos los ítems en mayor a 100 entonces comprueba si en la cadena hay alguna “a”. Si hay alguna a saca por pantalla un mensaje diciendo que la “a” no está permitida. Si no la hay, saca por pantalla un mensaje diciendo, “Muy bien no has usado la ‘a’”. En caso de que el producto del array fuera menor de 100 informa al usuario: “El resultado de tu array es insuficiente para comprobar la cadena”. Si el valor del booleano es false entonces ejecuta la función recibida por parámetro.


let comprobarTipo = (datos) =>
{ 
    let tipo = ['string', 'boolean', 'function'];
    let datosCorrectos;
    let mensaje = "Los datos no son correctos";

    if(Array.isArray(datos[3]))
    {
        for (let index = 0; index < tipo.length; index++) {

            if (typeof datos[index] == tipo[index])
                datosCorrectos = true;
            else
                console.log(mensaje);
        }
    }
    else
        console.log(mensaje);
    return datosCorrectos;
}
function Ejercicio1(...datos) {
    
    let total;

    if(comprobarTipo(datos) == true) {
        if (datos[1] == true)
            datos[3].forEach((elemento) => console.log(elemento));
        if (datos[1] == false)
            let funcion = datos[2];

        total = datos[3].forEach(elemento => total *= elemento);

        if (total > 100)
            conlole.log (datos[0].indexOf('a') < 0 ? "La 'a' no esta permitida" 
                                                : "Muy bien no has usado la 'a'");
        if (total < 100)
            console.log("El resultado de tu array es insuficiente para comprobar la cadena");
    }
}
Ejercicio1();
Ejercicio1("hola mundo", true, ()=>{alert("Se acabo el juego")},[100,2,3,4,5,6])
Ejercicio1("aaaaaaaa", false, ()=>{alert("Se acabo el juego")}, [100,2,3,4,5,6])
Ejercicio1("si", true,  ()=>{alert("Se acabo el juego")}, [10,2,3,4,5,6])
