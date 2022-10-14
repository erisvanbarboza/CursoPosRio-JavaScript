const pessoas = {
    nome: "Erisvan",
    idade: "27",
    cpf: "111.222.333-44"
}

let principal = document.getElementById("principal");

// let lampada = document.getElementById("lampada");

// console.log(principal);

// principal.innerHTML = "Olá mundo!"

// let ola = "Olá mundo!";

// principal.innerHTML = `
// <h1>${ola}</h1>
// <h2>Esta é uma saudação</h2>
// <p>Aqui vai um texto</p>
// `

// function acenderLampada() {
//     lampada.src = "./src/assets/img/lampada-acesa.jpg";
// }    

// function apagarLampada() {
//     lampada.src = "./src/assets/img/lampada-acesa.jpg";
// }

principal.innerHTML = `
<table>
<tr><td>${ pessoas.nome }</tr></td>
<tr><td>${ pessoas.idade }</tr></td>
<tr><td>${ pessoas.cpf }</tr></td>
</table>
`