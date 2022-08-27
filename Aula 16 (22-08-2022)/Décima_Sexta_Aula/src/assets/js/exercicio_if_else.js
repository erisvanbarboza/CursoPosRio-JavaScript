var read = require('../../../node_modules/readline-sync');

var nota1 = parseFloat(read.question("Primeira nota: \n"));
var nota2 = parseFloat(read.question("Segunda nota: \n"));
var nota3 = parseFloat(read.question("Terceira nota: \n"));
var nota4 =parseFloat(read.question("Quarta nota: \n"));
var media = ((nota1 + nota2 + nota3 + nota4) / 4);

console.log(`A sua media e ${media}`)

if (media >= 7){
    console.log(`Aprovado!\n`)
} else if((media >= 5) && (media < 7)){
    console.log(`Recuperação!\n`)
} else {
    console.log(`Reprovado!\n`)
}