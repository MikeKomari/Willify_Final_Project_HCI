import { accountState } from "../js/Accounts.js";
// console.log(accountState);

const showAllButton = document.querySelectorAll(".playlistDecoration__showAll");
const excessItems = document.querySelectorAll(".excess");
showAllButton.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    excessItems[index].classList.toggle("hidden");
  });
});
