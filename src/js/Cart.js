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

// counter logic
let itemsInCart = 0;
const incrementButton = document.querySelector(".plus");
const decrementButton = document.querySelector(".minus");

const itemsInCartElement = document.querySelector(".item_count_index");

incrementButton.addEventListener("click", function (e) {
  itemsInCart += 1;
  itemsInCartElement.textContent = itemsInCart;
});

decrementButton.addEventListener("click", function (e) {
  if (itemsInCart > 0) {
    itemsInCart -= 1;
    itemsInCartElement.textContent = itemsInCart;
  }
});

const cartContainerEl = document.querySelector(".cart__container");
const addToCartButton = document.querySelector(".add_to_cart");

function renderCartUI(count = itemsInCart) {
  const markup = `<div class="cart__item">
  <img src="images/image-product-1-thumbnail.jpg" />
  <div class="cart__desc">
    <p class="cart__title">Fall Limited Edition Sneakers</p>
    <p class="cart__price">
      $125.00 x ${count} <span class="cart__price-accent">$${
    125 * count
  }.00</span>
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
    numberInBucketCart = 0;
    checkItemCartNum();
  });

  const removeItemInCart = document.querySelector(".remove");

  removeItemInCart.addEventListener("click", function () {
    if (cartItem) {
      cartItem.remove();
    }
    numberInBucketCart -= 1;
    checkItemCartNum();
  });
}

//checkoutbutton
const checkoutButton = document.querySelector(".checkout");

let numberInBucketCart = 0;

const emptyCart = document.querySelector(".pop-up_content_empty");
addToCartButton.addEventListener("click", function () {
  renderCartUI();
  numberInBucketCart += 1;
  checkItemCartNum();
});

function checkItemCartNum() {
  if (numberInBucketCart != 0) {
    checkoutButton.classList.remove("hidden");
    emptyCart.classList.add("hidden");
    console.log("haerin");
  } else {
    checkoutButton.classList.add("hidden");
    emptyCart.classList.remove("hidden");
    console.log("minji");
  }
}
