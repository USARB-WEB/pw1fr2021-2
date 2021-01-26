class Person{
    constructor(name, age){
        console.log("Constructor called when new operator invoked");
        this.name = name;
        this.age = age;
    }

    getAge(){
        return this.age;
    }
}


const personOne = new Person("Ion Creanga", 55);
console.log(personOne.getAge());

const personTwo = new Person("Mihai Eminescu", 53);
console.log(personTwo.getAge());

console.log(personOne);