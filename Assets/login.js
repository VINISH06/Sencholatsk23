const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showDetails(data);
    });

  function showDetails(data) {
    for (let i = 0; i < 10; i++) {
      if (user.trim() === data[i].name && email.trim() === data[i].email) {
        const successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        const loginForm = document.getElementById("login-form");
        const closeButton = document.querySelector("#closeButton");
        successModal.show();
        loginForm.reset();
        closeButton.addEventListener("click", function () {
          successModal.hide();
        });

        return;
      } else {
        const Failed = document.querySelector(".failed");
        Failed.innerText = "Login failed";
      }
    }
    const user1 = Users.find(
      (u) => u.Email === username && u.Password === password
    );
    if (user1) {
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
    }

    console.log("Login Failed: User not found in the first 10 items.");
  }
});
