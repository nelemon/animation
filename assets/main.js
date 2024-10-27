const animationElement = document.getElementById('animation');

// Функция для запуска анимации
function startAnimation() {
    // Анимация длится 2 секунды
    animationElement.style.transition = 'none'; // Отключаем плавный переход перед запуском
    setTimeout(() => {
        animationElement.style.transition = 'transform 0.2s'; // Включаем плавный переход
        animationElement.classList.add('rotate'); // Добавляем класс для поворота
    }, 1000); // Через 1 секунду
}

// Запускаем анимацию
startAnimation();
