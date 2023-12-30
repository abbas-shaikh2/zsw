document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      menuToggle.querySelector(".not-hovered").classList.remove("show-icon");
      menuToggle.querySelector(".hovered").classList.add("show-icon");
    } else {
      menuToggle.querySelector(".not-hovered").classList.add("show-icon");
      menuToggle.querySelector(".hovered").classList.remove("show-icon");
    }
  });
});


function displayErrorToast(message) {
  let errorToast = document.getElementById("error-toast");
  errorToast.textContent = message;
  errorToast.className = "error-toast show";

  setTimeout(function () {
    errorToast.className = "error-toast"; // Hide the toast after a timeout
  }, 3000); // Display error message for 3 seconds
}

function displaySuccessToast(message) {
  // You can implement a similar function for success toast if needed
  console.log(message);
}

const expandButton = document.querySelectorAll(".expand-button");

expandButton.forEach((button) => {
  button.addEventListener("click", expandDescription);
});

function expandDescription() {
  const button = this;
  const serviceCard = button.parentNode;
  serviceCard.classList.toggle("expanded");

  if (serviceCard.classList.contains("expanded")) {
    button.textContent = "Read Less 🔼";
  } else {
    button.textContent = "Read More 🔽";
  }
}
