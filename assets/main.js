const animationElement = document.getElementById('animation');

// Функция для запуска анимации
function startAnimation() {
    // Анимация длится 2 секунды
    setTimeout(() => {
        animationElement.classList.add('rotate'); // Добавляем класс для поворота
    }, 1000); // Через 1 секунду
}

// Запускаем анимацию
startAnimation();
