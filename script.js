const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
