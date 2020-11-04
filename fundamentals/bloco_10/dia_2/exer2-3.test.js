const { users, findUserById, getUserName } = require('./exer2-3');

describe('getUserName - with promise', () => {

  it('should returns a UserName, when passing an id', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });

  it('should returns a error message, when passing an incorrect id ', () => {
    expect.assertions(1);
    return getUserName(3).catch((e) => {
      expect(e.error).toBe('User with 3 not found.');
    });
  });

});


describe('getUserName - with await async', () => {

  it('should returns a UserName, when passing an id', async () => {
    expect.assertions(1);
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });

  it('should returns a error message, when passing an incorrect id ', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (e) {
      expect(e.error).toBe('User with 3 not found.');
    }
  });

});
