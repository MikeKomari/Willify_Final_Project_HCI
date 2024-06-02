// const carousel = document.querySelector(".carouselContainerForItems");
// const carouselItem = Array.from(document.querySelectorAll(".carousel__item"));

// // let i = 0;
// // for (let car in carouselItem) {
// //   console.log(i);
// //   i++;
// // }

// let currentIndex = 0;

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

// console.log(carouselContainer);

// carouselItems[carouselLength - 1].style.transform = "scale(10)";

carouselItems.forEach((item, index) => {
  item.style.transition = "transform 0.5s ease-out";
});

setInterval(() => {
  scrollPos += 80;
  carouselContainer.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
  // if (scrollPos >= carouselWidthChanged) {
  //   let firstItem = carouselItems.shift();

  //   carouselItems.push(firstItem);

  //   carouselItems[carouselLength - 1].appendChild(firstItem);
  //   carouselLength++;
  //   carouselWidthChanged += 600;

  //   // Reset the scroll position
  //   // scrollPos = 0;

  //   console.log("haerin");
  // }

  if (scrollPos >= carouselWidthChanged) {
    let firstItem = carouselItems.shift();

    carouselItems.push(firstItem);

    let lastItem = carouselItems[carouselItems.length - 2];

    lastItem.insertAdjacentElement("afterend", firstItem);

    carouselWidthChanged += 300;

    console.log("haerin");
  }

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

// let currentWidth = carouselContainer.offsetWidth;
// carouselContainer.style.width = currentWidth + 600 + "px";

/*
  if (scrollPos >= carouselWidthChanged) {
    carouselIndex++;
    carouselLength++;

    if (
      carouselIndex < carouselItems.length &&
      carouselLength < carouselItems.length
    ) {
      carouselItems[carouselLength].insertAdjacentElement(
        "afterend",
        carouselItems[carouselIndex]
      );
    }

    carouselWidthChanged += 600;

    console.log("haerin");
  }
  */

// if (scrollPos >= carouselWidthChanged) {
//   // scrollPos = 0;
//   carouselItems[carouselIndex] = carouselItems[carouselLength++];
//   carouselIndex++;
//   carouselWidthChanged += 600;

//   carouselItems[carouselLength].insertAdjacentElement(
//     "afterend",
//     carouselItems[carouselIndex]
//   );

//   console.log("haerin");
// }
