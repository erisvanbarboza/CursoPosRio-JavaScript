function gerarCorAleatória () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let box = document.getElementsByClassName('box')[0];
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}


