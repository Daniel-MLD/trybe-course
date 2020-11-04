/*Depois, faça uma pirâmide com n asteriscos de base*/
//Geração de valores randômicos de 1 a 50
const n = Math.ceil(Math.random()*50);
console.log(n);
if ((n % 2) != 0) {
  for (let i = 1; i < n+1; i += 1) {
    let line = ``;
    if ((i % 2) != 0) {
      for (let j = 1; j < n+1; j += 1) {
        if ((j > ((n-i)/2)) && (j < (((n+i)/2)+1))) {
          line = line + `*`;
        } else {
          line = line + ` `;
        }
        
      }
      console.log(line);
    }
  }
} else {
  console.log(`n não é um número impar`)
}