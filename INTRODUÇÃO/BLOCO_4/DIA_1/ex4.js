//Função usada para a geração de valores aleatórios de -5 a 5
const a = (Math.round((Math.random()*10)))-5;
console.log('O valor de A é: ' + a);
if (a > 0) {
  console.log('Positive');
} else if (a < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}