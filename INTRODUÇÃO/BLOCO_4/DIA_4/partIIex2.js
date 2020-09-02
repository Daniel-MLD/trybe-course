let numeros = [5, 9, 33, 2, 15, 6, 8];
let maiorNum = maiorValor(numeros);

function maiorValor(testNum) {
  let maior = testNum[0];
  for (let i = 1; i < testNum.length; i++) {
    if (testNum[i] > maior) {
      maior = testNum[i];
    }
  }
  return maior
}
console.log(maiorNum);