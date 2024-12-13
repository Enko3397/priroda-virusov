// Функция для переключения темы
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

// Добавление обработчиков событий для кнопок
document.addEventListener("DOMContentLoaded", () => {
  const actionBtns = document.querySelectorAll('.action-btn');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Подробности будут добавлены позже!');
    });
  });

  const infoBtns = document.querySelectorAll('.info-btn');
  infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`Информация о клетке: ${btn.textContent}`);
    });
  });
});
