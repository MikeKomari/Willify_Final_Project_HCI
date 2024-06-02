import { accountState } from "../js/Accounts.js";
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

if (accountState === 0) {
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
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                </svg>
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
