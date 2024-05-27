// sidebar
const hamburgerMenu = document.querySelector(".navbar__hamburgerMenu");
const navBar = document.querySelector(".sidebar-wrapper");
hamburgerMenu.addEventListener("click", function (e) {
  navBar.classList.remove("hidden");
  navBar.classList.toggle("hiddenWithAnimation");
});
