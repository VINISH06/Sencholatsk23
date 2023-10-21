const Name = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Users = [];

document.getElementById("signup-form").addEventListener("submit", (event) => {
  if (!validate()) {
    event.preventDefault();
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

function signup() {
  let Name1 = Name.value;
  let Email1 = Email.value;
  let Password1 = Password.value;
  if (Name1 && Email1 && Password1) {
    const user = { Name: Name1, Email: Email1, Password: Password1 };
    Users.push(user);
  } else {
    console.log("errrrrrrrrrrrrrrrrrrrr");
  }
}
