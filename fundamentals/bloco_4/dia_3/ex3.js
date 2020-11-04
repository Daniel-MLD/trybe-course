/* Agora inverta o lado do triângulo. Por exemplo:*/
//Geração de valores randômicos de 1 a 50
const n = Math.ceil(Math.random()*50);
console.log(n);
for (let i = 0; i < n; i += 1) {
  let line = ``;
  for (let j = 0; j < n; j += 1) {
    if (j >= (n-(i+1))) {
      line = line + `*`;
    } else {
      line = line + ` `;
    }
    
  }
  console.log(line);
}