const expandArrowLink = "public/images/Expand Arrow FAQ.png";
const rightArrowLink = "public/images/rightCarouselArrow.png";
const rightArrow = document.querySelectorAll(".faq__content--item--arrow");
const faqAnswer = document.querySelectorAll(".faq__content--item--answer");

rightArrow.forEach((arrow, index) => {
  faqAnswer[index].classList.add("hidden");
  let clickFlag = 0;
  arrow.addEventListener("click", function (e) {
    faqAnswer[index].classList.toggle("hidden");
    clickFlag = arrowChange(arrow, clickFlag);
  });
});

function arrowChange(clickedArrow, clickFlag) {
  if (clickFlag === 0) {
    clickedArrow.src = expandArrowLink;
    clickFlag = 1;
  } else {
    clickedArrow.src = rightArrowLink;
    clickFlag = 0;
  }
  return clickFlag;
}
