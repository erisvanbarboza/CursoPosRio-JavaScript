const readlineSync = require('../../node_modules/readline-sync');

let fruta = readlineSync.question("Digite o nome da fruta: ");

function verificarFruta (fruta) {
    switch (fruta) {
        case "maca":
            console.log("Nao vendemos esta fruta aqui.");
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis.");
            break;
        case "melancia":
            console.log("Aqui esta, sao 3 reais o quilo.")  
            break;
        default:
            console.log("ERRO: VERIFIQUE SUA DIGITACAO!");          
    }
}

console.log(verificarFruta(fruta));