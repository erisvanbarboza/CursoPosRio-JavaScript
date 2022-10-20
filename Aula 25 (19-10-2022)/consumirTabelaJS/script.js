const relatorios = [
  { "Data": "28/08/2015", "Descricao": "Visita a Cliente", "Classificacao": "Class.2", "Valor": "R$435,00", "Verba": "RH", "Cliente": "Gabriel" },
  { "Data": "15/05/2013", "Descricao": "Apresentação", "Classificacao": "Class.4", "Valor": "R$328,00", "Verba": "Financeiro", "Cliente": "Erisvan" },
  { "Data": "19/10/2014", "Descricao": "Visita e Apresentação", "Classificacao": "Class.7", "Valor": "R$548,78", "Verba": "Diretoria", "Cliente": "André" },
  { "Data": "11/04/2015", "Descricao": "Proposta", "Classificacao": "Class.34", "Valor": "R$369,22", "Verba": "Comercial", "Cliente": "Raphael" },
  { "Data": "12/12/2015", "Descricao": "Visita", "Classificacao": "Class.2", "Valor": "R$120,20", "Verba": "RH", "Cliente": "Carlos Gabriel" },
  { "Data": "25/06/2015", "Descricao": "Evento", "Classificacao": "Class.1", "Valor": "R$125,00", "Verba": "Comercial", "Cliente": "Carlos" },
  { "Data": "29/07/2015", "Descricao": "Fechar Venda", "Classificacao": "Class.9", "Valor": "R$333,33", "Verba": "Comercial", "Cliente": "Nicolas" }
];

let tabela = document.getElementById('tabela');

let tBody = tabela.getElementsByTagName('tbody')[0];

relatorios.forEach((relatorio) => {
  let tr = document.createElement('tr');

  for (let campo in relatorio){
    let td = document.createElement('td');
    td.innerHTML = relatorio[campo];
    tr.appendChild(td);
  }

  tBody.appendChild(tr);
});