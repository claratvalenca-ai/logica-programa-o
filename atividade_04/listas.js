//1. ARRAYS

//1.1 Array Simples
    const frutas = ["Maçã" , "Banana", "Laranja"];
//1.2 FIFO (Fila)
    const Fila = ["Ana" , "Beto", "Dailane"]; 
    const pimeiro Fila = Fila.shift(); //Primeiro item
    console.log(printmeiro);
//1.3 FILO (Pilha)
    const Pilha =
        ["Inferno de Dante" ,
        "One Piecie" ,
        "A quarta Asa"];
    Pilha.push ("O Alquimista");
    const livro = Pilha.pop();
    console.log(livro);
//1.4 Buscar se existe
    const temLaranja = frutas.includes ("Laranja");
    const temManga = frutas.includes ("Manga");
    console.log(temLaranja);
    console.log(temManga);

//2.0 Sets (conjuntos)
//2.1 adicionando duplicadas
    const matricula = new Set [10001, 1002, 1003, 1005, 10009, 1002];
    console.log ([...matricula]);
//2.2 adicionar item 
    const cores = new Set (["Verde" , "Azul"]);
    cores.add("Veremlho");
    cores.add("Branco");
    cores.add("`Preto");
    console.log ([...cores]);
//2.3 Buscar se existe
    const temVerde = cores.has("Verde");
    const temAmarelo = cores.has("Amarelo")
    console.log ([temAmarelo]);
//2.4 Converter array em set
    const convidados = ["Bruno" , "Henrique", "Juliana", "Carol" , "Julina", "Henrique"];
    const convidados_unicos = new Set (convidados);
    console.log ([...convidados_unicos])
//3.0 Map (mapas)
//3.1 Cadastro de produtos
    const produtos = new Map();
    produtos.set ("Mouse" , 50.00);
    produtos.set("Teclado" , 120.00);
//3.2 Buscando um valor
    ValorMouse = produtos.get("Mouse");
    console.log (ValorMouse);
