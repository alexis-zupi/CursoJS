let a = 3, b = 2, c = "2", d = 3;

let z = a == b; //Se revisa el valor sin importar el Tipo
console.log(z);

z = b == c;
console.log(z);

z = a === c;//Se visa el valor y tambien el Tipo
console.log(z);



//Distinto "A"
z = a != b;
console.log(z);

z = b != c;
console.log(z);

z = b !== c;
console.log(z);



//Operadores Relacionales
z = b > a;
console.log(z);

z = b <= c;
console.log(z);

z = b < d;
console.log(z);