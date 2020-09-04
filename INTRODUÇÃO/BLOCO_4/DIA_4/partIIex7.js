let word = "trybe";
let ending = "be";

console.log(verificaFimPalavra(word, ending));

function verificaFimPalavra(palavra, partePalavra) {
  let igual = false;
  if (partePalavra.length < palavra.length) {
    tamanhoComparado = palavra.length - partePalavra.length;
    for (let i = (palavra.length - 1); i > tamanhoComparado; i -= 1) {
      if (palavra[i] === partePalavra[i - tamanhoComparado]) {
        igual = true;
      } else {
        igual = false;
      }
    }
    return igual;
  } else {
    return igual;
  }
}