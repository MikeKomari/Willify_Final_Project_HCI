const accounts = []; //object untukmengisi data akun

const inputs = document.querySelectorAll("[data-form-input]");
const submitButton = document.querySelector(".submitButton");

//error message sedikit berbeda
const specialInputs = ["ageInput", "genderInput", "termsInput"];

//object yang mengisi semua error message, daripada satu satu di define
const errorMessages = {
  ageGenderTerm: `<h5 class="form__errorMessage--Age--Gender--Term">
    Please input the required form.
  </h5>`,

  default: `<h5 class="form__errorMessage">Please input the required form.</h5>`,

  email: `<h5 class="form__errorMessage">Please input with the right format.</h5>`,

  password: `<h5 class="form__errorMessage">Please input the required form.</h5>`,
};

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

//array untuk mengisi
let errorControl = [];

function errorInput(inputForParameter, errorMessageClass) {
  const existingErrorMessage = document.querySelector(
    `.${inputForParameter}Control + ${errorMessageClass}`
  );

  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
}

function errorValidationPassed(inputForParameter, errorMessageClass) {
  const existingErrorMessage = document.querySelector(
    `.${inputForParameter}Control + ${errorMessageClass}`
  );

  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
}

const submit = submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const formValue = {};

  inputs.forEach((input) => {
    const inputForParameter = input.dataset.formInput;
    const formRule = input.dataset.formRule;

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

        const errorMessageClass = isSpecialInput
          ? `.form__errorMessage--Age--Gender--Term`
          : `.form__errorMessage`;

        errorValidationPassed(inputForParameter, errorMessageClass);
      }
    }

    //validasi email
    if (inputForParameter === "emailInput") {
      if (emailRegex.test(input.value)) {
        return;
      } else {
      }
    }
  });
  console.log(errorControl);
  showError(errorControl);
});

function showError(errorControl) {
  errorControl.forEach((errorValue) => {
    const errorElement = document.querySelector(`.${errorValue}Control`);
    let errorMessageTemp;
    let errorMessageClass;

    if (specialInputs.includes(errorValue)) {
      errorMessageTemp = errorMessages.ageGenderTerm;
      errorMessageClass = ".form__errorMessage--Age--Gender--Term";
    } else {
      errorMessageTemp = errorMessages.default;
      errorMessageClass = ".form__errorMessage";
    }

    const existingErrorMessage = document.querySelector(
      `.${errorValue}Control + ${errorMessageClass}`
    );
    if (!existingErrorMessage) {
      errorElement.insertAdjacentHTML("afterend", errorMessageTemp);
    }
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
