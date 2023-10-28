const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const hide = document.querySelector('#sOh')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
    toggleIcon.classList.remove('active');
    navMenu.classList.remove('active');
}))

