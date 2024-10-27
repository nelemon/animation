const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота

// Функция для запуска бесконечной анимации
function startAnimation() {
    setInterval(() => {
        currentRotation += 360; // Увеличиваем угол поворота на 360 градусов
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот
    }, 1000); // Каждую 1 секунду
}

// Запускаем анимацию
startAnimation();
