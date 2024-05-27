export const accounts = []; //object untukmengisi data akun

const inputs = document.querySelectorAll("[data-form-input]");
const submitButton = document.querySelector(".submitButton");

//error message sedikit berbeda
const specialInputs = ["age", "gender"];

//object yang mengisi semua error message, daripada satu satu di define
const errorMessages = {
  ageGenderTerm: `<h5 class="form__errorMessage--Age--Gender">
    Please input the required form.
  </h5>`,

  default: `<h5 class="form__errorMessage">Please input the required form.</h5>`,

  email: `<h5 class="form__errorMessage emailRegex">Email should be in the right format(name@company.dom).</h5>`,

  password: `<h5 class="form__errorMessage passRegex">Password should be 8 characters long, 1 digit, 1 upper and lowercase, 1 special character.</h5>`,

  password2: `<h5 class="form__errorMessage pass2Regex">Password does not match.</h5>`,

  terms: `<h5 class="form__errorMessage--Age--Gender terms">Please agree to the terms of service.</h5>`,
};

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

const submit = submitButton.addEventListener("click", function (e) {
  e.preventDefault();

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

    //validasi email
    if (inputForParameter === "email") {
      if (emailRegex.test(input.value)) {
        newAccount[`${inputForParameter}`] = input.value;
        return;
      } else {
        errorMessageClass = `.form__errorMessage .emailRegex`;
        errorInput(inputForParameter, errorMessageClass, errorMessages.email);
      }
    }

    //validasi password
    if (inputForParameter === "pass") {
      if (passwordRegex.test(input.value)) {
        newAccount[`${inputForParameter}`] = input.value;
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
          return;
        } else {
          newAccount[`${inputForParameter}`] = input.value;
          errorValidationPassed(inputForParameter, errorMessageClass);
        }
      }
    }
  });

  accounts.push(newAccount);
  // console.log(errorControl);
  showError(errorControl);
});
console.log(accounts);

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

/*
if (
      errorValue === "ageInput" ||
      errorValue === "genderInput" ||
      errorValue === "termsInput"
    ) {
      const existingErrorMessage = document.querySelector(
        `.${errorValue}Control + .form__errorMessage--Age--Gender--Term`
      );
      if (!existingErrorMessage) {
        errorElement.insertAdjacentHTML("afterend", errorMessageAgeGenderTerm);
      }
    } else {
      const existingErrorMessage = document.querySelector(
        `.${errorValue}Control + .form__errorMessage`
      );
      if (!existingErrorMessage) {
        errorElement.insertAdjacentHTML("afterend", errorMessage);
      }
    }
*/
