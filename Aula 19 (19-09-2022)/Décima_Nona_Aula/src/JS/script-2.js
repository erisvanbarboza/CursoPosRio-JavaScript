let readlineSync = require('../../node_modules/readline-sync');

let userName = readlineSync.question('Qual o seu nome? ');

if (userName === "Erisvan") {
    console.log(userName);
} else {
    console.log("ERRO")
}