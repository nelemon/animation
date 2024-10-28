const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота
let isRotating = false; // Флаг для отслеживания состояния поворота

// Функция для выполнения одного поворота
function rotateAnimation() {
    if (!isRotating) {
        isRotating = true; // Устанавливаем флаг, что идет поворот
        currentRotation += 180; // Увеличиваем угол поворота на 180 градусов
        animationElement.style.transition = 'transform 0.5s'; // Устанавливаем время поворота (0.5 секунды)
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот

        // Запускаем таймер, чтобы подождать окончания поворота
        setTimeout(() => {
            isRotating = false; // Поворот завершен
            rotateAnimation(); // Запускаем следующий поворот
        }, 1000); // Ожидаем 1 секунду до следующего поворота
    }
}

// Запускаем анимацию
rotateAnimation();
