// Переключение темы
const themeToggleButton = document.createElement('button');
themeToggleButton.classList.add('theme-toggle');
themeToggleButton.textContent = 'Тема';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Логика для теста
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const answers = {
        q1: 'Stuxnet',
        q2: 'Трояны'
    };

    let score = 0;
    let total = 0;

    for (let question in answers) {
        total++;
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `<p>Вы правильно ответили на ${score} из ${total} вопросов.</p>`;
    resultDiv.style.padding = '10px';
    resultDiv.style.backgroundColor = score === total ? '#4CAF50' : '#f44336';
    resultDiv.style.color = 'white';
    resultDiv.style.borderRadius = '5px';
});