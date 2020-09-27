const skills = ['SHELL', 'HTML', 'LINUX', 'CSS', 'JAVASCRIPT'];

const xSearch = (phrase, word) => phrase.replace('x', word);

const orderArray = array => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i].localeCompare(array[j]) === -1) {
        const tempString = array[i];
        array[i] = array[j];
        array[j] = tempString;
      }
    }
  }
  return array;
}

const concatString = phrase => (`${phrase} Minhas cinco principais habilidades são: ${orderArray(skills)}`);

console.log(concatString(xSearch('Tryber x aqui!', 'Daniel')));
