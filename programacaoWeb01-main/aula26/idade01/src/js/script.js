function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let txtAno = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (txtano.value.length === 0 || txtAno.value > ano) {
    window.alert("Verifique os dados e tente novamente! ==> ERRO <==");
  } else {
    let sexo = document.getElementsByName("sexo");
    let idade = ano - Number(txtAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "./assets/img/homem-crianca.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./assets/img/homem-jovem.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./assets/img/homem-adulto.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "./assets/img/homem-idoso.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "./assets/img/mulher-crianca.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./assets/img/mulher-jovem.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./assets/img/mulher-adulta.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "./assets/img/mulher-idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<strong>Detectamos:</strong> ${genero} com ${idade} anos`;

    res.appendChild(img);
  }
}
