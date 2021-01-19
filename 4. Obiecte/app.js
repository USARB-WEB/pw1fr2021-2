const person = {
    name: "Ion Creanga",
    contacts: {
        phone: "+37312345678",
        email: "email@email.com"
    }
};


document.getElementById("personName").innerHTML = person.name;
document.getElementById("personPhone").innerHTML = person.contacts.phone;
document.getElementById("personEmail").innerHTML = person.contacts.email;
console.log(person);

const number = 123;

document.querySelectorAll(".element").forEach(el => el.innerHTML = number);

let i = 10;
document.querySelectorAll(".elementNumber").forEach(el => {
    el.innerHTML = i;
    i--;
})