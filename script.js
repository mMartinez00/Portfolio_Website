const nav = document.getElementById("nav");
const nav__links = document.querySelectorAll(".nav__link");
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
}

window.addEventListener("scroll", () => {
  throttle(scroll, 250);
});
