const toggle = document.querySelector(".main-nav-toggle"),
  navbar = document.querySelector(".main-navigation"),
  toggleLines = document.querySelectorAll(".main-toggle-line"),
  slideInElements = document.querySelectorAll(".slide-in"),
  backToTop = document.querySelector(".back-to-top"),
  mainHeader = document.querySelector(".main-header"),
  navLinks = document.querySelectorAll(".link-decoration"),
  root = document.querySelector(":root"),
  preLoader = document.querySelector(".pre-loader"),
  colorSelectors = document.querySelectorAll(".color-scheme");

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
  toggleLines.forEach((line) => {
    line.classList.toggle("active");
  });

  if (document.documentElement.scrollTop < 20) {
    mainHeader.classList.toggle("active");
  }
});

slideInElements.forEach((slideIn) => {
  slideIn.addEventListener("animationend", () => {
    slideIn.classList.remove("slide-in");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.title = `Quinto Technologies | ${link.innerText.toLowerCase()}`;
  });
});

window.onscroll = () => {
  backToTopFunction();
};

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.title = "Quinto Technologies";
});

const changeColorProperties = (color, colorVariant) => {
  root.style.setProperty("--main-accent", color);
  root.style.setProperty("--main-accent-900", colorVariant);
};

colorSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    switch (selector.dataset.color) {
      case "blue":
        changeColorProperties("#2C77D1", "#0C2C77");
        break;
      case "purple":
        changeColorProperties("#AE39E4", "#5D0684");
        break;
      case "orange":
        changeColorProperties("#DC3A04", "#8C1700");
        break;
      case "pink":
        changeColorProperties("#E9045C", "#BB004F");
        break;
      case "green":
        changeColorProperties("#07B7A6", "#016f63");
        break;
    }
  });
});

window.onload = () => {
  let height = `${window.innerHeight}px`;
  root.style.setProperty("--min-height", height);
  preLoader.classList.add("hidden");
};
