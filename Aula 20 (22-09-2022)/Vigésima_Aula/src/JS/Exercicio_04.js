const readlineSync = require('../../node_modules/readline-sync');

let n = Number(readlineSync.question("Digite um numero: "));

function calcular(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log(calcular(n));