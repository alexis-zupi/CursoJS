//Tipo de Dato STRING
var nombre = "Juancito";
console.log(typeof nombre);

nombre = 12.5;
console.log(typeof nombre);


//Tipo de Dato NUMERICO
var numero = 1000;
console.log(numero);



//Tipo de Dato OBJECT (objeto)
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "225563477"
}
console.log(typeof objeto); 



//Tipo de Dato BOOLEAN (true, false)
var bandera = true;
console.log(typeof bandera);



//Tipo de Dato FUNCTION (reulizar lineas de codigo ya escritas)
function miFuncion(){}
console.log(miFuncion); 

function miFuncion(){}
console.log(typeof miFuncion); 



//Tipo de Dato SYMBOL
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);



//Tipo de CLASE, es una funcion
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);



//Tipo de Dato UNDEFINED (por defecto)
var x;
console.log(x);



//null = Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);



//ARRAY (arreglos)
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);



//valor vacias
var z = "";
console.log(z); 
console.log(typeof z);