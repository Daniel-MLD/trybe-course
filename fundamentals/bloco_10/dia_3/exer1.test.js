let generateRandomNumber = () => {
  const randomNumber = Math.random() * 100;
  return randomNumber
};

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  generateRandomNumber = jest.fn().mockReturnValue(10);

  expect(generateRandomNumber()).toBe(10);
  expect(generateRandomNumber).toHaveBeenCalled();
  expect(generateRandomNumber).toHaveBeenCalledTimes(1);
});