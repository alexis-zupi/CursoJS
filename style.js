/*
var saludo = "Hola CoderHouse";

console.log(saludo);


let nombre = 'Alexis', apellido = 'Zupi';
let nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );



let nombre = prompt('Ingrese su nombre:');
console.log( nombre );
*/

let primeraPregunta = confirm("Desea Presupuestar su vivienda");
let nombre = prompt("Escriba su Nombre:");
let apellido = prompt("Escriba su Apellido:");
let edad = prompt("Escriba su Edad:");
let email = prompt("Escriba su direccion de email")
const valorM2Fijo = 98000;
let m2Construir = prompt("Coloque sus metros2 a construir");
let resultadoM2 = confirm("El costo de su obra es:");
let cuotas = alert("Usted puede abonar en 6, 12 o hasta 24 coutas");

if( edad < 100 && edad >= 18 ){
    console.log("Ingreso exitoso");
}
else{
    console.log("Su edad no es valida");
}


//Si uno es verdadera, da verdadera (||)
let vacaciones = false, diaLibre = true;

if( vacaciones || diaLibre ){
    console.log("El padre puede asistir al juego del hijo")

}
else{
    console.log("No podra asistir")
} 



//Operadores Ternarios
let numero = 9;

let resultado = ( numero % 2 == 0 ? "Num Par" : "Numero Impar" );



//puedo votar o no con isNaN
let miNumero = "18x";

let Edad = Number(miNumero);

if( isNaN( Edad )){
    console.log("Ingrese un numero");

}
else{
    if( Edad >= 18 ){
        console.log("Usted es mayor de edad");
    }
    else{
        console.log("Usted es menor de edad");
    }
}

//Ejemplo con Operadores Ternarios
if( isNaN( Edad )){
    console.log("Ingrese un numero");

}
else{
    let Resultado = ( Edad >= 18 ? "Usted es mayor de edad" : "Usted es menor de edad" );
}



let perro = 18;

let resultadoPerro = ( perro >= 18 && perro <= 100 ) ? "Usted es mayor de edad" : "Usted es menor de edad";
console.log(resultadoPerro);