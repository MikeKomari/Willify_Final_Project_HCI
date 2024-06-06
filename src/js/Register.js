import {
  accounts,
  accountStateLogin,
  accountStateLogout,
  getAccountState,
} from "../js/Accounts.js";
import { Account } from "./Auth.js";

const accountList = new Account();

//Data-data from form input
const inputs = document.querySelectorAll("[data-form-input]");
const submitButton = document.querySelector(".submitButton");

const specialInputs = ["age", "gender"];

//All error message in one object
const errorMessages = {
  ageGenderTerm: `<h5 class="form__errorMessage--Age--Gender">
    Please input the required form.
  </h5>`,

  default: `<h5 class="form__errorMessage">Please input the required form.</h5>`,

  email: `<h5 class="form__errorMessage emailRegex">Email should be in the right format(name@company.dom).</h5>`,

  password: `<h5 class="form__errorMessage passRegex">Password should be 8 characters long, 1 digit, 1 upper and lowercase, 1 special character.</h5>`,

  password2: `<h5 class="form__errorMessage pass2Regex">Password does not match.</h5>`,

  terms: `<h5 class="form__errorMessage--Age--Gender terms">Please agree to the terms of service.</h5>`,

  username: `<h5 class="form__errorMessage .usernameError">Username is taken, please choose another username.</h5>`,
};

//Password validation
const digits = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//array untuk mengisi
let errorControl = [];

//Mengambil variabel error yang mana, misalnya email, lalu mengambil class untuk validasi apakah ada errorMessage, jika ada, tidak di print kembali.
//lalu mengambil message yang ingin di display, yang di passing dari object errorMessages
export function errorInput(
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
    errorElement.insertAdjacentHTML("afterend", errorMessageDisplayed);
  }
}

export function errorValidationPassed(inputForParameter, errorMessageClass) {
  const existingErrorMessage = document.querySelector(
    `.${inputForParameter}InputControl + ${errorMessageClass}`
  );

  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
}

const form = document.querySelector(".form");

const submit = submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let isError = false;

  const formValue = {};

  const newAccount = {};

  inputs.forEach((input) => {
    const inputForParameter = input.dataset.formInput;
    const formRule = input.dataset.formRule;
    let errorMessageClass;

    //Validasi apakah ada input atau tidak
    if (formRule === "requiredToFill") {
      if (!input.value || (input.type === "checkbox" && !input.checked)) {
        if (!errorControl.includes(inputForParameter)) {
          errorControl.push(inputForParameter);
        }
        isError = true;
        return;
      } else {
        errorControl = errorControl.filter(
          (item) => item !== inputForParameter
        );

        const isSpecialInput = specialInputs.includes(inputForParameter);

        errorMessageClass = isSpecialInput
          ? `.form__errorMessage--Age--Gender--Term`
          : `.form__errorMessage`;

        errorValidationPassed(inputForParameter, errorMessageClass);

        newAccount[`${inputForParameter}`] = input.value;
      }
    } else {
      newAccount[`${inputForParameter}`] = input.value;
    }

    // validasi username
    if (inputForParameter === "username") {
      let usernameTaken = accountList.findUsername(input.value);

      if (usernameTaken) {
        errorMessageClass = `.form__errorMessage .usernameError`;
        errorInput(
          inputForParameter,
          errorMessageClass,
          errorMessages.username
        );
        isError = true;
        return;
      } else {
        newAccount[`${inputForParameter}`] = input.value;
      }
    }

    //validasi email
    if (inputForParameter === "email") {
      if (input.value.includes("@") && input.value.includes(".")) {
        newAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .emailRegex`;
        errorInput(inputForParameter, errorMessageClass, errorMessages.email);
        isError = true;
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
        newAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .passwordRegex`;
        errorInput(
          inputForParameter,
          errorMessageClass,
          errorMessages.password
        );
        isError = true;
      }
    }

    //validasdi pass confirmation
    if (inputForParameter === "pass2") {
      if (newAccount["pass"] && newAccount["pass2"]) {
        errorMessageClass = `.form__errorMessage .pass2Regex`;
        if (newAccount["pass"] !== newAccount["pass2"]) {
          errorInput(
            inputForParameter,
            errorMessageClass,
            errorMessages.password2
          );
          isError = true;
          return;
        } else {
          newAccount[`${inputForParameter}`] = input.value;
          errorValidationPassed(inputForParameter, errorMessageClass);
        }
      }
    }
  });

  showError(errorControl);
  if (isError) return;

  accountList.add(newAccount);

  accountStateLogin();
  window.location.href = "HomePage.html";
});

function showError(errorControl) {
  errorControl.forEach((errorValue) => {
    let errorMessageTemp;
    let errorMessageClass;

    if (specialInputs.includes(errorValue)) {
      errorMessageTemp = errorMessages.ageGenderTerm;
      errorMessageClass = ".form__errorMessage--Age--Gender";
    } else if (errorValue === "terms") {
      errorMessageTemp = errorMessages.terms;
      errorMessageClass = `.form__errorMessage--Age--Gender .terms`;
    } else {
      errorMessageTemp = errorMessages.default;
      errorMessageClass = ".form__errorMessage";
    }

    errorInput(errorValue, errorMessageClass, errorMessageTemp);
  });
}
