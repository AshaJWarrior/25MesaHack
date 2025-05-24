function applySavedTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  const themeLink = document.getElementById('theme-style');
  const icon = document.getElementById('theme-icon');

  const isDark = theme === 'dark';
  themeLink.setAttribute('href', isDark ? 'styles-dark.css' : 'styles.css');

  if (icon) {
    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
  }
}

function toggleDarkMode() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applySavedTheme();
}

window.addEventListener('DOMContentLoaded', applySavedTheme);