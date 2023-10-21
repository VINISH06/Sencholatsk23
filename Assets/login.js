const loginForm = document.getElementById("login-form");
const successModal = new bootstrap.Modal(
  document.getElementById("successModal")
);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const close = document.querySelector(".close");

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => showDetails(res));

  function showDetails(res) {
    let Id = Object.entries(res);
    for (i = 0; i <= Id.length; i++) {
      if (email === Id[i][1].email && username === Id[i][1].name) {
        successModal.show();
        loginForm.reset();
        close.addEventListener("click", (e) => {
          successModal.hide();
        });
      } else {
      }
    }
  }
});

import { Users } from "./users";

function login() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user1 = Users.find(
    (u) => u.Email === username && u.Password === password
  );

  if (user1) {
    successModal.show();
    // Reset the login form
    loginForm.reset();
    // Close modal when close button is clicked
    close.addEventListener("click", (e) => {
      successModal.hide();
    });
  } else {
    document.querySelector(".loggin").innerText = "Login Failed";
    document.querySelector(".loggin").style.color = "red";
  }
}
