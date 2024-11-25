const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-bar-titlebar');

searchInput.addEventListener('focus', () => {
  searchIcon.classList.add('active');
  searchInput.classList.add('active');
});

searchInput.addEventListener('blur', () => {
  searchIcon.classList.remove('active');
  searchInput.classList.remove('active');
});
