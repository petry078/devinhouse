//[M1S03] Ex 2 - Iterando sobre arrays de objetos

var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];

listaConvidados.forEach(function (element) {
  console.log(element.nome + " " + element.sobrenome)
})