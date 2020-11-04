let valorRomano = "CXII";
let romanoXvalor = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

console.log(transformaNumerosRomanos(valorRomano, romanoXvalor));

function transformaNumerosRomanos(valorRecebido, objValorXromanos) {
  let numeroConvertido = 0;
  for (let i = 0; i < valorRecebido.length; i += 1) {
    let valorEquivalente = objValorXromanos[valorRecebido[i]];
    if (valorEquivalente < objValorXromanos[valorRecebido[i+1]]){
      numeroConvertido = numeroConvertido - valorEquivalente;
    }
    else {
      numeroConvertido = numeroConvertido + valorEquivalente;
    }
  }
  return numeroConvertido;
}