let numero = 3;

if( numero == 1 ){
    console.log("Numero es Uno");
}
else if( numero ==2 ){
    console.log("Numero es Dos");
}
else if( numero ==3 ){
    console.log("Numero es Tres");
}
else if( numero ==4 ){
    console.log("Numero es Cuatro");
}
else{
    console.log("Numero desconocido");
}



//Ejercicio estacion del año
let mes = 3;
let estacion;

if( mes == 1 || mes == 2 || mes == 3 ){
    console.log("Estacion Verano");
}
else if( mes == 4 || mes == 5 || mes == 6 ){
    console.log("Estacion Otoño");
}
else if( mes == 7 || mes == 8 || mes == 9 ){
    console.log("Estacion Invierno");
}
else if( mes == 10 || mes == 11 || mes == 12 ){
    console.log("Estacion Primavera");
}
else{
    console.log("Ingrese un numero correcto");
}




//Ejercicio de Hora
let hora = 16;
let mensaje;

if( hora >= 0 && hora <= 6 ){
    mensaje = "Durmiendo";
}
else if( hora >= 7 && hora <= 11 ){
    mensaje = "Buenos Dias";
}
else if( hora >= 12 && hora <= 18 ){
    mensaje = "Buenas Tardes";
}
else if( hora >= 1 && hora <= 24 ){
    mensaje = "Buenas Noches";
}
else{
    mensaje = "Numero equivocado";
}

console.log(mensaje);




//Ejercicio estacion del año con switch
mes = 5;
estacion = 'Estacion desconocida';

switch( mes ){
    case 1: case 2: case 3:
        estacion = 'Verano';
        break;
    case 4: case 5: case 6:
        estacion = 'Otono'
        break;
    case 7: case 8: case 9:
        estacion = 'Invierno';
        break;
    case 10: case 11: case 12:
        estacion = 'Primavera';
        break;
    default:
        estacion;
        break;
}

console.log(estacion);


let mesdos = "otono";
switch(mesdos){
    case "otono":
        estacion = "Otono papi";
        break;
}

console.log(estacion);






