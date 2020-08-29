/* Para o segundo exercício, faça o mesmo que antes, mas que imprima
um triângulo retângulo com 5 asteriscos de base.*/
//Geração de valores randômicos de 5 a 50
const n = Math.ceil(Math.random()*45)+5;
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