document.addEventListener("DOMContentLoaded", () => {
    //alert("Hello. Page loaded");
    document.body.style.backgroundColor = "red";
})

document.getElementById("greenButton").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
})

document.getElementById("yellowButton").addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
})


document.getElementById("blueButton").addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
})