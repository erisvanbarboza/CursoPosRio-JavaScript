const criarLista = () => {
    let lista = [];
    let listaItem = document.querySelector("#itemLista");
    let listaResultado = document.querySelector("div#resultado ul")

    // console.log(listaResultado);

    if (listaItem.value.length !== 0){
        addItem(lista, listaItem.value);
        exibirLista(lista, listaResultado);
        // console.log(listaItem.value);
    }else{
        exibirErro();
    }
    
}


const exibirErro = () => {
    alert("ERRO: Digite um nome!");
}

const addItem = (lista, listaItem) => {
    lista.push(listaItem);
}

const exibirLista = (lista, listaResultado) => {
    for (let i = 0; i < lista.length; i++) {
        listaResultado.innerHTML += `<li>${lista[i]}<li>`
    }
}








// class Nomes{

//     constructor(){
//         this.id = 1;
//         this.arrayNomes = []
//     }
    
//     adicionarNomes(){
//         // let name = this.lerNome();
    
//         // if(this.validar(name) == true){
//         //     this.arrayNomes.push(name);
            
//         //     for( i = 0; i = this.arrayNomes; i++){

//         //     
//         // }
    
//         // console.log(this.arrayNomes);

//         const pegarUsuario = () => JSON.parse(localStorage.getItem('repositoryUsuario')) ?? []
//         const salvaUsuario = (repositoryUsuario) => localStorage.setItem("repositoryUsuario", JSON.stringify(repositoryUsuario))

//         const createUsuario = (usuario) => {
//         const repositoryUsuario = pegarUsuario()
//         repositoryUsuario.push (usuario) 
//         salvaUsuario(repositoryUsuario)
// }
//     }
    
//     lerNome(){
//         let name = {}
    
//         name.id = this.id;
//         name.nome = document.getElementById('escrever').value;
    
//         return name;
//     }
    
//     validar(name){
//         let msg = '';
    
//         if(name.nome == ''){
//             msg += 'Informe o nome a ser adicionado! \n'
//         }
    
//         if(msg != ''){
//             alert(msg);
//             return false;
//         }
//     }
    
    
    
    
// }

