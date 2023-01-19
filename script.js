const nav = document.getElementById("nav");
const nav__links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("#about, #projects, #contact");
const text__El = document.querySelector(".text");
let throttlePause;
const text = "Hello I'm";
let speed = 300;
let i = 0;

function displayText() {
  if (i < text.length) {
    text__El.innerText += text.charAt(i);
    i++;

    setTimeout(displayText, speed);
  }
}

displayText();

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
    nav.classList.remove("nav--increase");
  }

  if (window.scrollY > 20) {
    nav.classList.add("nav--increase");
  }

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    nav.classList.remove("nav--increase");
  }

  activeLinkScroll();
}

function activeLinkScroll() {
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
  link.addEventListener("click", activeLinkScroll);
});

window.addEventListener("scroll", () => {
  throttle(scroll, 250);
});
