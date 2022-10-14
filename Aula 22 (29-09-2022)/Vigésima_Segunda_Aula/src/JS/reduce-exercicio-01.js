const numeros = [22, 44, 88, 100, 57, 30];
 
const todosOsNumeros = numeros.map(adicionarNumeros);

function adicionarNumeros(numero) {
    return numero + 10;
}

console.log(todosOsNumeros);

const novosNumeros = todosOsNumeros.filter(filtrarNumeros);

function filtrarNumeros(numero) {
    return numero % 2 === 0;
}

console.log(novosNumeros);

const multiplicouGeral = novosNumeros.reduce(multiplicarGeral, 2);

function multiplicarGeral(acumulador, elemento){
    return acumulador *= elemento;
}

console.log(multiplicouGeral);