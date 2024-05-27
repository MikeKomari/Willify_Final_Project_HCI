import { errorInput, errorValidationPassed, accounts } from "./Register.js";

const errorMessages = {
  default: `<h5 class="form__errorMessage">Please input the required form.</h5>`,

  email: `<h5 class="form__errorMessage emailRegex">Email should be in the right format(name@company.dom).</h5>`,

  password: `<h5 class="form__errorMessage passRegex">Password should be 8 characters long, 1 digit, 1 upper and lowercase, 1 special character.</h5>`,

  invalid: `<h5 class="form__errorMessage passRegex">Invalid login or password. Please try again.</h5>`,
};

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let errorControl = [];

const inputs = document.querySelectorAll("[data-form-input]");
const submitButton = document.querySelector(".submitButton--login");

const submit = submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("haerin");
  const formValue = {};

  const tempAccount = {};

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
      if (emailRegex.test(input.value)) {
        tempAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .emailRegex`;
        errorInput(inputForParameter, errorMessageClass, errorMessages.email);
      }
    }

    //validasi password
    if (inputForParameter === "pass") {
      if (passwordRegex.test(input.value)) {
        tempAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .passRegex`;
        errorInput(
          inputForParameter,
          errorMessageClass,
          errorMessages.password
        );
      }
    }
  });

  // console.log(errorControl);
  showError(errorControl);
});

function showError(errorControl) {
  errorControl.forEach((errorValue) => {
    const errorMessageTemp = errorMessages.default;
    const errorMessageClass = `.form__errorMessage`;

    errorInput(errorValue, errorMessageClass, errorMessageTemp);
  });
}
