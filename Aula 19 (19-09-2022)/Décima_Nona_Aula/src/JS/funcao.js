let readlineSync = require('../../node_modules/readline-sync');

let userName = readlineSync.question('Qual o seu nome? ');

function exibirNome () {
    console.log(userName)
}

exibirNome();