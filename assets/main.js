document.addEventListener("DOMContentLoaded", () => {
    const tileGrid = document.getElementById("tileGrid");
    const starsContainer = document.querySelector('.stars-container');
    const getSignalButton = document.getElementById("getSignalButton");
    const plusButton = document.querySelector('.plus-button'); // Кнопка plus
    const minusButton = document.querySelector('.minus-button'); // Кнопка minus
    const loadingAnimation = document.getElementById('loadingAnimation'); // Элемент анимации загрузки
    const letters = document.querySelectorAll('.mines-title .letter'); // Получаем все буквы

    // Начальное состояние: скрыть анимацию
    loadingAnimation.classList.add('hidden');

    // Создание плиток
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('data-index', i);
        tileGrid.appendChild(tile);
    }

    // Создание звезд
    for (let i = 0; i < 25; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.setAttribute('data-index', i);
        starsContainer.appendChild(star);
    }

    const totalTiles = 25;
    const tilesToOpen = 5;
    const tileDelay = 500;
    const buttonInactiveDuration = 1000;

    let openedTiles = new Set();

    function resetTiles() {
        Array.from(tileGrid.children).forEach(tile => {
            tile.classList.remove("fade-out");
        });

        Array.from(starsContainer.children).forEach(star => {
            star.style.opacity = 0;
            star.classList.remove("show-star");
        });
    }

    function toggleButtonState(isDisabled) {
        getSignalButton.disabled = isDisabled;

        // Устанавливаем цвет кнопки в зависимости от состояния
        getSignalButton.style.backgroundColor = isDisabled ? "#061E5B" : ""; // Используем цвет при неактивном состоянии

        // Отключаем или включаем кнопки plus и minus
        plusButton.disabled = isDisabled;
        plusButton.style.opacity = isDisabled ? "0.5" : "1"; // Смена прозрачности для визуального эффекта
        minusButton.disabled = isDisabled;
        minusButton.style.opacity = isDisabled ? "0.5" : "1"; // Смена прозрачности для визуального эффекта
    }

    // Функция для анимации букв
    function animateLetters() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('float'); // Добавляем класс для анимации
            }, index * 200); // Интервал 0.3 секунды между буквами
        });
    }

    // Запускаем анимацию букв
    animateLetters();

    // Обработка нажатия на кнопку "Получить сигнал"
    getSignalButton.addEventListener("click", () => {
        openedTiles.clear();
        resetTiles();
        toggleButtonState(true); // Блокируем все кнопки

        // Скрываем плитки и звезды
        tileGrid.style.visibility = "hidden"; // Скрываем плитки
        starsContainer.style.visibility = "hidden"; // Скрываем звезды

        // Генерация случайного времени анимации загрузки от 2 до 4 секунд
        const loadingDuration = Math.floor(Math.random() * 3) + 2; // Генерация числа от 2 до 4
        console.log("Время анимации загрузки (сек):", loadingDuration); // Вывод времени в консоль

        // Показать анимацию загрузки
        loadingAnimation.classList.remove('hidden'); // Показываем анимацию
        loadingAnimation.classList.add('visible'); // Убираем класс скрытия

        setTimeout(() => {
            loadingAnimation.classList.add('hidden'); // Скрываем анимацию после задержки
            loadingAnimation.classList.remove('visible'); // Убираем класс видимости

            // Показываем плитки и звезды после загрузки
            tileGrid.style.visibility = "visible"; // Показываем плитки
            starsContainer.style.visibility = "visible"; // Показываем звезды

            while (openedTiles.size < tilesToOpen) {
                openedTiles.add(Math.floor(Math.random() * totalTiles));
            }

            const openedTilesThisRound = Array.from(openedTiles);
            console.log("Открытые плитки:", openedTilesThisRound);

            openedTilesThisRound.forEach((tileIndex, i) => {
                setTimeout(() => {
                    const tile = tileGrid.children[tileIndex];
                    tile.classList.add("fade-out");

                    const star = starsContainer.children[tileIndex];
                    star.style.opacity = 1;
                    star.classList.add("show-star");

                    if (i === tilesToOpen - 1) {
                        setTimeout(() => {
                            toggleButtonState(false); // Разблокируем все кнопки
                            getSignalButton.style.backgroundColor = "";
                        }, buttonInactiveDuration);
                    }
                }, i * tileDelay);
            });
        }, loadingDuration * 1000); // Задержка на случайное время в миллисекундах
    });

    // Обработка нажатия на кнопку plus
    plusButton.addEventListener("click", () => {
        const trapNumber = document.querySelector('.trap-number');
        let currentValue = parseInt(trapNumber.textContent);

        if (currentValue === 1) {
            trapNumber.textContent = 3;
        } else if (currentValue === 3) {
            trapNumber.textContent = 5;
        } else if (currentValue === 5) {
            trapNumber.textContent = 7;
        }
        // Если текущее значение 7, ничего не делаем
    });

    // Обработка нажатия на кнопку minus
    minusButton.addEventListener("click", () => {
        const trapNumber = document.querySelector('.trap-number');
        let currentValue = parseInt(trapNumber.textContent);

        if (currentValue === 3) {
            trapNumber.textContent = 1;
        } else if (currentValue === 5) {
            trapNumber.textContent = 3;
        } else if (currentValue === 7) {
            trapNumber.textContent = 5;
        }
        // Если текущее значение 1, ничего не делаем
    });
});