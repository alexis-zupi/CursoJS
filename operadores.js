let a = 3, b = 2;

let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la suma: " + z);

z = a * b;
console.log("Resultado de la suma: " + z);

z = a / b;
console.log("Resultado de la suma: " + z);

z = a % b;
console.log("Resultado de la suma: " + z);

z = a ** b;
console.log("Resultado de la suma: " + z);


//Incremento
//Pre-incremento
z = ++a;
console.log(a);
console.log(z);

//Post-incremento
z = b++;
console.log(z);
console.log(b);


//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(z);
console.log(b);



//Precedencia de Operadores (la * y / tienen mas peso que la + y la -)
let p = 2, o = 3, i = 1, u = 4;

t = p * o + i / u;
console.log(t);

t = i + o * p / u;
console.log(t);

t = (i + o) * p / u;
console.log(t);



//Operadores de Asignacion
let k = 1;

k += 3;  // k = k + 3;
console.log(k);

k -= 3;  // k = k - 2;
console.log(k);

k %= 7;
console.log(k);

/*

*=
/=
**=

*/