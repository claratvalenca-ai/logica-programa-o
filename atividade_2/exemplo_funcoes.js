//1. Function Expression - Valor  Base 
const calcularValorBase = function (horas, precoHora){
    return horas * precoHora; 
}
// 2. Arrow Function - Adicionar Taxa Fixa
const adicionarTaxa = (valor) => valor + 2.00;
//3. Function Declaration - Exibir Recibo 
function emitirRecibo(totalfinal){
    console. log ("--- ESTACIONAMENTO---")
    console. log ("Total a pagar: R$" + totalfinal.toFixed(2))
}
//4. Execução 
let valorBruto = calcularValorBase (3,10);
let ValorComTaxa = adicionarTaxa (valorBruto)
emitirRecibo(ValorComTaxa);
