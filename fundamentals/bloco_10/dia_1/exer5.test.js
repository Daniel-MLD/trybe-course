const { obj1, obj2, obj3 } = require('./exer5');

describe('Compare if two objects are equal', () => {

  it('if two objects are equals', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(obj1).not.toStrictEqual(obj3);
    expect(obj2).not.toStrictEqual(obj3);
  })

});