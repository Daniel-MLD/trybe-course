const myFizzBuzz = require('./exer4');

describe('myFizzBuzz', () => {

  it('if a number divisible by 5 and 3 returns string fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('if a number divisible by 3 returns string fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  });

  it('if a number divisible by 5 returns string buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('if a number not divisible by 5 and 3, returns itself', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  it('if the parameter is not a number, returns false', () => {
    expect(myFizzBuzz('8')).toBeFalsy();
  });

});