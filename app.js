const toggle = document.querySelector(".main-nav-toggle");
const navbar = document.querySelector(".main-navigation");
const toggleLines = document.querySelectorAll(".main-toggle-line");
const slideInElements = document.querySelectorAll(".slide-in");
const backToTop = document.querySelector(".back-to-top");


const backToTopFunction = () => {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
};

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



window.onscroll = () => {
    backToTopFunction();
}

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});