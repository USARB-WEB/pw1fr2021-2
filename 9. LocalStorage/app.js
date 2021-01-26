document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = localStorage.getItem("name");
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
})