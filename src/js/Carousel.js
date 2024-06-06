const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const carouselContainer = document.querySelector(".carousel");
const carouselContainerItems = document.querySelector(
  ".carouselContainerForItems"
);

const MAX_IMAGE_INDEX = 12;
let activeImage = 0;
let scrollPos = 0;

// If nextButton is clicked, scroll to the left
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

// If prevButton is clicked, the same mechanic but to the right. Thus, '-'.
prevButton.addEventListener("click", function (e) {
  scrollPos -= 550;

  if (scrollPos <= 0) {
    scrollPos = 4550;
  }

  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});
