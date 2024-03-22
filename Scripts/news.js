// Приклад даних для новин
const newsData = [
    { title: 'Звідки можна купити квіти: Найкращі варіанти для весняного обкладання', content: 'У цій статті ми досліджуємо найкращі місця, де можна придбати квіти для весняного обкладання вашого дому або офісу. Ми розглядаємо різноманітні варіанти, включаючи квіткові магазини, ринки квітів, онлайн-магазини та навіть можливості придбання квітів безпосередньо у виробників.' },
    { title: 'Весна в повному розквіті: Топ-10 квітів для весняного саду', content: 'У цій статті ми представляємо топ-10 квітів, які ідеально підходять для весняного саду. Ми розглядаємо різноманітні види квітів, які додають кольору та життєвої сили вашому саду у період весняної пори. Ви дізнаєтеся про кращі варіанти квітів для садів у міських умовах, а також для садів на селі.' },
    { title: 'Інновації у світі флористики: Квіткові тренди 2024 року', content: 'У цій статті ми досліджуємо найновіші тенденції у світі флористики на 2024 рік. Ви дізнаєтеся про нові методи композиції квітів, передові технології догляду за ними та інші інновації, що революціонізують індустрію квітникового мистецтва.' },
    { title: '7 Квіток, Які Можуть Процвітати в Умовах Недостатнього Світла', content: 'У світі квітів є види, які можуть розквітнути навіть у недостатньо освітленому просторі. Подивіться на ці квіти, які не потребують великої кількості сонячного світла для того, щоб процвітати та радувати своїми барвами вас у будь-який час року.'},
    { title: 'Магія І Квіти: Відкриваємо Секрети Квіткової Терапії', content:"Квіти не лише прикрашають наше життя, але й можуть мати цілющу силу для нашого тіла та душі. Дізнайтеся більше про терапевтичні властивості квітів та як вони можуть поліпшити ваше самопочуття та здоров'я."},
    { title: 'Подарунок Природи: Найкрасивіші Екзотичні Квіти Світу', content:'Подорожуйте світом через природні красивість та дивовижний світ квітів. Огляньте деякі з найбільш екзотичних та чарівних квітів, які прикрашають нашу планету своєю унікальною красою та неповторною аурою.'},
    { title: 'Квіткова Модна Революція: Тренди У Використанні Квітів у Дизайні', content:"Від квіткових вінок до оригінальних букетів - квіти стають головним елементом моди та дизайну. Дізнайтеся про найновітніші тренди у використанні квітів у дизайні одягу, інтер'єрів та аксесуарів."},
    { title: 'Квіти та Їх Вплив на Наше Емоційне Становище: Наукові Докази', content:"Наукові дослідження підтверджують, що квіти можуть впливати на наше емоційне становище та психічне здоров'я. Розглянемо, як квіти можуть підвищити настрій, зменшити стрес та покращити загальний стан психіки."}
];

// Функція для відображення новин
function displayNews() {
    const newsList = document.getElementById('newsList');

    newsData.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        if (item.title.startsWith('Важлива')) {
            li.classList.add('important');
        }
        li.addEventListener('click', () => {
            displaySelectedNews(index);
        });
        newsList.appendChild(li);
    });
}

// Функція для відображення вибраної новини
function displaySelectedNews(index) {
    const selectedNews = document.getElementById('selectedNews');
    const selectedNewsData = newsData[index];

    selectedNews.innerHTML = `
        <h2>${selectedNewsData.title}</h2>
        <p>${selectedNewsData.content}</p>
    `;
}

// Перемінна, щоб зберігати останню відкриту новину
let lastOpenedIndex = null;

// Виклик функції для відображення новин при завантаженні сторінки та перевірці ширини екрану
window.onload = function() {
    displayNews();
    checkScreenWidth();
};

// Перевірка ширини екрану при зміні розміру вікна
window.onresize = function() {
    checkScreenWidth();
};

// Функція для перевірки ширини екрану та додавання / видалення новин
function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    const newsList = document.getElementById('newsList');
    const selectedNewsData = document.getElementById('selectedNews');


    if (screenWidth < 992) { // Мобільні пристрої (lg: 992px)
        // Приховуємо вибрану новину
        selectedNewsData.style.display = 'none';

        newsList.innerHTML = ''; // Очищуємо список новин

        newsData.forEach((item, index) => {
            const details = document.createElement('details');
            details.innerHTML = `<summary>${item.title}</summary><p>${item.content}</p>`;
            details.addEventListener('click', () => {
                if (lastOpenedIndex !== null && lastOpenedIndex !== index) {
                    const previousDetails = document.getElementById(`newsDetails${lastOpenedIndex}`);
                    if (previousDetails) {
                        previousDetails.removeAttribute('open');
                    }
                }
                lastOpenedIndex = index;
            });
            details.id = `newsDetails${index}`;
            newsList.appendChild(details);
        });
    } else {

        // Показуємо вибрану новину
        selectedNewsData.style.display = 'block';

        
    }
}
