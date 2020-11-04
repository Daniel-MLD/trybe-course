let numeros =  [2, 3, 6, 7, 10, 1];
let maiorNum = maiorValor(numeros);

function maiorValor(testNum) {
  let maior = testNum[0];
  for (let i = 1; i < testNum.length; i++) {
    if (testNum[i] > maior) {
      maior = i;
    }
  }
  return maior
}
console.log(maiorNum);