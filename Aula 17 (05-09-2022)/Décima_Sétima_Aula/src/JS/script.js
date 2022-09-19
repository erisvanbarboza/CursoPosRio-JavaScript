var read = require('../../node_modules/readline-sync');

var cardapio = parseFloat(read.question("Digite uma opcao:"));

switch(cardapio){
    case 1:
        console.log("X-burger");
        break;
    case 2: 
        console.log("Batata Frita");
        break;
    case 3:
        console.log("Refrigerante");
        break;
    default:
        console.log("ERRO: Refaça o seu pedido!");   
}