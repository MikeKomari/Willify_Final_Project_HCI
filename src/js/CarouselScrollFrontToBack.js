const carouselContainer = document.querySelector(".carousel");
const carouselContainerItems = document.querySelector(
  ".carouselContainerForItems"
);
let carouselItems = Array.from(document.querySelectorAll(".carousel__item"));
let carouselLength = carouselItems.length;
// console.log(carouselLength);
let carouselIndex = 0;
let carouselWidthChanged = 100;
let carouselWidthChanged5Items = 500;

let scrollPos = 0;

carouselItems.forEach((item, index) => {
  item.style.transition = "transform 0.5s ease-out";
});

setInterval(() => {
  if (scrollPos < 4550) {
    untilMax();
  } else {
    returnToZero();
  }
  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
}, 150);

function untilMax() {
  while (scrollPos < 4550) {
    scrollPos += 80;
  }
}

function returnToZero() {
  while (scrollPos > 0) {
    scrollPos -= 80;
  }
}
