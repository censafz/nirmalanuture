
// navbar
var lastScrollTop = 0;
var header = document.querySelector('header');

window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-50px'
    navbar.classList.remove('active')
  } else {
    header.style.top = '0'
    navbar.classList.remove('active')
  }
  lastScrollTop = scrollTop
})

// menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};
