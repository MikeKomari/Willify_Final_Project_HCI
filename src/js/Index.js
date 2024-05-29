// sidebar
const hamburgerMenu = document.querySelector(".navbar__hamburgerMenu");
const navBar = document.querySelector(".sidebar-wrapper");
hamburgerMenu.addEventListener("click", function (e) {
  navBar.classList.remove("hidden");
  navBar.classList.toggle("hiddenWithAnimation");
  console.log("haerin");
});

//Best Seller
const checkOutBestSellerButton = document.querySelector(
  ".content__checkItOutBar"
);

// checkOutBestSellerButton.addEventListener("click", function (e) {
//   const targetElement = document.querySelector(".bestSellerContainer");

//   // Scroll to the element
//   targetElement.scrollIntoView({ behavior: "smooth" });
// });

checkOutBestSellerButton.addEventListener("click", function (e) {
  const targetElement = document.querySelector(".bestSellerContainer");

  // Get the position of the element
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;

  // Subtract the desired space from the position
  const scrollToPosition = targetPosition - 200; // Replace 100 with the desired space in pixels

  // Scroll to the position
  window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
});
