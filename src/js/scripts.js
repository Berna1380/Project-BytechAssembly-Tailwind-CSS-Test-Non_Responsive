const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('close');
    menuBtn.classList.toggle('active');
});

window.onscroll = function() {stickyNavbar()};

let header = document.querySelector("header");
let sticky = header.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
