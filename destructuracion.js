let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder:'Regeneración',
    getNombre: function(){
        return `${this.nombre}${this.apellido} - poder:${this.poder}`;
    } 
};

// Invocar una funcion
console.log(deadpool. getNombre());
//Obtener los atributos uno por uno 
let nom= deadpool.nombre;
let ape= deadpool.apellido;
let pod= deadpool.poder;
console.log( nom, ape,pod);

// Reestructuracion 
let {nombre, apellido,poder} = deadpool;
console.log(nombre , apellido, poder);
