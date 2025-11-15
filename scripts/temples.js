// Footer year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Last modified
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
    header.classList.toggle("menu-open");

    // Change icon
     if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

