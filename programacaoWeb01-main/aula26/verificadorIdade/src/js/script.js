const verificar = () => {
  let data = new Date();
  let ano = data.getFullYear();
  let txtAno = document.getElementById("txtano");
  let res = document.querySelector("#res");

  if (txtAno.value.length === 0 || txtAno.value > ano) {
      window.alert("[ERRO] Verifique os dados e tente novamente");
    } else {
        let sexo = document.getElementsByName("sexo");
        console.log(sexo);
        let idade;
        let genero;
        let img;
  }
};
