const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('is-active');
})

if (nav.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = '';
}