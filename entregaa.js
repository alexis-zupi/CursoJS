let mensajePrincipal;

do {
    mensajePrincipal = confirm("Desea presupuestar su vivienda?");

    if(!mensajePrincipal) {
        alert("Cualquier consulta no dude en comunicarse con nuestros profesionales")
    }

}while(!mensajePrincipal)
    


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
let horario;
let mensajeHorario;
do {
    horario = parseInt(prompt("Ingrese el Horario de su consulta"));
    
    if(contieneCaracterEspecial(horario)) {
        alert("Debes ingresar un horario valido!")
    }
    
} while(contieneCaracterEspecial(horario));

if( horario >= 8 && horario <= 12 ){
    mensajeHorario = "Buenos Dias";
}else if( horario > 12 && horario <= 20 ){
    mensajeHorario = "Buenas Tardes";
}else if ( horario > 20 && horario <= 23 ||  horario >= 0 && horario < 8 ){
    mensajeHorario = "Buenas Noches";
}else{
    mensajeHorario = "Horario Desconocido";
}

/*
switch(horario) {
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
    
}
*/

function contieneCaracterEspecial(texto) {
    const illegalCharacters = /[-,.(*&^%$ :;]/;
    return illegalCharacters.test(texto) || !texto;
}


//Se le pide la Edad al Usuario
let edadUsuario;


do{
    edadUsuario = parseInt(prompt("Ingrese su Edad"));

    if( isNaN(edadUsuario)){
        alert("Debes ingresar un numero");
    }else if (edadUsuario < 18){
        alert("Usted es menor de edad");
    }

}while(isNaN(edadUsuario) || edadUsuario < 18);


/*
do{
    do{
        edadUsuario = parseInt(prompt("Ingrese su Edad"));
    
        if( isNaN( edadUsuario )){
            edadUsuario = prompt("Ingrese nuevamente un numero");
        
        }
        else{
            edadUsuario = alert( edadUsuario >= 18 ? "Usted es mayor de edad" : "Usted es menor de edad" );
        }
    
    }while(edadUsuario >= 18);

    contador++

}while(contador < 2);
*/



//Se le pide el Nombre al Usuario

let nombre;
let nombreUsuario = "Alexis Nicolas Matias";

do{
    nombre = prompt("Ingrese su Nombre");

    if ( !nombreUsuario.includes(nombre) ){
        alert("El nombre ingresado no es correcto");
    }

}while(!nombreUsuario.includes(nombre));




//Se le pide el Apellido al Usuario
let apellido;
let apellidoUsuario = "Zupichiatti Martini Perez";

do{
    apellido = prompt("Ingrese su Apellido");

    if ( !apellidoUsuario.includes(apellido) ){
        alert("El apellido ingresado no es correcto");
    }

}while(!apellidoUsuario.includes(apellido));



//Se le pide la direccion de Email al Usuario
let email;
const EMAIL_USUARIO = "@gmail.com";
do{
    email = prompt("Ingrese su direccion de Email");

    if ( !email.includes(EMAIL_USUARIO) ){
        alert("Su direccion de email no es valida");
    }

}while( !email.includes(EMAIL_USUARIO) );


//Se le piden los metros2 a Construir al Usuario
const VALOR_M2 = 98000;
let metrosAConstruir;

do{
    metrosAConstruir = prompt("Ingrese los metros2 que desea construir\nEl valor actual del m2 es: $" + VALOR_M2);

    if( isNaN(metrosAConstruir)){
        alert("Debes ingresar un numero");
    }else if (metrosAConstruir <= 50 ){
        alert("Los metros a construir deben ser mayor a 50m2");
    }

}while(isNaN(edadUsuario) || metrosAConstruir <= 50 );

let cuotaSeis = resultadoValor + ((resultadoValor * 15) / 100);
let cuotaSeisUN = cuotaSeis / 6;
let cuotaDoce = resultadoValor + ((resultadoValor * 30) / 100);
let cuotaDoceUN = cuotaSeis / 12;
let cuotaVCuatro = resultadoValor + ((resultadoValor * 45) / 100);
let cuotaVCuatroUN = cuotaSeis / 24;

alert("Sus formas de pago son:\nContado: $" + resultadoValor + "\n6 Cuotas de: $" + cuotaSeisUN + " ($" + cuotaSeis + ")" + "\n12 Cuotas de: $" + cuotaDoceUN + " ($" + cuotaDoce + ")" + "\n24 Cuotas de: $" + cuotaVCuatroUN + " ($" + cuotaVCuatro + ")" );


let resultadoValor = VALOR_M2 * metrosAConstruir;
alert("El costo de su futura vivienda es: $" + resultadoValor);


alert(mensajeHorario + " " +  nombre + " su consulta fue enviada con exito, en instante nos comunicamos con usted a la direccion de email " + email);



