/*
//Si la condicion NO es verdadera, NO se ejecuta el codigo

//Ciclo While
let contador = 0;


while (contador < 3){
    console.log(contador);
    contador++
}

console.log("Fin del Ciclo while");



//Ciclo do while
do{
    console.log(contador);
    contador++

}while( contador < 3 );

console.log("Fin del Ciclo do while");




for ( let contador = 0; contador < 3; contador++ ){
    console.log(contador);

}

console.log("Fin del Ciclo For"); 

*/


for ( let contador = 0; contador <= 10; contador++ ){
    if( contador % 2 != 0 ){
        break ;
    }
    else{
        console.log(contador);
    }
}


for ( let contador = 0; contador <= 10; contador++ ){
    if( contador % 2 != 0 ){
        continue;
    }
    else{
        console.log(contador);
    }
}
