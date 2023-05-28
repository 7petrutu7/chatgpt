document.addEventListener("DOMContentLoaded", function () {
  const loggedIn = localStorage.getItem("user_name");

  // Ascultătoare de evenimente pentru link-ul "Contul meu"
  if (loggedIn) {
    const myAccountLink = document.getElementById("account-link");
    myAccountLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // Ascultătoare de evenimente pentru link-ul "Adaugă anunț"
  const adaugaAnuntLink = document.getElementById("adaugaAnunt");
  adaugaAnuntLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (loggedIn) {
      window.location.href = "adauga_anunt.html";
    } else {
      window.location.href = "login.html";
    }
  });
});
