const toggle = document.querySelector(".main-nav-toggle");
const navbar = document.querySelector(".main-navigation");
const toggleLines = document.querySelectorAll(".main-toggle-line");
const slideInElements = document.querySelectorAll(".slide-in");
const backToTop = document.querySelector(".back-to-top");
const mainHeader = document.querySelector(".main-header");
const navLinks = document.querySelectorAll(".link-decoration");


const backToTopFunction = () => {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.classList.add("active");
        mainHeader.classList.add("active");
    } else {
        backToTop.classList.remove("active");
        mainHeader.classList.remove("active");

    }
};

toggle.addEventListener("click", () => {

    if (toggle.getAttribute("aria-expanded") === "false") {
        toggle.setAttribute("aria-expanded", "true");
    } else {
        toggle.setAttribute("aria-expanded", "false");
    }


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


navLinks.forEach(link => {

    link.addEventListener("click", () => {
        document.title = `Quinto Technologies | ${link.innerText.toLowerCase()}`;
    });
});


window.onscroll = () => {
    backToTopFunction();
}

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Quinto Technologies";
});