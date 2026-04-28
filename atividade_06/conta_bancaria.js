class ContaBancaria {
    constructor(titular, saldo)
        this.titular = titular;
        this.saldo = saldo
}
verSaldo(){
    console.log (`
        Olá ${this.titular},
        sesu saldo atual é R$ ${this.saldo}`)
}
Depositar(valor){
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
    // criar o método sacar e sacar 1000 reais da sua conta, e depois mostrar o saldo atualizado.

sacar(valor) {
    this.saldo -= valor;
    }
}
let ContaDoJoab = new ContaBancaria ("Joab" , 1500)
ContaDoJoab.verSaldo(_)
ContaDoJoab.verSaldo ()
ContaDoJoab.depositar(350)
ContaDoJoab.verSaldo()

let contaDaClara = new ContaBancaria("Clara" , 15000)
contaDaClara.verSaldo( )//15K
contaDaClara.depositar(350); // 15K +350 = 15350
contaDaClara.sacar(100)
contaDaClara.verSaldo()//15250

