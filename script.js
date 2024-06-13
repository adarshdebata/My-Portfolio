//menu
let menuIcon = document.querySelector('#menuIcon');
let navBar = document.querySelector('nav');

menuIcon.oclick = () => {
    menuIcon.classList.toggle('bx-x');
}
// scrolling 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    // sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
