// Typed.js Effect
var typed = new Typed("#typed-text", {
  strings: [
    "Web Developer 💻",
    "UI/UX Designer 🎨",
    "Problem Solver ⚡",
    "Tech Enthusiast 🚀"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Initialize AOS Animations
AOS.init({
  duration: 1000,
  once: true
});
