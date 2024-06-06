import { Account } from "../js/Auth.js";
import { getAccountState } from "./Accounts.js";
const account = new Account();

// console.log(accountState);

const showAllButton = document.querySelectorAll(".playlistDecoration__showAll");
const excessItems = document.querySelectorAll(".excess");
showAllButton.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    excessItems[index].classList.toggle("hidden");
  });
});

const playlistTitle = document.querySelectorAll(".playlist__itemTextPlaylist");
const playlistTitleDesc = document.querySelectorAll(
  ".playlist__itemTextDescPlaylist"
);
const madeForYou = document.querySelector(".playlistDecoration__textMain");
let playlistIndex = 0;

function collectionUpdate() {
  madeForYou.textContent = `Made for ${account.getLatestFirstName()}`;
  if (getAccountState() === 1) {
    playlistTitle.forEach((title) => {
      title.textContent = `Mix For You #${playlistIndex + 1}`;
      playlistIndex++;
    });

    playlistTitleDesc.forEach((desc) => {
      desc.textContent = `Your mixtape of fresh music. Enjoy!`;
    });
  } else {
    madeForYou.textContent = "Playlist";
    playlistTitle.forEach((title) => {
      title.textContent = `Mood Booster`;
    });

    playlistTitleDesc.forEach((desc) => {
      desc.textContent = `Hits to boost your mood`;
    });
  }
}

collectionUpdate();

const songSearch = document.querySelector(".searchInput");
const allSongs = document.querySelectorAll(".playlist__itemText");

songSearch.addEventListener("input", function (e) {
  let searchValue = e.target.value.toLowerCase();
  allSongs.forEach((song) => {
    if (song.textContent.toLowerCase().includes(searchValue)) {
      song.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      song.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});
