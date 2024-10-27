const animationElement = document.getElementById('animation');

// Функция для запуска бесконечной анимации
function startAnimation() {
    setInterval(() => {
        // Добавляем класс для поворота
        animationElement.classList.add('rotate');

        // Удаляем класс после 0.2 секунды
        setTimeout(() => {
            animationElement.classList.remove('rotate');
        }, 200); // 200 миллисекунд
    }, 1000); // Каждую 1 секунду
}

// Запускаем анимацию
startAnimation();
