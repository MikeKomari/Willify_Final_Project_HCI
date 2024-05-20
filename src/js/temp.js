const passwordInput = document.querySelector(".register__input");
const emailInput = document.querySelector(".email");

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

const formErrors = [];

const accounts = [
  {
    email: "joseph@gmail.com",
    password: "123123213",
  },
];

function submit() {
  const passwordValue = passwordInput.value;
  const emailValue = emailInput.value;

  if (!passwordValue) {
    return;
  }

  if (emailRegex.test(emailValue)) {
    return;
  }

  const newAccount = {
    email: emailValue,
    password: passwordValue,
  };

  accounts.push(newAccount);
}

function showError(errorArray) {
  errorArray.forEach((errorElement) => {
    errorElement.classList.add("is-error");
  });
}

submitButton.addEventListener("click", function (e) {
  // Get the values of the input fields
  const firstNameValue = firstName.value;
  const secondNameValue = secondName.value;
  const ageInputValue = ageInput.value;
  const genderInputValue = genderInput.value;
  const usernameInputValue = usernameInput.value;
  const emailInputValue = emailInput.value;
  const passInputValue = passInput.value;
  const pass2InputValue = pass2Input.value;

  // Validate the input fields
  if (
    !firstNameValue ||
    !secondNameValue ||
    !ageInputValue ||
    !genderInputValue ||
    !usernameInputValue ||
    !emailInputValue ||
    !passInputValue ||
    !pass2InputValue
  ) {
    e.preventDefault(); // Prevent the form from being submitted
    alert("Please fill in all fields."); // Show an error message
    return;
  }

  if (!emailRegex.test(emailInputValue)) {
    e.preventDefault(); // Prevent the form from being submitted
    alert("Please enter a valid email address."); // Show an error message
    return;
  }

  if (passInputValue !== pass2InputValue) {
    e.preventDefault(); // Prevent the form from being submitted
    alert("The passwords do not match."); // Show an error message
    return;
  }

  // If the code reaches this point, the form is valid and will be submitted
});
