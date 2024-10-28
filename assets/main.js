const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота

// Функция для создания задержки
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Асинхронная функция для запуска анимации с паузами
async function startAnimation() {
    while (true) {
        currentRotation += 180; // Увеличиваем угол поворота на 180 градусов
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот

        // Ждем завершения поворота (время должно совпадать с transition в CSS)
        await delay(200); // Задержка 200мс для плавного перехода

        // Ждем 800мс до следующего поворота, итого 1 секунда с учетом задержки на поворот
        await delay(800);
    }
}

// Запускаем анимацию
startAnimation();
