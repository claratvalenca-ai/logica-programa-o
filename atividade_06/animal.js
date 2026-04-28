class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`${this.nome} está ronronando...`);
    }
}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`${this.nome} está feliz...`);
    }
}
    let Lua = new Gato("Lua");
    let Mel = new Cachorro("Mel");

    Lua.falar("Miau"); 
    Lua.ronronar();
    Mel.falar("Au Au");
    Mel.abanarRabo();

class Hamster extends Animal {
    roer() {
        console.log(`${this.nome} está roendo...`);
    }
}
  let Bituca = new Hamster("Eric");
  Bituca.roer();