const filmes = [
    {
        filme: "Top Gun: Maverick",
        ano_de_lançamento: "2022",
    }, 

    {
        filme: "Thor: Amor e Trovão",
        ano_de_lançamento: "2021",
    }, 
    
    {
        filme: "Doutor Estranho: Multiverso da Loucura",
        ano_de_lançamento: "2020",
    },
];

// carros.forEach((elemento) => {
//     console.log("Cor: " + elemento.cor);
//     console.log("Modelo: " + elemento.modelo);
//     console.log("Velocidade: " + elemento.velocidade);
//     console.log("----------------------")
// });


// console.log(json);

// document.write(json);

const filtro = filmes.filter(filtrar);

function filtrar(el) {
    return el.ano_de_lançamento === "2022";
}

const json = JSON.stringify(filtro);
console.log(json);
