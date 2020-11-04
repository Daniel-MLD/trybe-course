let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let nomeMaior = maiorNome(nomes);
console.log(nomeMaior);

function maiorNome(listaNome) {
  let nome = listaNome[0];
  let maior = nome.length;
  for (let i = 1; i < listaNome.length; i+= 1){
    let nomeTeste = listaNome[i];
    if (nomeTeste.length > maior) {
      maior = nomeTeste.length;
      nome = listaNome[i];
    }
  }
  return nome;
}