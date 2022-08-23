// Condicionais

var num1 = 2;
var num2 = 4;

if (num1 < num2){
    console.log("Usuário permitido!");
} else {
    console.log("ERRO: Senha incorreta!")
}

if (num1 < num2){
    console.log("Usuário permitido!");
} else {
    if(num1 > num2){
        console.log("Usuário 2 permitido!");
    } else {
        console.log("ERRO: Senha incorreta!")
    }    
}

if (num1 < num2){
    console.log("Usuário permitido!");
} else if (num1 > num2){
        console.log("Usuário 2 permitido!");
} else {
        console.log("ERRO: Senha incorreta!")
}    