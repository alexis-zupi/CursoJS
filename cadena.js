//CONCATENAR CADENAS
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);



//las expresiones se evaluan de izq a derecha, si primero esta el string suma varios string.. Si primero esta un num, suma.
var x = nombre + 2 + 4;
console.log(x);


x = nombre + (2 + 4);
console.log(x);


x = 2 + 4 + nombre;
console.log(x);




