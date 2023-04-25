const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, msg) {
  input.parentElement.className = "form-control error";
  input.nextElementSibling.innerHTML = msg;
}

function showSuccess(input) {
  input.parentElement.className = "form-control success";
}

// function isValidEmail(email) {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

function checkRequired(input) {
  input.forEach((element) => {
    if (element.value === "") {
      showError(element, `${capitalizeFirstLetter(element.id)} is required`);
    } else {
      showSuccess(element);
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${capitalizeFirstLetter(
        input.id
      )}'s length must be at least ${min} chars`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${capitalizeFirstLetter(
        input.id
      )}'s length must be less than ${max} chars`
    );
  } else {
    showSuccess(input);
  }
}

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, `${capitalizeFirstLetter(email.id)} is not valid`);
  }
}

function checkPassword(pass1, pass2) {
  if (pass1.value === pass2.value) {
    showSuccess(pass2);
  } else {
    showError(pass2, "Your password do not match");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 30);
  checkEmail(email);
  checkPassword(password, password2);
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (userName.value === "") {
//     showError(userName, "username is required");
//   } else {
//     showSuccess(userName);
//   }

//   if (email.value === "") {
//     showError(email, "email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "email is not valid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "password is required");
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === "") {
//     showError(password2, "Please confirm your password");
//   } else if (password2.value === password.value) {
//     showSuccess(password2);
//   } else {
//     showError(password2, "Password is not match");
//   }
// });
