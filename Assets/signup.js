const Name = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("password");

let user = null;
const signupForm = document.getElementById("signupform");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validate()) {
    signup();
  }
});

function validate() {
  const signupName = Name.value.trim();
  const signupEmail = Email.value.trim();
  const signupPassword = Password.value.trim();

  var valid = true;

  if (signupName === "") {
    valid = false;
    setError(Name, "Please enter a username.");
  } else {
    setSuccess(Name);
  }

  if (signupEmail === "") {
    valid = false;
    setError(Email, "Please enter an email.");
  } else if (!isValidEmail(signupEmail)) {
    valid = false;
    setError(Email, "Please enter a valid email.");
  } else {
    setSuccess(Email);
  }

  if (signupPassword === "") {
    valid = false;
    setError(Password, "Please enter a password.");
  } else if (signupPassword.length < 8) {
    valid = false;
    setError(Password, "Password must be at least 8 characters.");
  } else {
    setSuccess(Password);
  }
  return valid;
}

function setError(elementId, message) {
  const element = elementId.parentElement;
  const errorElement = element.querySelector(".error");

  errorElement.innerText = message;
  element.classList.remove("success");
  element.classList.add("error");
}

function setSuccess(elementId) {
  const element = elementId.parentElement;
  const errorElement = element.querySelector(".error");
  errorElement.innerText = "";
  element.classList.remove("error");
  element.classList.add("success");
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

const successModal = new bootstrap.Modal(
  document.getElementById("successModal")
);

function signup() {
  const Name1 = Name.value;
  const Email1 = Email.value;
  const Password1 = Password.value;

  if (Name1 && Email1 && Password1) {
    user = { Name: Name1, Email: Email1, Password: Password1 }; // Store user details in an object
    popup();

    console.log(
      `Name: ${user.Name}, Email: ${user.Email}, Password: ${user.Password}`
    );
  } else {
    console.log("errrrrrrrrrrrrrrrrrrrr");
  }
}

function popup() {
  if (user) {
    successModal.show();
    signupForm.reset();
  }
}

const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", function () {
  successModal.hide();
  window.location.href = "login.html";
});
