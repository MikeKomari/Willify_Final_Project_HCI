//Carousel will scroll infinitely by implementing the following logic

const carouselContainer = document.querySelector(".carousel");
const carouselContainerItems = document.querySelector(
  ".carouselContainerForItems"
);
let carouselItems = Array.from(document.querySelectorAll(".carousel__item"));
let carouselLength = carouselItems.length;
let carouselIndex = 0;
let carouselWidthChanged = 100;
let carouselWidthChanged5Items = 500;

let scrollPos = 0;

carouselItems.forEach((item, index) => {
  //Give them a smoooth transition upon addition
  item.style.transition = "transform 0.5s ease-out";
});

setInterval(() => {
  //Scroll the carousel as usual
  scrollPos += 80;
  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });

  //If carousel has moved at least the width of one carousel item,
  //shift the first item to the end
  if (scrollPos >= carouselWidthChanged) {
    let firstItem = carouselItems.shift();

    carouselItems.push(firstItem);

    let lastItem = carouselItems[carouselItems.length - 2];

    lastItem.insertAdjacentElement("afterend", firstItem);

    carouselWidthChanged += 300;

    console.log("haerin");
  }

  //If carousel has moved at least the width of five carousel items,
  //increase the width of the carousel container
  //in order to keep scrolling infinitely
  if (scrollPos >= carouselWidthChanged5Items) {
    let currentWidth = carouselContainerItems.offsetWidth;
    carouselContainerItems.style.width = currentWidth + 400 + "px";

    let currentColumns = 12;

    carouselContainerItems.style.gridTemplateColumns = `repeat(${
      currentColumns + 1
    }, 1fr)`;
    carouselWidthChanged5Items += carouselWidthChanged5Items;
  }
}, 150);

//This implemention works but not as perfect as I intended. Since
//shifting the first element to the end is not as smooth as I wanted as
//it is just adding to the DOM which might give a glitching effect
