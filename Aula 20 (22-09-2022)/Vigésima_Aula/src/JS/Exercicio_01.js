const readlineSync = require('../../node_modules/readline-sync');

let n1 = Number(readlineSync.question("Digite um numero: "));

let n2 = Number(readlineSync.question("Digite outro numero: "));

function somar(n1, n2){
    return n1 + n2;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

console.log("\n*************** MENU ***************\n");
console.log("Selecione a operacao:");
console.log("Digite 1 para adicao. ");
console.log("Digite 2 para subtracao. ");
console.log("Digite 3 para multiplicacao. ");
console.log("Digite 4 para divisao. \n");

let opcao = Number(readlineSync.question("Digite o numero da operacao desejada: "));

console.log("\n*************** RESULTADO ***************");

if (opcao === 1) {
    console.log(somar(n1, n2));
} else if (opcao === 2) {
    console.log(subtrair(n1, n2));
} else if (opcao === 3) {
    console.log(multiplicar(n1, n2));
} else if (opcao === 4) {
    console.log(dividir(n1, n2));
} else {
    console.log("OPCAO INVALIDA!!");
}
