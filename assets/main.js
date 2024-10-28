const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота
const gifSrc = animationElement.src; // Сохраняем исходный путь к GIF

// Функция для создания задержки
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Асинхронная функция для запуска анимации с паузами
async function startAnimation() {
    while (true) {
        // "Останавливаем" GIF, временно удаляя src
        animationElement.src = '';

        // Поворачиваем изображение
        currentRotation += 180;
        animationElement.style.transform = `rotate(${currentRotation}deg)`;

        // Ждем завершения поворота
        await delay(400);

        // Восстанавливаем GIF, возвращая исходный src
        animationElement.src = gifSrc;

        // Ждем перед следующим поворотом
        await delay(600);
    }
}

// Запускаем анимацию
startAnimation();
