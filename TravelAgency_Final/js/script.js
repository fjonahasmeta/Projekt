
// ================= AUTH MODAL =================

function openAuth(type) {
  const modal = document.getElementById("authModal");
  if (!modal) return;

  modal.style.display = "flex";

  const login = document.getElementById("loginForm");
  const signup = document.getElementById("signupForm");

  // reset
  login.style.display = "none";
  signup.style.display = "none";

  if (type === "signup") {
    signup.style.display = "block";
  } else {
    login.style.display = "block";
  }
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
}

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

// click jashtë modalit
window.addEventListener("click", function (e) {
  const modal = document.getElementById("authModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});


// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("bName").value.trim();
    const email = document.getElementById("bEmail").value.trim();
    const destination = document.getElementById("bDestination").value;
    const date = document.getElementById("bDate").value;
    const people = document.getElementById("bPeople").value;

    // VALIDIM
    if (!name || !email || !destination || !date || !people) {
      alert("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

    if (people < 1) {
      alert("Numri i personave duhet të jetë të paktën 1!");
      return;
    }

    // POPUP SUCCESS
    const popup = document.getElementById("bookingPopup");
    if (popup) {
      popup.style.display = "block";

      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    }

    // RESET FORM
    this.reset();
  });
}