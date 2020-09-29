const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (object, key, value) => object[key] = value;

const listKeys = (object) => Object.keys(object);

const objectLength = (object) => {
  let size = 0;
  for (index in object) {
    size += 1;
  }
  return size;
};

const listValues = (object) => Object.values(object);

const totalStudents = (object) => {
  let total = 0;
  for (let index in object) {
    total += object[index].numeroEstudantes;
  }
  return total;
};

const getValueByNumber = (object, pos) => Object.values(object)[pos];

const verifyPair = (object, key, value) => {
  const listOfEntries = Object.entries(object);
  let verify = false;
  for (let index = 0; index < listOfEntries.length; index += 1) {
    const valuesString = listOfEntries[index][1].toString();
    if (listOfEntries[index][0] === key && listOfEntries[index][1] === value) {
      verify = true;
    }
  }
  return verify;
}

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

addProperty(lesson2, 'turno', 'manhã');
console.table(lesson2);

console.log(verifyPair(lesson1, 'numeroEstudantes', 20));
