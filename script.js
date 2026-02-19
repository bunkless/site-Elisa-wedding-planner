'use strict';

// typed js
let typing = new Typed(".typing",{
    strings : ["AUTENTICĂ", "UNICĂ", "MAGICĂ", "SPECIALĂ", "SPUSĂ ÎN STILUL TĂU", "LEGATĂ DE PROMISIUNI"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
})


// scrool butoon top

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 580) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// AOS animation

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});




