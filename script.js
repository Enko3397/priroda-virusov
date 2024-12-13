document.getElementById('more-info-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    moreInfo.classList.toggle('hidden');
});

function showInfo(virusId) {
    var info = document.getElementById('virus-info');
    if (virusId === 'virus1') {
        info.innerHTML = '<p>Информация о вирусе 1: Описание, симптомы и лечение.</p>';
    } else if (virusId === 'virus2') {
        info.innerHTML = '<p>Информация о вирусе 2: Описание, симптомы и лечение.</p>';
    } else if (virusId === 'virus3') {
        info.innerHTML = '<p>Информация о вирусе 3: Описание, симптомы и лечение.</p>';
    }
    info.classList.remove('hidden');
}

document.getElementById('interaction-btn').addEventListener('click', function() {
    var interaction = document.getElementById('interaction');
    interaction.classList.toggle('hidden');
});
