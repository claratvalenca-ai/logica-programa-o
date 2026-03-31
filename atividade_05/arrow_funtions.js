//.map(): Cria uma lista com os dados alterados
const metros = [1, 5, 10];
const centímetros = metros.map (m=> m*100);
centimetros.forEach (c => console.log (`$(c)cm`));

//.filter(): Cria uma lista com os itens especificados
const notas =[8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.forEach(n => console.log(n));

//.find(): Reforma apenas o primeiro item que passa na condição
const alunos = ["João", "Maria", "José"];
const busca = alunos (nome => nome == "Maria");
console.log (busca);

//.toUpperCase . totoloewerCase:
//Coloca todas as letras em maiúsculo/minúsculas
const nomes = ["Ana", "Bia"];
nomes.map(n=> n.toUpperCase ());
nomes.forEach(n => console.log(m.toUpperCase()));
nomes.map(n => n.toLocaleLowerCase())
    .forEach(n => console.log(n));

//.startsWith() .endsWith() retorna quem começa/termina ValorComTaxa...
const arquivos = ["foto.jpg", "texto.txt", "férias.jpg" ];
const apenasFotos = arquivos.filter(arq => arq.endsWith(".jpg"))
apenasFotos.forEarch(arq => console(arq));

// .incluidos(): Verifica se um texto contém outro
const produtos = 
["Monitor Dell", "Mouse Razer", "Teclado Dell"];
produtos
      .filter(p => p.includes ("Dell"))
      .map(s => s.toUpperCase())
      .forEach(i => console.log(i));
    
// .replace(): Troca uma parte do texto por outra
let telefone = "(61) 1234-5678";
const escondido = telefone.replace("(61)", "(**)");
console.log (escondido);
