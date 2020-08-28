//Função usada para a geração de valores aleatórios de 1045 a 6045
let salarioBruto = ((Math.random()*5000)+1045);
console.log('Salário bruto de R$ ' + salarioBruto.toFixed(2));
let salarioLiquido = 0
const aliquotaINSS = [0.08, 0.09, 0.11, 570.88];
const aliquotaIR = [0.075, 0.15, 0.225, 0.275];
const parcelaIR = [142.80, 354.80, 636.13, 869.36];
if (salarioBruto <= 1556.94) {
  salarioLiquido = salarioBruto - (salarioBruto * aliquotaINSS[0]);
} else if ((salarioBruto >= 1556.95) && (salarioBruto <=2594.92)) {
  salarioLiquido = salarioBruto - (salarioBruto * aliquotaINSS[1]);
} else if ((salarioBruto >= 2594.93) && (salarioBruto <=5189.82)) {
  salarioLiquido = salarioBruto - (salarioBruto * aliquotaINSS[2]);
} else {
  salarioLiquido = salarioBruto - aliquotaINSS[3];
}
console.log('Salário bruto - INSS de R$ ' + salarioLiquido.toFixed(2));
if (salarioLiquido <= 1903.98) {

} else if ((salarioLiquido >= 1903.99) && (salarioLiquido <=2826.65)) {
  salarioLiquido = salarioLiquido - ((salarioLiquido * aliquotaIR[0]) - parcelaIR[0]);
} else if ((salarioLiquido >= 2826.66) && (salarioLiquido <=3751.05)) {
  salarioLiquido = salarioLiquido - ((salarioLiquido * aliquotaIR[1]) - parcelaIR[1]);
} else if ((salarioLiquido >= 3751.06) && (salarioLiquido <=4664.68)) {
  salarioLiquido = salarioLiquido - ((salarioLiquido * aliquotaIR[2]) - parcelaIR[2]);
} else {
  salarioLiquido = salarioLiquido - ((salarioLiquido * aliquotaIR[3]) - parcelaIR[3]);
}
console.log('Salário liquido de R$ ' + salarioLiquido.toFixed(2));