const
    toggle = document.querySelector(".main-nav-toggle"),
    navbar = document.querySelector(".main-navigation"),
    toggleLines = document.querySelectorAll(".main-toggle-line"),
    slideInElements = document.querySelectorAll(".slide-in"),
    backToTop = document.querySelector(".back-to-top"),
    mainHeader = document.querySelector(".main-header"),
    navLinks = document.querySelectorAll(".link-decoration");


const backToTopFunction = () => {

    if (document.documentElement.scrollTop > 20) {
        backToTop.classList.add("active");
        mainHeader.classList.add("active");
    } else {
        backToTop.classList.remove("active");
        if (toggle.getAttribute("aria-expanded") === "false") {
            mainHeader.classList.remove("active");
        }


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

    if (document.documentElement.scrollTop < 20) {
        mainHeader.classList.toggle("active");
    }


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