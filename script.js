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

// Обработчики для кнопок "Узнать больше", "Посмотреть схему" и "Изучить процессы"
document.addEventListener("DOMContentLoaded", () => {
  const actionBtns = document.querySelectorAll('.action-btn');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Информация будет добавлена позже!');
    });
  });
});
