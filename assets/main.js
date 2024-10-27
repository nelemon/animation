const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота

// Функция для запуска бесконечной анимации
function startAnimation() {
    setInterval(() => {
        currentRotation += 180; // Увеличиваем угол поворота на 180 градусов
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот
    }, 1100); // Каждую 1 секунду
    }, 1200); // Каждую 1 секунду
}

// Запускаем анимацию
startAnimation();
