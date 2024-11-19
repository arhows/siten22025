const navItems = document.querySelectorAll(".nav-item");
const mainNav = document.querySelector(".nav-container");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    mainNav.style.borderColor = "#364137";
  });

  item.addEventListener("mouseleave", () => {
    mainNav.style.borderColor = "transparent";
  });
});
