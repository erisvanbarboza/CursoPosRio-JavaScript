function Carro (modelo, cor, acelerar) {
    this.modelo = modelo;
    this.cor = cor;
    this.acelerar = acelerar;
}

let fiat = new Carro("500", "Branco", "VRUMMM");

let porsche = new Carro("911 Turbo", "Preto", "VRUMMM");

let ferrari = new Carro("F-450", "Vermelha", "VRUMMM");

console.log(fiat.cor);

console.log(porsche.modelo);

console.log(ferrari.acelerar);