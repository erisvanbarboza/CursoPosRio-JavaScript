// var read = require('../../node_modules/readline-sync');

// var texto = read.question("Digite um texto: ");

// console.log(texto);

// while(texto === "nao"){
//     var texto =  read.question("Digite sim: ");
// }

// console.log(texto);

// <==============================================================================>

// let read = require('../../node_modules/readline-sync');

// let texto = read.question("Digite um texto: ");

// console.log(texto);

// while(texto === "nao"){
//     texto =  read.question("Digite sim: ");
// }

// console.log(texto);

// <==============================================================================>

let read = require('../../node_modules/readline-sync');

let texto = read.question("Digite um texto: ");

console.log(texto);

do {
    texto = read.question("Digite sim: ");
} while(texto === "nao")

console.log(texto);