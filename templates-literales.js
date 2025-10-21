let nombre = 'Deadpool';
let real = 'Wade Winston';
console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`
// Demostrar que es lo mismo
console.log( nombreCompleto === nombreTemplate)

// retorno de una funcion
function getNombre(){
    return `${nombre} ${real}`;
}
//Uso de una funcion dentro del template literal 
console.log(`El nombre de ${getNombre()}`);