const pecas = ['peao', 'Torre', 'cavalo', 'BISPO', 'rainha', 'rei']
for (let i = 0; i < pecas.length; i++) {
  pecas[i] = pecas[i].toLocaleLowerCase();
}
//Função usada para a geração de valores aleatórios de 0 a 5
let a = Math.round((Math.random()*5));
switch (a) {
  case 0:
    console.log('Peça: ' + pecas[0] + ' | Movimentos: Para frente')
    break;
  case 1:
    console.log('Peça: ' + pecas[1] + ' | Movimentos: Reta diagonalmente')
    break;
  case 2:
    console.log('Peça: ' + pecas[2] + ' | Movimentos: Linha reta horizontalmente e verticalmente')
    break; 
  case 3:
    console.log('Peça: ' + pecas[3] + ' | Movimentos: em L')
    break;
  case 4:
    console.log('Peça: ' + pecas[4] + ' | Movimentos: Linha reta - verticalmente, horizontalmente ou diagonalmente')
    break;
  case 5:
    console.log('Peça: ' + pecas[5] + ' | Movimentos: Mover para qualquer casa adjacente')
    break;
  default:
    console.log('Não é uma peça de xadrez')
    break;
}