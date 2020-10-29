const { test, expect } = require('@jest/globals');
const myRemove = require('./exer2');

describe('myRemove', () => {

  test('returns expected array without item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('does not return the parameter array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('array passed by parameter has not changed', () => {
    const numbers = [1, 2, 3, 4];
    myRemove(numbers, 3);
    expect(numbers).toEqual([1, 2, 3, 4]);
  });

  test('returns identical array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});