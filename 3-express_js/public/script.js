const navLinks = document.getElementById('nav-links');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
