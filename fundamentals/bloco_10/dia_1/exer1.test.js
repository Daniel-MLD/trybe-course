const sum = require('./exer1');

describe('sum', () => {
  
  test('sum two values', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('sum two values', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('not a number throw error', () => {
    expect(() => sum(4,'5')).toThrow()
  });

  test('throw error message', () => {
    expect(() => sum(4,'5')).toThrow(/parameters must be numbers/);
  });

});