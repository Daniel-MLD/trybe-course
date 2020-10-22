    
const assert = require('assert');
const { type } = require('os');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  const sumChar = (result, word) => result += word.match(/a/gi).length;
  return names.reduce(sumChar, 0);
}

assert.deepEqual(containsA(), 20);