window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("stick",window.scrollY > 0);
});


var typed = new Typed('.type', {
    strings: [
    'Chemical Engineering Student Society', 
    'MNIT JAIPUR',
    ],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 1100,
    loop: true
  });

function scrollrin() {
    var scrol = document.querySelector('.scrolll')  
    scrol.scrollBy(350, 0);
  }
function scrolllin() {
    var scrol = document.querySelector('.scrolll')  
    scrol.scrollBy(-350, 0);
  } 