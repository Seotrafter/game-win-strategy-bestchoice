// Custom JavaScript for Hero Blitz

document.addEventListener('DOMContentLoaded', function () {
  console.log("Welcome to Hero Blitz: RPG Roguelike with neon vibes!");

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// In your js/script.js file (or inline in your main HTML file)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("form").forEach(function(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "/thank-you.html";
    });
  });
});
