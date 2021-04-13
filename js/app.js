const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.navLinks');
const bars = document.querySelector('.fa-bars');

hamburger.addEventListener('click',()=>{
    links.classList.toggle("show")
    bars.classList.toggle('fa-times')
})