//Função usada para a geração de valores aleatórios de 0 a 10
const a = Math.round((Math.random()*10));
const b = Math.round((Math.random()*10));
console.log(' Valor de A é: ' + a + ' e o valor de B é: ' + b);
if (a > b) {
  console.log('A variável maior é A');
} else if (b > a) {
  console.log('A variável maior é B');
} else {
  console.log('As duas variáveis tem o mesmo valor');
}