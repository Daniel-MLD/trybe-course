let n = 5;

function somaAteN(numero) {
  let somatorio = numero;
  for (let index = 1; index < numero; index += 1) {
    somatorio = somatorio + index;
    
  }
  return somatorio;
}

console.log(somaAteN(n));