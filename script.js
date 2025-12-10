console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.addEventListener("click", () => {
        alert("Welcome to the Encryptixx Blog!");
    });
});

