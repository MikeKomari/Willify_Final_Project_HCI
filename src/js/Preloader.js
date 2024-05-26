const loaderContainer = document.querySelector(".loading-screen");
const preLoader = document.querySelector(".preloaderWrapper");
const preLoaderContainer = document.querySelector(".preloader");

const pageContent = document.querySelector(".wrapper");

// function doAll() {
//   // console.log("haerin");
//   setTimeout(() => {
//     loaderContainer.classList.add("hidden");
//     pageContent.classList.add("visible");
//   }, 5000);
// }

// doAll();

function curtainTesting() {
  setTimeout(() => {
    preLoader.classList.add("curtainAnimation");
  }, 9200);

  setTimeout(() => {
    preLoaderContainer.classList.add("hiddenPreloader");
    pageContent.classList.add("visiblePreloader");
  }, 12200);
}

curtainTesting();
//click to skip (ide)

preLoader.addEventListener("dblclick", function (e) {
  preLoaderContainer.classList.add("hiddenPreloader");
  pageContent.classList.add("visiblePreloader");
});
