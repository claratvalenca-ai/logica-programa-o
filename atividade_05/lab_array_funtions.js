//Atividade 1
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];
const resultado = tags.filter(tag => tag.toLowerCase().includes("js"));
console.log(resultado);
// ["#javascript", "#js"]


//Atividade 2
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
const usuariosFormatados = usuarios.map(user => user.toLowerCase());
console.log(usuariosFormatados);
// ["alex", "maria", "joão", "bia"]


//Atividade 3 
const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
const convidadosFiltrados = convidados.filter(
  nome => nome.startsWith("A") && nome.length > 2
);
console.log(convidadosFiltrados);
// ["Ana", "Alberto", "Amanda"]


//Atividade 4 
const precos = [50, 100, 150, 200];
const precosComDesconto = precos.map(preco => preco - 10);
console.log(precosComDesconto);
// [40, 90, 140, 190]