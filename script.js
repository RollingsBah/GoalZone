// ======================
// Mobile Menu
// ======================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ======================
// Theme Toggle
// ======================
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  if (moonIcon) moonIcon.classList.add('hidden');
  if (sunIcon) sunIcon.classList.remove('hidden');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      if (moonIcon) moonIcon.classList.add('hidden');
      if (sunIcon) sunIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'dark');
    }
  });
}

// ======================
// Search Functionality (Fixed)
// ======================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    // Target the main content cards
    const cards = document.querySelectorAll(
      'main a, main article, main section a, .news-card'
    );

    let found = false;

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (searchTerm === '' || text.includes(searchTerm)) {
        card.style.display = '';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Optional: show message if nothing found
    // (You can add this later if you want)
  });
}