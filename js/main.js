// 1. ROLE TOGGLE
// Switches the "I need storage" / "I have space" buttons on the signup form
function setRole(role) {
  document.getElementById('role-need').classList.toggle('active', role === 'need');
  document.getElementById('role-host').classList.toggle('active', role === 'host');
}

// 2. FORM SUBMISSION
// Runs when someone clicks "Notify me" — hides the form, shows the thank you message
function submitForm(e) {
  e.preventDefault();
  // TODO: swap this out for Formspree when ready
  document.getElementById('form-step').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
}

// 3. SCROLL HELPER
// Smoothly scrolls the page down to the signup section
function scrollToSignup() {
  document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}