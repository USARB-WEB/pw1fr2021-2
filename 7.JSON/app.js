const person = {
    name: "Ion Creanga",
    marks: [9, 10, 9],
    age: 50
};

console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personParsed = JSON.parse(personJSON);

console.log(personParsed);


console.log(personParsed.name);