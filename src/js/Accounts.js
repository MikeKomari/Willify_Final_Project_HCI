//Not login === 0, login === 1
let accountState = 0;

export function accountStateLogin() {
  accountState = 1;
}

export function accountStateLogout() {
  accountState = 0;
}

export const accounts = []; //object untukmengisi data akun

console.log(accounts);
console.log(accountState);

//navbar change
const navAccount = document.querySelector(".navbar__account");
const loginRegisterButton = document.querySelectorAll(".buttonOne");
const accountIcon = document.querySelector(".userPNG");
function navChange() {
  if (accountState === 1) {
    loginRegisterButton.forEach((button) => {
      button.classList.add("hidden");
    });
    accountIcon.classList.remove("hidden");
  } else {
    accountIcon.classList.add("hidden");
    loginRegisterButton.forEach((button) => {
      button.classList.remove("hidden");
    });
  }
}

navChange();

/*
let accountState = localStorage.getItem('accountState') || 0;

export function accountStateLogin() {
  accountState = 1;
  localStorage.setItem('accountState', accountState);
}

export function accountStateLogout() {
  accountState = 0;
  localStorage.setItem('accountState', accountState);
}

export const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

// Whenever you modify accounts, make sure to update localStorage
// For example:
// accounts.push(newAccount);
// localStorage.setItem('accounts', JSON.stringify(accounts));

console.log(accounts);
console.log(accountState);
*/
