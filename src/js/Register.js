//Variabel Input
const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const ageInput = document.getElementById("ageInput");
const genderInput = document.getElementById("genderInput");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const pass2Input = document.getElementById("pass2Input");

const ageControl = document.querySelector(".ageInputControl");
const genderControl = document.querySelector(".genderInputControl");
const usernameControl = document.querySelector(".usernameInputControl");
const emailControl = document.querySelector(".emailInputControl");
const passwordControl = document.querySelector(".passInputControl");
const passwordConfirmationControl =
  document.querySelector(".pass2InputControl");
const termsControl = document.querySelector(".termsInputControl");

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

const submitButton = document.querySelector(".submitButton");

// Error Control
const formErrors = [];

const errorMessage = `<h5 class="form__errorMessage">Please input the required form.</h5>
`;

const errorMessageAgeGenderTerm = `<h5 class="form__errorMessage--Age--Gender--Term">
Please input the required form.
</h5>
`;

const errorMessageRemoval = `<h5 class="form__errorMessage"></h5>
`;

// Login Accounts Control
const accounts = [
  {
    email: "joseph@gmail.com",
    password: "123123213",
  },
];

const submit = submitButton.addEventListener("click", function (e) {
  const firstNameValue = firstName.value;
  const secondNameValue = secondName.value;
  const ageInputValue = ageInput.value;
  const genderInputValue = genderInput.value;
  const usernameInputValue = usernameInput.value;
  const emailInputValue = emailInput.value;
  const passInputValue = passInput.value;
  const pass2InputValue = pass2Input.value;

  if (!usernameInputValue) {
    // formErrors.push("usernameControl");
    usernameControl.insertAdjacentHTML("afterend", errorMessage);
    return;
  } else {
    // usernameControl.insertAdjacentHTML("afterend", errorMessageRemoval);
  }

  console.log(
    firstNameValue,
    secondNameValue,
    ageInputValue,
    genderInputValue,
    usernameInputValue,
    emailInputValue,
    passInputValue,
    pass2InputValue
  );
});

function showError(formErrors) {
  formErrors.forEach((errorElements) => {
    if (
      errorElements === "ageControl" ||
      errorElements === "genderControl" ||
      errorElements === "termsControl"
    ) {
      errorElements.insertAdjacentHTML("afterend", errorMessageAgeGenderTerm);
    } else {
      errorElements.insertAdjacentHTML("afterend", errorMessage);
    }
  });
}
