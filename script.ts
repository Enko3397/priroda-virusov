// Функция, которая будет вызываться при клике на кнопку
function showMessage(): void {
  alert("Клетки - это удивительные структуры!");
}

// Добавление обработчика событий на элементы страницы
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      console.log(`Вы кликнули на раздел: ${section.id}`);
    });
  });
});
