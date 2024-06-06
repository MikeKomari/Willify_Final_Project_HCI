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

let scrollFlag = 0;

setInterval(() => {
  if (scrollFlag === 0) {
    scrollPos += 80;
    if (scrollPos > 4650) {
      scrollFlag = 1;
    }
  } else {
    scrollPos -= 80;
    if (scrollPos < 80) {
      scrollFlag = 0;
    }
  }
  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
}, 150);
