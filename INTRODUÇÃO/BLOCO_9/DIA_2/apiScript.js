const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const h2 = document.getElementById('jokeContainer');
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2.innerText = data.joke)
    .catch();
};

let numbersResult = [2, 3, 5, 10];

const numbersWorks = () => {
  return new Promise((resolve, reject) => {
    let numbers = [];
    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.round((Math.random() * 50));
      numbers.push(Math.pow(randomNumber, 2));
    }
    const total = numbers.reduce((result, current) => result + current);
    if (total >= 8000) {
      return reject(total);
    }
    resolve(total);
  });
}

numbersWorks()
.then(total => { 
numbersResult = numbersResult.map((number) => total / number)
console.log(numbersResult);
return numbersResult;
})
.then(thenArray => console.log(thenArray.reduce((result, current) => result + current)))
.catch(total => console.log('É mais de oito mil! Essa promise deve estar quebrada!' + total));

window.onload = () => fetchJoke();