let division = (a, b) =>  a / b;

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  division = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(division(10, 2)).toBe(5);
  expect(division).toHaveBeenCalled();
  expect(division).toHaveBeenCalledTimes(1);
  expect(division).toHaveBeenCalledWith(10, 2);
});
