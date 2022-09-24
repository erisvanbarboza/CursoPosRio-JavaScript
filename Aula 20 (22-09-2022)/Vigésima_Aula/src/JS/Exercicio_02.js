const readlineSync = require('../../node_modules/readline-sync');

let idade = Number(readlineSync.question("Digite a sua idade: "));

let sexo = Number(readlineSync.question("Qual o seu sexo? \nDigite 1 para MASCULINO ou 2 para FEMININO: "));

let deficiencia = Number(readlineSync.question("Possui alguma deficiencia fisica? \nDigite 1 para SIM ou 2 para NAO: "));

if (sexo === 2){
    var gestante = Number(readlineSync.question("Voce esta gravida: \nDigite 1 para SIM ou 2 para NAO: "));
}

function accessarFilaPreferencial(idade, sexo, deficiencia, gestante){
    if (idade > 60) {
        console.log("Fila preferencial!");
    } else if (deficiencia === 1) {
        console.log("Fila preferencial!");
    }else if (gestante === 1) {
        console.log("Fila preferencial!");
    } else {
        console.log("Fila normal!");
    }
}

console.log(accessarFilaPreferencial(idade, sexo, deficiencia, gestante));