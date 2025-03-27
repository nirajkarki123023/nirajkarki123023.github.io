const lightModeButton = document.getElementById('lightMode');
const darkModeButton = document.getElementById('darkMode');
const normalModeButton = document.getElementById('normalMode');
const currentModeText = document.getElementById('currentMode'); 

// Add these to your existing button.js file

// Username Validation
document.getElementById('username').addEventListener('input', function(e) {
  const username = e.target.value;
  const feedback = document.getElementById('usernameFeedback');
  const isValid = /^[a-zA-Z0-9_]+$/.test(username);
  
  feedback.textContent = isValid ? 
      "✓ Valid username" : 
      "❌ Only letters, numbers, and underscores allowed";
  feedback.className = isValid ? "valid" : "invalid";
});

// Password Validation
document.getElementById('password').addEventListener('input', function(e) {
  const password = e.target.value;
  const feedback = document.getElementById('passwordFeedback');
  const requirements = {
      length: password.length >= 8,
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password)
  };

  let messages = [];
  if (!requirements.length) messages.push("8+ characters");
  if (!requirements.lower) messages.push("lowercase letter");
  if (!requirements.upper) messages.push("uppercase letter");
  if (!requirements.number) messages.push("number");
  if (!requirements.special) messages.push("special character");

  feedback.innerHTML = messages.length > 0 ? 
      `<strong>Missing:</strong> ${messages.join(', ')}` : 
      "✓ Strong password";
  feedback.className = messages.length > 0 ? "invalid" : "valid";
});

// Form Submission & Sanitization
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Sanitization function
  const sanitize = (input) => input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  // Get and sanitize all values
  const formData = {
      name: sanitize(document.getElementById('name').value),
      phone: sanitize(document.getElementById('phone').value),
      email: sanitize(document.getElementById('email').value),
      comment: sanitize(document.getElementById('comment').value),
      username: sanitize(document.getElementById('username').value),
      password: sanitize(document.getElementById('password').value)
  };

  console.log('Sanitized Form Data:', formData);
  alert('Form submitted successfully!\nCheck console for sanitized data');
  this.reset();
});

// Keep your existing mode toggle code below


const updateCurrentModeText = (mode) => {
  currentModeText.innerText = `Current Mode: ${mode}`;
};

const applyLightMode = () => {
  document.body.className = 'light-mode';
  localStorage.setItem('theme', 'light-mode');
  updateCurrentModeText('Light Mode'); 
};

const applyDarkMode = () => {
  document.body.className = 'dark-mode';
  localStorage.setItem('theme', 'dark-mode');
  updateCurrentModeText('Dark Mode');
};

const applyNormalMode = () => {
  document.body.className = '';
  localStorage.setItem('theme', 'normal-mode');
  updateCurrentModeText('Normal Mode'); 
};

lightModeButton.addEventListener('click', applyLightMode);
darkModeButton.addEventListener('click', applyDarkMode);
normalModeButton.addEventListener('click', applyNormalMode);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;

  if (savedTheme === 'light-mode') {
    updateCurrentModeText('Light Mode');
  } else if (savedTheme === 'dark-mode') {
    updateCurrentModeText('Dark Mode');
  } else {
    updateCurrentModeText('Normal Mode');
  }
} else {
  updateCurrentModeText('Normal Mode');
}
