const a = Math.round((Math.random()*10));
const b = Math.round((Math.random()*10));
const c = Math.round((Math.random()*10));
console.log(' Valor de A é: ' + a + ' , o valor de B é: ' + b + ' e o valor de C é: ' + c);
if (a > b) {
  if (a > c) {
    console.log('A variável maior é A');
  } else if (c > a) {
    console.log('A variável maior é C');
  } else {
    console.log('As variáveis A e C tem o mesmo valor');
  }
} else if (b > a) {
  if (b > c) {
    console.log('A variável maior é B');
  } else if (c > b) {
    console.log('A variável maior é C');
  } else {
    console.log('As variáveis B e C tem o mesmo valor');
  }
} else if ((a && b) > c) {
  console.log('As variáveis A e B tem o mesmo valor');
} else if (c > (a && b)){
  console.log('A variável maior é C');
} else {
  console.log('As variáveis A, B e C tem o mesmo valor');
}
