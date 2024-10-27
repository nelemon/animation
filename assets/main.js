const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота
const intervalDuration = 1200; // Цикл каждые 1.2 секунды

function startAnimation() {
    setInterval(() => {
        // Поворот начинается через 1.1 секунды
        setTimeout(() => {
            currentRotation += 180; // Поворачиваем на 180 градусов
            animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот
        }, 1100); // Задержка поворота 1.1 секунды в каждом цикле
    }, intervalDuration); // Повторяем цикл каждые 1.2 секунды
}

// Запуск анимации
startAnimation();
