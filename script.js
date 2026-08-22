// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  if (moonIcon) moonIcon.classList.add('hidden');
  if (sunIcon) sunIcon.classList.remove('hidden');
} else {
  html.classList.add('dark');
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      // Switch to Light
      html.classList.remove('dark');
      moonIcon?.classList.add('hidden');
      sunIcon?.classList.remove('hidden');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to Dark
      html.classList.add('dark');
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
      localStorage.setItem('theme', 'dark');
    }
  });
}