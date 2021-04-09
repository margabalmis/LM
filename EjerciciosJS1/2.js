'use strict';
// Ejercicio 2. Crea una función llamada verAsignaturas. Esta función va a recibir un número indeterminado de alumnos. De cada alumno va a recibir un array. En ese array estará almacenado el nombre, el curso y las asignaturas de las que está matriculado (una asignatura en cada posición). Saca por pantalla el nombre del alumno – el curso – asignaturas:  y el nombre de las asignaturas separadas por un /. Si el número de datos de alumnos es 0 debes mostrar la cadena “No hay datos para mostrar”.Debes usar el operador rest, la desestructuración de arrays y  el código lo más compacto posible.

function verAsignaturas (...alumnos) {

    for (let index = 0; index < alumnos.length; index++) {
        if(alumnos[index].length == 0)
            console.log("No hay datos para mostrar");
        else{
            console.log(alumnos[index].join('/'));
        }
    }
}

verAsignaturas(["Sara","DAMA", "Programacion", "ED"],["Irene","DAMB", "LM", "ED"],["Luis","DAMA", "Programacion", "FOL"], ["Lucia","DAMA", "LM", "SI", "ED"], []);
verAsignaturas([]);
