const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота
const intervalDuration = 1200; // Интервал в 1.2 секунды

function startAnimation() {
    setInterval(() => {
        setTimeout(() => {
            currentRotation += 180; // Поворачиваем элемент на 180 градусов
            animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот
            
            // Возвращаем исходное положение на 180 градусов через 0.2 секунды (после 1.3 секунд от начала цикла)
            setTimeout(() => {
                animationElement.style.transform = `rotate(${currentRotation}deg)`; // Оставляем элемент повернутым
            }, 200); // Задержка в 0.2 секунды
        }, 1100); // Поворот начинается через 1.1 секунды
    }, intervalDuration); // Запуск цикла каждые 2.4 секунды
}

// Запуск анимации
startAnimation();
