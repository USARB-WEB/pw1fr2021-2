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