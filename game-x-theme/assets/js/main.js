
document.addEventListener("DOMContentLoaded", function () {
  console.log("Game-X Theme JS Loaded");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("Game-X Theme JS Loaded");

  // Example: Smooth scroll for anchor links
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Example: Toggle mobile nav (if implemented)
  const toggleBtn = document.querySelector(".toggle-nav");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
