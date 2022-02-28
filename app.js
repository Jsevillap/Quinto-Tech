const toggle = document.querySelector(".main-nav-toggle");
const navbar = document.querySelector(".main-navigation");
const toggleLines = document.querySelectorAll(".main-toggle-line");
const slideInElements = document.querySelectorAll(".slide-in");


toggle.addEventListener("click", () => {

    navbar.classList.toggle("active");
    toggleLines.forEach(line => {
        line.classList.toggle("active");
    });

});

slideInElements.forEach(slideIn => {

    slideIn.addEventListener("animationend", () => {
        slideIn.classList.remove("slide-in");
    });
});