/* Para o primeiro exercício de hoje, faça um programa que, dado
um valor n qualquer, seja n > 1, imprima na tela um quadrado
feito de asteriscos de lado de tamanho n. */
//Geração de valores randômicos de 1 a 50
const n = Math.ceil(Math.random()*50);
console.log(n);
for (let i = 0; i < n; i += 1) {
  let line = ``;
  for (let j = 0; j < n; j += 1) {
    line = line + `*`;
  }
  console.log(line);
}