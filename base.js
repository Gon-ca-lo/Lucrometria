// TOGGLE NAV MENU ON MOBILE
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// FORM VALIDATION
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

// Select all mandatory inputs
const mandatoryFields = form.querySelectorAll("input[required], select[required]");

function checkFormValidity() {
  let allFilled = true;
  mandatoryFields.forEach(field => {
    if (!field.value.trim()) {
      allFilled = false;
    }
  });

  // Enable or disable the button
  if (allFilled) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
}

// Listen for input changes
mandatoryFields.forEach(field => {
  field.addEventListener("input", checkFormValidity);
});

// Optional: prevent form submit if fields are empty
form.addEventListener("submit", e => {
  if (submitBtn.disabled) {
    e.preventDefault();
  }
});
