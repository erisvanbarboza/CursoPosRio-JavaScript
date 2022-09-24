const readlineSync = require('../../node_modules/readline-sync');

let n1 = Number(readlineSync.question("Digite o primeiro numero: "));

let n2 = Number(readlineSync.question("Digite o segundo numero: "));

let n3 = Number(readlineSync.question("Digite o terceiro numero: "));

let numeros = [n1, n2, n3];

function inverterNumeros(numeros){
    console.log(n3, n2, n1);
}

console.log(inverterNumeros(numeros));


