const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const carouselContainer = document.querySelector(".carousel");
const carouselContainerItems = document.querySelector(
  ".carouselContainerForItems"
);

const MAX_IMAGE_INDEX = 12;
let activeImage = 0;

let scrollPos = 0;

nextButton.addEventListener("click", function (e) {
  scrollPos += 550;

  if (scrollPos >= 4500) {
    scrollPos = 0;
  }
  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
  console.log("haerin");
});

prevButton.addEventListener("click", function (e) {
  scrollPos -= 550;

  if (scrollPos <= 0) {
    scrollPos = 4550;
  }

  // Calculate the position from the left
  //   let leftPos = carouselContainer.scrollWidth - scrollPos;

  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});
