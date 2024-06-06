// import { errorInput, errorValidationPassed } from "../js/Register.js";
import { accountStateLogin, accountStateLogout } from "../js/Accounts.js";

import { Account } from "../js/Auth.js";
const accountList = new Account();

const errorMessages = {
  default: `<h5 class="form__errorMessage">Please input the required form.</h5>`,

  email: `<h5 class="form__errorMessage .emailRegex">Email should be in the right format(name@company.dom).</h5>`,

  password: `<h5 class="form__errorMessage .passRegex">Password should be 8 characters long, 1 digit, 1 upper and lowercase, 1 special character.</h5>`,
};

//Password Input validations
const digits = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let errorControl = [];

const inputs = document.querySelectorAll("[data-form-input]");
const invalid = document.querySelector(".login__invalid");
const submitButtonLogin = document.querySelector(".submitButton--login");

//error function
function errorInput(
  inputForParameter,
  errorMessageClass,
  errorMessageDisplayed
) {
  const errorElement = document.querySelector(
    `.${inputForParameter}InputControl`
  );

  const existingErrorMessage = document.querySelector(
    `.${inputForParameter}InputControl + ${errorMessageClass}`
  );
  if (!existingErrorMessage) {
    console.log(errorElement);
    errorElement.insertAdjacentHTML("afterend", errorMessageDisplayed);
  }
}

function errorValidationPassed(inputForParameter, errorMessageClass) {
  const existingErrorMessage = document.querySelector(
    `.${inputForParameter}InputControl + ${errorMessageClass}`
  );

  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
}

//main function
const submit = submitButtonLogin.addEventListener("click", function (e) {
  e.preventDefault();

  const tempAccount = {};

  let hasError = false;

  inputs.forEach((input) => {
    const inputForParameter = input.dataset.formInput;
    const formRule = input.dataset.formRule;
    let errorMessageClass;

    //Validasi apakah ada input atau tidak
    if (formRule === "requiredToFill") {
      if (!input.value) {
        if (!errorControl.includes(inputForParameter)) {
          errorControl.push(inputForParameter);
        }
        hasError = true;
        return;
      } else {
        errorControl = errorControl.filter(
          (item) => item !== inputForParameter
        );

        errorMessageClass = `.form__errorMessage`;
        errorValidationPassed(inputForParameter, errorMessageClass);

        tempAccount[`${inputForParameter}`] = input.value;
      }
    } else {
      tempAccount[`${inputForParameter}`] = input.value;
    }

    //validasi email
    if (inputForParameter === "email") {
      if (input.value.includes("@") && input.value.includes(".")) {
        tempAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .emailRegex`;
        errorInput(inputForParameter, errorMessageClass, errorMessages.email);
        hasError = true;
      }
    }

    //validasi password
    if (inputForParameter === "pass") {
      let hasDigit = false;
      let hasUpper = false;
      let hasLower = false;
      let hasSpecial = false;

      for (let i = 0; i < input.value.length; i++) {
        let char = input.value[i];

        if (digits.includes(char)) {
          hasDigit = true;
        } else if (upperCaseLetters.includes(char)) {
          hasUpper = true;
        } else if (lowerCaseLetters.includes(char)) {
          hasLower = true;
        } else if (specialCharacters.includes(char)) {
          hasSpecial = true;
        }
      }

      if (
        input.value.length >= 8 &&
        hasDigit &&
        hasUpper &&
        hasLower &&
        hasSpecial
      ) {
        tempAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .passRegex`;
        errorInput(
          inputForParameter,
          errorMessageClass,
          errorMessages.password
        );
        hasError = true;
      }
    }
  });

  console.log(errorControl);
  showErrorLogin(errorControl);

  if (hasError) return;

  let targetAccount = accountList.findAccount(tempAccount.email);

  if (
    targetAccount === undefined ||
    targetAccount.pass !== tempAccount.pass ||
    targetAccount.email !== tempAccount.email
  ) {
    invalid.classList.remove("hidden");
    hasError = true;
    return;
  } else {
    invalid.classList.add("hidden");
  }

  accountStateLogin();
  window.location.href = "HomePage.html";

  // console.log(tempAccount.email);
});

function showErrorLogin(errorControl) {
  errorControl.forEach((errorValue) => {
    console.log(errorValue);
    const errorMessageTemp = errorMessages.default;
    const errorMessageClass = `.form__errorMessage`;

    errorInput(errorValue, errorMessageClass, errorMessageTemp);
  });
}

// localStorage.clear();
