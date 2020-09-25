const factorialNumber = number => {
  let numFact = number;
  for (let i = 1; i < number; i += 1) {
    numFact = numFact * i;
  }
  return numFact;
}

console.log(factorialNumber(4));

const bigWord = phrase => {
  wordArray = phrase.split(" ");
  wordCompare = wordArray[0];
  for (let i = 1; i < wordArray.length; i += 1) {
    if (wordArray[i].length > wordCompare.length) {
      wordCompare = wordArray[i];
    }
  }
  return wordCompare;
}

console.log(bigWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
