const animationElement = document.getElementById('animation');
let currentRotation = 0; // Начальный угол поворота
const rotationDuration = 100; // Длительность поворота в миллисекундах (0.1 секунды)
const intervalDuration = 1100; // Интервал между поворотами в миллисекундах (1.1 секунды)

// Функция для запуска анимации
function startAnimation() {
    setInterval(() => {
        // Поворачиваем на 180 градусов
        currentRotation += 180; 
        animationElement.style.transition = `transform ${rotationDuration}ms`; // Устанавливаем длительность поворота
        animationElement.style.transform = `rotate(${currentRotation}deg)`; // Применяем поворот

        // Возвращаем в исходное положение через 0.1 секунды
        setTimeout(() => {
            animationElement.style.transition = 'none'; // Убираем переход, чтобы не было анимации
            animationElement.style.transform = `rotate(${currentRotation - 180}deg)`; // Возвращаем к предыдущему положению
            setTimeout(() => {
                animationElement.style.transition = `transform ${rotationDuration}ms`; // Восстанавливаем переход для следующего поворота
            }, 0); // Ждем, чтобы переход был применен на следующем повороте
        }, rotationDuration); // Устанавливаем задержку для возврата в исходное положение
    }, intervalDuration); // Каждые 1.1 секунды
}

// Запускаем анимацию
startAnimation();
