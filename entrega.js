//Se le pregunta al Usuario si desea realizar la operacion
let mensajePrincipal;

do {
    mensajePrincipal = confirm("Desea presupuestar su vivienda?");

    if(!mensajePrincipal) {
        alert("Cualquier consulta no dude en comunicarse con nuestros profesionales")
    }

}while(!mensajePrincipal)


//Se le pide El horario al Usuario para Completar el mensaje final
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



solicitarDatos();


function solicitarDatos(){

    const nombre = "Alexis";
    const password = "alexis123";
    const email = "alexis@gmail.com";

    let nombreUsuario = prompt("Ingrese su Usuario");
    let passwordUsuario = prompt("Ingrese su Contraseña");
    let emailUsuario = prompt("Ingrese su direccion email");


    if(nombreUsuario === nombre && passwordUsuario === password && emailUsuario === email){

        console.log("ingreso");
        iniciarTipoObra();
        

    }else{

        alert("El Usuario, Contraseña o email es invalida");

    }


}



function iniciarTipoObra(){

    let finalizarTipoObra = true;


    while(finalizarTipoObra){

        let cod = prompt("Ingrese el Tipo de Obra que desea realizar");


        if(cod <= 3){

            let producto = obtenerProducto(cod);

            if(producto){

                alert("El Producto seleccionado es: " + producto);
                break;
    
    
            }else{
    
                alert("para el codigo" + cod + "no existe ningunn  producto");

    
            }



        }else{
    
            alert("Ingrese un Codigo valido");


        }


    }


}



function obtenerProducto(cod){

    let producto;
    switch(cod){

        case "1":
            producto = "Remodelacion Interior";
            break;
        
        case "2":
            producto = "Construccion de Vivienda";
            break;

        case "3":
            producto = "Construccion de Complejos de Viviendas";
            break;

    
    }


    return producto;

}




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

let resultadoValor = VALOR_M2 * metrosAConstruir;
let cuotaSeis = resultadoValor + ((resultadoValor * 15) / 100);
let cuotaSeisUN = cuotaSeis / 6;
let cuotaDoce = resultadoValor + ((resultadoValor * 30) / 100);
let cuotaDoceUN = cuotaSeis / 12;
let cuotaVCuatro = resultadoValor + ((resultadoValor * 45) / 100);
let cuotaVCuatroUN = cuotaSeis / 24;

alert("Sus formas de pago son:\nContado: $" + resultadoValor + "\n6 Cuotas de: $" + cuotaSeisUN + " ($" + cuotaSeis + ")" + "\n12 Cuotas de: $" + cuotaDoceUN + " ($" + cuotaDoce + ")" + "\n24 Cuotas de: $" + cuotaVCuatroUN + " ($" + cuotaVCuatro + ")" );


alert("El costo de su futura vivienda es: $" + resultadoValor);


alert(mensajeHorario + " Alexis su consulta fue enviada con exito, en instante nos comunicamos con usted a la direccion de email alexis@gmail.com");
