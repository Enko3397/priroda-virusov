document.addEventListener("DOMContentLoaded", () => {
  // Обработчики для кнопок
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
