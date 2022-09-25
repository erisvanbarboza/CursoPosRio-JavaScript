const readlineSync = require('../../node_modules/readline-sync');

let fruta = readlineSync.question("Digite o nome da fruta: ");

function verificarFruta (fruta) {
    switch (fruta) {
        case "maca":
            return "Nao vendemos esta fruta aqui.";
            break;
        case "kiwi":
            return "Estamos com escassez de kiwis.";
            break;
        case "melancia":
            return "Aqui esta, sao 3 reais o quilo.";  
            break;
        default:
            return "ERRO: VERIFIQUE SUA DIGITACAO!";          
    }
}

console.log(verificarFruta(fruta));