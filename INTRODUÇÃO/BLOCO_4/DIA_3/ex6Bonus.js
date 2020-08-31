//Faça um programa que diz se um número definido numa variável é primo ou não.
//Geração de valores randômicos de 1 a 50
const n = Math.ceil(Math.random()*50);
let primo = false;
console.log(n);
if ((n === 2) || ((n % 2) != 0 )) {
  primo = true;
  for (let i = 2; i < n; i += 1) {
    if (((n % i) === 0) && (primo == true)) {
      console.log(n%i);
      primo = false;
      console.log(`Entrou`);
    }
  }
}
console.log(`${n} é primo? ${primo}`);