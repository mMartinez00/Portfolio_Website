const nav = document.getElementById("nav");
const nav__links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("#about, #projects, #contact");
let throttlePause;

function throttle(callback, delay) {
  if (throttlePause) return;

  throttlePause = true;

  setTimeout(() => {
    callback();

    throttlePause = false;
  }, delay);
}

function scroll() {
  if (window.scrollY === 0) {
    nav.classList.remove("nav--shadow");
  }

  if (window.scrollY > 20) {
    nav.classList.add("nav--shadow");
  }

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nav.classList.remove("nav--shadow");
  }

  b();
}

function a() {
  let current = document.querySelector(".nav__link--active");

  current.className = "nav__link";

  this.classList.add("nav__link--active");
}

function b() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  nav__links.forEach((link) => {
    link.classList.remove("nav__link--active");

    if (link.innerText.toLowerCase() === current) {
      link.classList.add("nav__link--active");
    }
  });
}

nav__links.forEach((link) => {
  link.addEventListener("click", a);
});

window.addEventListener("scroll", () => {
  throttle(scroll, 250);
});
