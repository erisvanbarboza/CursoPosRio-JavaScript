const numeros = [22, 44, 88, 100, 57, 30];

const acumulador = numeros.reduce((acumulador, elemento) => {
    acumulador += elemento;
    return acumulador;
}, 0);

console.log(acumulador);