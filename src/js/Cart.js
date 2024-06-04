import { Account } from "../js/Auth.js";
import { getAccountState } from "./Accounts.js";
const account = new Account();
//cart open and close
const cartButton = document.querySelector(".navbar__navCart");
const popUp = document.querySelector(".pop-up-wrapper");
const container = document.querySelector(".wrapper");
const body = document.querySelector("body");

cartButton.addEventListener("click", function (e) {
  popUp.classList.toggle("hidden");
});

container.addEventListener("click", function (e) {
  if (e.target === container) {
    popUp.classList.add("hidden");
  }
});

//song detail variables
const songImage = document.querySelector(".songAuthorDetail__img");
const songTitle = document.querySelector(".textUpper__title").textContent;
const songAuthor = document.querySelector(".songAuthor").textContent;
const cartItemHomePage = document.querySelectorAll(".cartItemHome");
const imageString = songImage.src;
// cart logic
let itemsInCart = 0;

const cartContainerEl = document.querySelector(".cart__container");
const addToCartButton = document.querySelectorAll(".add__to__cart");

if (getAccountState() === 0) {
  addToCartButton.forEach((button) => {
    button.classList.add("hidden");
  });
} else {
  addToCartButton.forEach((button) => {
    button.classList.remove("hidden");
  });
}

export function renderCartUI(imageString, songTitle, songAuthor) {
  // console.log(imageString, songTitle, songAuthor);
  if (itemsInCart > 0) {
    cartItemHomePage.forEach((item) => item.classList.remove("hidden"));
    cartItemHomePage.forEach((item) => (item.textContent = itemsInCart));
  } else {
    cartItemHomePage.forEach((item) => item.classList.add("hidden"));
  }
  const markup = `<div class="cart__item">
  <img class="imageStringCartImage" src="${imageString}" />
  <div class="cart__desc">
    <p class="cart__title">${songTitle}</p>
    <p class="cart__price">
      ${songAuthor} <span class="cart__price-accent">$6.99</span>
    </p>
  </div>
  <button class="remove">
  <img src="../../public/images/Trash.png" alt="remove item" style="width: 14px; height: 16px;">
              </button>
</div>
`;

  cartContainerEl.insertAdjacentHTML("afterbegin", markup);

  const cartItem = document.querySelector(".cart__item");

  checkoutButton.addEventListener("click", function () {
    if (cartItem) {
      cartItem.remove();
    }
    checkoutButton.classList.add("hidden");
    itemsInCart = 0;
    checkItemCartNum();
  });

  const removeItemInCart = document.querySelector(".remove");

  removeItemInCart.addEventListener("click", function () {
    if (cartItem) {
      cartItem.remove();
    }
    itemsInCart -= 1;
    checkItemCartNum();
  });
}

//checkoutbutton
const checkoutButton = document.querySelector(".checkout");

const emptyCart = document.querySelectorAll(".pop-up_content_empty");

addToCartButton.forEach((button) => {
  button.addEventListener("click", function () {
    renderCartUI(imageString, songTitle, songAuthor);
    itemsInCart += 1;
    checkItemCartNum();
  });
});
// addToCartButton.addEventListener("click", function () {
//   renderCartUI();
//   itemsInCart += 1;
//   checkItemCartNum();
// });

// renderCartUI(imageString, songTitle, songAuthor);

function checkItemCartNum() {
  if (itemsInCart != 0) {
    checkoutButton.classList.remove("hidden");
    emptyCart.forEach((cart) => {
      cart.classList.add("hidden");
    });
    // emptyCart.classList.add("hidden");
    console.log("haerin");
  } else {
    checkoutButton.classList.add("hidden");
    emptyCart.forEach((cart) => {
      cart.classList.remove("hidden");
    });
    // emptyCart.classList.remove("hidden");
    console.log("minji");
  }
}
