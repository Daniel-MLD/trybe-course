/* Para o primeiro exercício de hoje, faça um programa que, dado
um valor n qualquer, seja n > 1, imprima na tela um quadrado
feito de asteriscos de lado de tamanho n. */
const n = Math.ceil(Math.random()*10);
let contLine = 1;
console.log(n);
for (let i = 0; i < n; i += 1) {
  let line = ``;
  for (let j = 0; j < contLine; j += 1) {
    line = `*${line}`;
  }
  contLine += 1;
  console.log(line);
}