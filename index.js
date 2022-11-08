const ham = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".back-drop");
const close = document.querySelector(".close-btn");

function showNav() {
  backDrop.style.display = "block";
  mobile.style.display = "block";
}

function hideNav() {
  backDrop.style.display = "none";
  mobile.style.display = "none";
}

ham.addEventListener("click", () => {
  showNav();
});

close.addEventListener("click", () => {
  hideNav();
});
