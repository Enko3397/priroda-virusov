// Функция для взаимодействия с пользователем
function displayMessage() {
  alert("Вы узнали интересные факты о клетках!");
}

// Добавление обработчиков событий на элементы
document.addEventListener("DOMContentLoaded", () => {
  // Обработчик для всех разделов
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      console.log(`Вы кликнули на раздел: ${section.id}`);
      displayMessage();
    });
  });

  // Пример: динамическая смена фона при наведении
  const introSection = document.getElementById("intro");
  introSection.addEventListener("mouseenter", () => {
    introSection.style.backgroundColor = "#d1e7ff";
  });

  introSection.addEventListener("mouseleave", () => {
    introSection.style.backgroundColor = "white";
  });
});
