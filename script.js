const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// State
let isDarkMode = true;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        html.setAttribute('data-theme', 'dark');
        themeIcon.src = 'assets/icon_sun.png'; // Show Sun (option to switch to Light)
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.src = 'assets/icon_moon.png'; // Show Moon (option to switch to Dark)
    }
});