// Toggle mobile menu
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
