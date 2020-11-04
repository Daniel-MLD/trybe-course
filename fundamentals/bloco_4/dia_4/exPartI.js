let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};
console.log(`Bem vinda, ${info.personagem}`);
info.recorrente = "Sim";
info2.recorrente = "Sim";
console.log(info);
for (let chave in info) {
  console.log(chave);
}
for (let chave in info) {
  console.log(info[chave]);
}