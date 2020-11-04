let numbers = [2, 3, 2, 5, 8, 2, 3];
let num = numRepet(numbers);
console.log(num);

function numRepet(arrayNum) {
  let maisRepetido = null;
  let qtdRepetido = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    let num = arrayNum[i];
    let qtdnum = 0;
    for (let j = 1; j < arrayNum.length; j += 1){
      if (num === arrayNum[j]) {
        qtdnum = qtdnum + 1;
      }
    }
    if (qtdRepetido < qtdnum){
      qtdRepetido = qtdnum;
      maisRepetido = arrayNum[i];
    }
  }
  return maisRepetido;
}