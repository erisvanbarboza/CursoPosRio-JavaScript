const carros = [
    {
        modelo: "500",
        cor: "Branca",
        velocidade: "200km/h"
    }, 

    {
        modelo: "911Turbo",
        cor: "Preta",
        velocidade: "300km/h"
    }, 
    
    
    {
        modelo: "F-450",
        cor: "Vermelha",
        velocidade: "400km/h"
    },
];

// carros.forEach((elemento) => {
//     console.log("Cor: " + elemento.cor);
//     console.log("Modelo: " + elemento.modelo);
//     console.log("Velocidade: " + elemento.velocidade);
//     console.log("----------------------")
// });

const json = JSON.stringify(carros);

console.log(json);

document.write(json);