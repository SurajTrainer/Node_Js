// just for testing get method or get.use method

const navLinks = document.getElementById('nav-links');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
