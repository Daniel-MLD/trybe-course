const a = Math.round((Math.random()*180));
const b = Math.round((Math.random()*180));
const c = Math.round((Math.random()*180));
console.log('A = ' + a + ' B = ' + b + ' C = ' + c);
if ((a+b+c) == 180){
  console.log('true');
} else {
  console.log('false')
  console.log('Ângulos não são válidos')
}