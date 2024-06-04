import { getAccountState, accounts } from "../js/Accounts.js";
import { Account } from "../js/Auth.js";
const account = new Account();

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

const sidebarName = document.querySelectorAll(".username__name");
const sidebarUsername = document.querySelectorAll(".username__username");
// let accountIndex = account.length;
// console.log(account.getUsername());

if (getAccountState() === 1) {
  const username = account.getUsername();
  const latestFirstName = account.getLatestFirstName();
  const latestSecondName = account.getLatestSecondName();

  if (latestFirstName === "" || latestSecondName === "") {
    sidebarName.forEach((name) => {
      name.innerHTML = `@${username}`;
    });
  } else {
    sidebarName.forEach((name) => {
      name.innerHTML = `${latestFirstName} ${latestSecondName}`;
    });
  }
  sidebarUsername.forEach((user) => {
    user.innerHTML = `@${username}`;
  });
} else {
  sidebarName.forEach((name) => {
    name.innerHTML = `Guest`;
  });
  sidebarUsername.forEach((username) => {
    username.innerHTML = `Guest`;
  });
}
