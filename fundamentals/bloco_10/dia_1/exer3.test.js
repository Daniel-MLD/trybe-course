const { nodeInternals } = require('stack-utils');
const myRemoveWithoutCopy = require('./exer3');

describe('myRemoveWithoutCopy', () => {

  it('if returns array without item', ()=> {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('if does not return the parameter array', ()=> {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('if array passed by parameter has changed', ()=> {
    const numbers = [1, 2, 3, 4];
    myRemoveWithoutCopy(numbers, 3);
    expect(numbers).toEqual([1, 2, 4]);
  });

  it('if returns identical array', ()=> {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});