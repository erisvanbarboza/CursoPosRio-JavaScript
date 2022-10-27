function carregar() {
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img");

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    // let hora = 15;

    mensagem.innerHTML = `Agora são ${hora}:${minutos} h.`;

    if (hora > 0 && hora < 12){
        imagem.src = "./assets/img/amanhecer.jpg";
        document.body.style.background = "#d3c6a4";
    } else if (hora >= 12 && hora < 18){
        imagem.src = "./assets/img/entardecer.jpg";
        document.body.style.background = "#fd8504";
        console.log(imagem.src);
    } else{
        imagem.src = "./assets/img/anoitecer.jpg";
        document.body.style.background = "#0067a4";
    }


}