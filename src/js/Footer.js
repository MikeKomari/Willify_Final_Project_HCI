const sliderLanguage = document.getElementById("sliderLabel");
const indonesiaText = document.querySelector(".primary");
const englishText = document.querySelector(".secondary");

let colorFlag = 1;

//Fpooter language button
sliderLanguage.addEventListener("click", function (e) {
  if (colorFlag) {
    setTimeout(() => {
      indonesiaText.style.color = "black";
      englishText.style.color = "white";
      colorFlag = 0;
    }, 200);
  } else {
    setTimeout(() => {
      indonesiaText.style.color = "white";
      englishText.style.color = "black";
      colorFlag = 1;
    }, 200);
  }
});

// responsive, same as @media (max-width: 768px)
let mediaScreenFlag = window.matchMedia("(max-width: 768px)");

//if under 768px, hide dropdown content
function screenTest(e) {
  if (e.matches) {
    const dropDownContents = document.querySelectorAll(".content__items");
    const dropDownArrows = document.querySelectorAll(".content__arrow");

    dropDownContents.forEach((dropDownContent, index) => {
      dropDownContent.classList.add("hidden");

      dropDownArrows[index].addEventListener("click", function (e) {
        dropDownContent.classList.toggle("hidden");
      });
    });
  }
}

mediaScreenFlag.addListener(screenTest);

screenTest(mediaScreenFlag);
