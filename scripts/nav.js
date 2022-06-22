const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Nav bar slide in
    nav.classList.toggle("nav-active");

    // Burger animation
    burger.classList.toggle("toggle");

    // Link animations
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards 0.52s";
      }
    });
  });
};

navSlide();
