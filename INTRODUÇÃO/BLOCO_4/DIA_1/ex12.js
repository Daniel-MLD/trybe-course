const a = Math.round((Math.random()*100));
const b = Math.round((Math.random()*100));
const c = Math.round((Math.random()*100));
console.log(' Valor de A é: ' + a + ' , o valor de B é: ' + b + ' e o valor de C é: ' + c);
if (((a % 2) == 0) || ((b % 2) == 0) || ((c % 2) == 0)) {
  console.log('true');
} else {
  console.log('false');
}