//Função usada para a geração de valores aleatórios de -500 a 1000
let custo = Math.round((Math.random()*150)-50);
console.log('Valor de custo: ' + custo);
let valor = custo + Math.round((Math.random()*150)-50);
console.log('Valor de venda: ' + valor);
let custoTotal = custo + (custo*0.2);
console.log('Valor de custo + impostos: ' + custoTotal);
let lucro = 0;
if ((valor < 0) || (custo < 0)) {
  console.log('Valore(s) não pode(m) ser menor que 0!')
} else {
  lucro = valor - custoTotal;
  console.log('O lucro obtido com a venda de 10k produtos foi de ' + (lucro*10000));
}


