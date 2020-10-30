const uppercase = require('./exer1');

test('if param string returns with uppercase', (done) => {
  uppercase('teste', (result) => {
    expect(result).toBe('TESTE')
    done();
  });
});