const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(animal => animal.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 1000)
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsList = Animals.filter(animal => animal.age === age);
      if (animalsList.length !== 0) {
        return resolve(animalsList);
      }
      return reject('Nenhum animal com essa idade!');
    }, 1000);
  })
);

const getAnimal = (nameOrAge) => {
  if (typeof nameOrAge === 'string') {
    return findAnimalByName(nameOrAge).then((animal) => animal);
  }
  if (typeof nameOrAge === 'number') {
    return findAnimalByAge(nameOrAge).then((list) => list);
  }  
};

module.exports = { findAnimalByName, getAnimal };
