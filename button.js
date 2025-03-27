const lightModeButton = document.getElementById('lightMode');
const darkModeButton = document.getElementById('darkMode');
const normalModeButton = document.getElementById('normalMode');
const currentModeText = document.getElementById('currentMode'); 

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
