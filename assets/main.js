const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота

// Функция для создания задержки
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Асинхронная функция для запуска анимации с паузами
async function startAnimation() {
    while (true) {
        animationElement.classList.add('paused'); // Ставим GIF на паузу
        currentRotation += 180; // Увеличиваем угол поворота на 180 градусов
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот

        // Ждем завершения поворота (должно совпадать с transition в CSS)
        await delay(400); // 200 мс - время поворота

        animationElement.classList.remove('paused'); // Снимаем паузу с GIF
        await delay(600); // Ждем перед следующим поворотом
    }
}

// Запускаем анимацию
startAnimation();
