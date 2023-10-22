const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showDetails(data);
    });

  function showDetails(data) {
    let Id = Object.entries(data);
    for (let i = 0; i < 10; i++) {
      if (user === Id[i][1].name && email === Id[i][1].email) {
        const successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        const loginForm = document.getElementById("login-form");
        const closeButton = document.querySelector("#closeButton");
        successModal.show();
        loginForm.reset();
        closeButton.addEventListener("click", function () {
          successModal.hide();
          window.location.href = "index.html";
        });
        return;
      } else {
        const Failed = document.querySelector(".failed");
        Failed.innerText = "Login failed";
      }
    }

    console.log("Login Failed: User not found in the first 10 items.");
  }
});
////////////////////////////////////////////////////////////////////////
