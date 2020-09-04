let numeros = [2, 4, 6, 7, 10, 0, -3];
let menorNum = menorValor(numeros);

function menorValor(testNum) {
  let menor = testNum[0];
  for (let i = 1; i < testNum.length; i++) {
    if (testNum[i] < menor) {
      menor = i;
    }
  }
  return menor
}
console.log(menorNum);