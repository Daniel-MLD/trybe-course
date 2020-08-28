const a = Math.round((Math.random()*10));
const b = Math.round((Math.random()*10));
if (a > b) {
  console.log('A variável maior é \'A\' e seu valor é ' + a);
} else if (b > a) {
  console.log('A variável maior é \'B\' e seu valor é ' + b);
} else {
  console.log('As duas variáveis tem o mesmo valor');
}