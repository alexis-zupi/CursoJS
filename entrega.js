let mensajePrincipal = confirm("Desea presupuestar su vivienda?");


//Se le pide el Horario de consulta al Usuario 
/*
let horario = prompt("Ingrese el Horario de su consulta");
if( horario >= 8 && horario <= 12 ){
    horario = "Buenos dias,";   
}
else if ( horario > 12 && horario <= 20 ){
    horario = "Buenas Tardes,";
}
else if( horario > 20 && horario <= 23 ||  horario >= 0 && horario < 8 ) {
    horario = "Buenas Noches,";
}
else{
    horario = "Ingrese horario correcto(Ejemplo: 17)";
}
*/
let horario = prompt("Ingrese el Horario de su consulta");
let mensajeHorario;
switch(horario){
    case (horario >= 8 && horario <= 12):
        mensajeHorario = "Buenos Dias";
        break;

    case ( horario > 12 && horario <= 20 ):
        mensajeHorario = "Buenas Tardes";
        break;

    case ( horario > 20 && horario <= 23 ||  horario >= 0 && horario < 8 ):
        mensajeHorario = "Buenas Noches";
        break;

    default:
        mensajeHorario = "Horario Desconocido";
        break;
}


//Se le pide la Edad al Usuario
let edadUsuario = prompt("Ingrese su Edad");
if( isNaN( edadUsuario )){
    edadUsuario = prompt("Ingrese un numero");

}
else{
    edadUsuario = alert( edadUsuario >= 18 ? "Usted es mayor de edad" : "Usted es menor de edad" );
}


//Se le pide el Nombre al Usuario
let nombre = prompt("Ingrese su Nombre");
let nombreUsuario = "Alexis" || "Nicolas" || "Matias";
if ( nombre == nombreUsuario ){
    console.log("Nombre Correcto");
}
else{
    console.log("Nombre Incorrecto");
}


//Se le pide el Apellido al Usuario
let apellido = prompt("Ingrese su Apellido");
let apellidoUsuario = "Zupichiatti" || "Martini" || "Perez";
if ( apellido == apellidoUsuario ){
    console.log("Apellido Correcto");
}
else{
    console.log("Apellido Incorrecto");
}


//Se le pide la direccion de Email al Usuario
let email = prompt("Ingrese su direccion de Email");
if ( apellido == "az@gmail.com" || "nc@gmail.com" || "mp@gmail.com" ){
    console.log("Email Correcto");
}
else{
    console.log("Email Incorrecto");
}


//Se le piden los metros2 a Construir al Usuario
let metrosAConstruir = prompt("Ingrese los metros2 que desea construir\nEl valor actual del m2 es: $98.000");
if( isNaN( metrosAConstruir )){
    metrosAConstruir = prompt("Ingrese un numero");

}
else{
    console.log("Numero Ingresado: " + metrosAConstruir)
}
let resultadoValor = 98000 * metrosAConstruir;
let costo = confirm("El costo de su futura vivienda es:  $" + resultadoValor);


let mensajeFinal = alert(mensajeHorario + " " +  nombre + " su consulta fue enviada con exito, en instante nos comunicamos con usted a la direccion de email " + email);



let cuotaSeis = resultadoValor + ((resultadoValor * 15) / 100);
let cuotaSeisUN = cuotaSeis / 6;
let cuotaDoce = resultadoValor + ((resultadoValor * 35) / 100);
let cuotaDoceUN = cuotaSeis / 12;
let cuotaVCuatro = resultadoValor + ((resultadoValor * 45) / 100);
let cuotaVCuatroUN = cuotaSeis / 24;

let cuotas = alert("Sus formas de pago son:\nContado: $" + resultadoValor + "\n6 Cuotas de: $" + cuotaSeisUN + " ($" + cuotaSeis + ")" + "\n12 Cuotas de: $" + cuotaDoceUN + " ($" + cuotaDoce + ")" + "\n24 Cuotas de: $" + cuotaVCuatroUN + " ($" + cuotaVCuatro + ")" );


