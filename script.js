// Переключение темы
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    themeToggleBtn.textContent = 'Переключить на темную тему';
  } else {
    themeToggleBtn.textContent = 'Переключить на светлую тему';
  }
});
