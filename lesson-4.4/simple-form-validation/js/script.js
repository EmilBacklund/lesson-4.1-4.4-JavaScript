const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  //! This code under get easily repetetive, so it's good practice
  //! to make a function to make it shorter. Like I did above.
  //   if (firstName.value.trim().length > 0) {
  //     firstNameError.style.display = "none";
  //   } else {
  //     firstNameError.style.display = "block";
  //   }

  //   if (lastName.value.trim().length > 3) {
  //     lastNameError.style.display = "none";
  //   } else {
  //     lastNameError.style.display = "block";
  //   }
  console.log("hello");
}

form.addEventListener("submit", validateForm);

//! This is the function we use to make the
//! code shorter and better looking.
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
