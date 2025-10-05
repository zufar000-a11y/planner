// script.js

// Проверка и инициализация Telegram Web App
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Инициализация Mini App
    tg.ready();
    console.log('Telegram Mini App Ready');

    // Показываем основную кнопку (как альтернатива нашему HTML-кнопке)
    tg.MainButton.setText("Загрузить Задачи");
    tg.MainButton.show();

    // Вывод приветствия
    const userDisplay = document.querySelector('h1');
    // Получаем имя пользователя из SDK, если оно есть
    const userName = tg.initDataUnsafe?.user?.first_name || 'Пользователь';
    userDisplay.textContent = `Привет, ${userName}!`;

    // Обработчик для закрытия окна
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        tg.close(); // Функция SDK для закрытия окна
    });

    // TODO: Здесь будет логика для отправки запроса вашему Python-боту
    // и получения списка задач.

} else {
    // Если приложение запущено не в Telegram
    console.warn('Mini App запущен не через Telegram Web App.');
    document.getElementById('app-container').innerHTML = '<h1>Ошибка</h1><p>Запустите это приложение через Telegram Bot.</p>';
}
