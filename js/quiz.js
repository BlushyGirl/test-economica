// Квиз по семейному бюджету с 30 вопросами
function initQuiz() {
    const quizContent = document.getElementById('quiz-content');
    
    const questions = [
        {
            question: "Что такое семейный бюджет?",
            options: [
                "Сумма денег, которую семья тратит в месяц",
                "План доходов и расходов семьи на период",
                "Общие сбережения семьи",
                "Стоимость всех активов семьи"
            ],
            correct: 1
        },
        {
            question: "Какое правило помогает распределить доходы?",
            options: [
                "Правило 50/30/20",
                "Правило 70/20/10",
                "Правило 40/40/20",
                "Правило 60/30/10"
            ],
            correct: 0
        },
        {
            question: "Что такое финансовая подушка безопасности?",
            options: [
                "Деньги на отпуск",
                "Резерв на 3-6 месяцев жизни",
                "Инвестиционный портфель",
                "Страховой полис"
            ],
            correct: 1
        },
        {
            question: "Какой процент дохода рекомендуется откладывать?",
            options: [
                "5-10%",
                "10-20%",
                "20-30%",
                "Столько, сколько осталось"
            ],
            correct: 1
        },
        {
            question: "Что такое 'нулевой бюджет'?",
            options: [
                "Бюджет без доходов",
                "Доходы минус расходы равны нулю",
                "Бюджет только на essentials",
                "Месяц без трат"
            ],
            correct: 1
        },
        {
            question: "Какой вид расходов является обязательным?",
            options: [
                "Развлечения",
                "Коммунальные платежи",
                "Одежда",
                "Рестораны"
            ],
            correct: 1
        },
        {
            question: "Что такое 'долговая нагрузка'?",
            options: [
                "Общая сумма долгов",
                "Процент дохода на обслуживание долгов",
                "Количество кредитных карт",
                "Срок погашения кредитов"
            ],
            correct: 1
        },
        {
            question: "Какой метод учета расходов самый простой?",
            options: [
                "Конвертный метод",
                "Метод двойной записи",
                "ABC-анализ",
                "Сложные Excel таблицы"
            ],
            correct: 0
        },
        {
            question: "Что такое 'пассивный доход'?",
            options: [
                "Зарплата",
                "Доход без активных усилий",
                "Премия на работе",
                "Социальные выплаты"
            ],
            correct: 1
        },
        {
            question: "Как эффективнее всего бороться с долгами?",
            options: [
                "Взять новый кредит",
                "Метод снежного кома",
                "Игнорировать платежи",
                "Просить отсрочку"
            ],
            correct: 1
        },
        {
            question: "Что такое 'инфляция' в контексте бюджета?",
            options: [
                "Увеличение доходов",
                "Рост цен со временем",
                "Снижение расходов",
                "Стабильность цен"
            ],
            correct: 1
        },
        {
            question: "Какой инструмент НЕ подходит для сбережений?",
            options: [
                "Банковский вклад",
                "Наличные под матрасом",
                "Облигации",
                "Депозит"
            ],
            correct: 1
        },
        {
            question: "Что такое 'финансовая цель'?",
            options: [
                "Мечта о богатстве",
                "Конкретная измеримая задача",
                "Желание разбогатеть",
                "Общее пожелание"
            ],
            correct: 1
        },
        {
            question: "Как часто нужно пересматривать бюджет?",
            options: [
                "Раз в год",
                "Раз в месяц",
                "Раз в квартал",
                "Когда закончатся деньги"
            ],
            correct: 1
        },
        {
            question: "Что такое 'непредвиденные расходы'?",
            options: [
                "Плановые покупки",
                "Внезапные траты",
                "Регулярные платежи",
                "Инвестиции"
            ],
            correct: 1
        },
        {
            question: "Какой процент от дохода - комфортная долговая нагрузка?",
            options: [
                "До 30%",
                "До 50%",
                "До 70%",
                "Любой процент"
            ],
            correct: 0
        },
        {
            question: "Что такое 'активы' в семейном бюджете?",
            options: [
                "Только недвижимость",
                "Все, что приносит доход",
                "Только деньги в банке",
                "Долги и кредиты"
            ],
            correct: 1
        },
        {
            question: "Какой метод планирования самый точный?",
            options: [
                "По предыдущим тратам",
                "На основе желаний",
                "Метод от достигнутого",
                "Угадывание"
            ],
            correct: 0
        },
        {
            question: "Что такое 'категории расходов'?",
            options: [
                "Списки покупок",
                "Группы однотипных трат",
                "Названия магазинов",
                "Даты платежей"
            ],
            correct: 1
        },
        {
            question: "Как эффективнее экономить на продуктах?",
            options: [
                "Покупать только акционные товары",
                "Составлять список и следовать ему",
                "Не ходить в магазин",
                "Покупать все в одном месте"
            ],
            correct: 1
        },
        {
            question: "Что такое 'сложный процент'?",
            options: [
                "Процент по кредиту",
                "Процент на процент",
                "Высокий процент",
                "Штрафной процент"
            ],
            correct: 1
        },
        {
            question: "Какой срок считается долгосрочным для финансовых целей?",
            options: [
                "До 1 года",
                "1-3 года",
                "3-5 лет",
                "Более 5 лет"
            ],
            correct: 3
        },
        {
            question: "Что такое 'рефинансирование кредита'?",
            options: [
                "Получение нового кредита",
                "Перекредитование на лучших условиях",
                "Отказ от кредита",
                "Увеличение кредитного лимита"
            ],
            correct: 1
        },
        {
            question: "Какой инструмент подходит для начинающих инвесторов?",
            options: [
                "Фондовый рынок",
                "Недвижимость",
                "Банковские вклады",
                "Криптовалюты"
            ],
            correct: 2
        },
        {
            question: "Что такое 'финансовая дисциплина'?",
            options: [
                "Умение экономить",
                "Следование финансовому плану",
                "Знание математики",
                "Работа в банке"
            ],
            correct: 1
        },
        {
            question: "Как правильно ставить финансовые цели?",
            options: [
                "SMART метод",
                "Методом проб и ошибок",
                "По советам друзей",
                "Интуитивно"
            ],
            correct: 0
        },
        {
            question: "Что такое 'бюджетный дефицит'?",
            options: [
                "Нехватка денег в конце месяца",
                "Расходы превышают доходы",
                "Много неиспользованных денег",
                "Высокие доходы"
            ],
            correct: 1
        },
        {
            question: "Какой вид страхования важен для семьи?",
            options: [
                "Страхование жизни кормильца",
                "Страхование яхты",
                "Страхование коллекции",
                "Страхование домашних животных"
            ],
            correct: 0
        },
        {
            question: "Что такое 'инвестиционная стратегия'?",
            options: [
                "План покупки акций",
                "Подход к управлению инвестициями",
                "Список брокеров",
                "График работы биржи"
            ],
            correct: 1
        },
        {
            question: "Какой принцип помогает избежать импульсных покупок?",
            options: [
                "Правило 24 часов",
                "Правило немедленной покупки",
                "Правило следования трендам",
                "Правило максимальной траты"
            ],
            correct: 0
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];

    function showQuestion() {
        if (currentQuestion >= questions.length) {
            showResults();
            return;
        }

        const question = questions[currentQuestion];
        quizContent.innerHTML = `
            <div class="quiz-question">
                <div class="quiz-progress">
                    Вопрос ${currentQuestion + 1} из ${questions.length}
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((currentQuestion + 1) / questions.length) * 100}%"></div>
                    </div>
                </div>
                <p class="question-text">${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" onclick="selectAnswer(${index})">
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.selectAnswer = function(selectedIndex) {
        const question = questions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        // Сохраняем ответ пользователя
        userAnswers.push({
            question: question.question,
            userAnswer: question.options[selectedIndex],
            correctAnswer: question.options[question.correct],
            isCorrect: selectedIndex === question.correct
        });

        // Подсвечиваем правильный и неправильный ответы
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.style.backgroundColor = '#d4edda';
                option.style.borderColor = '#c3e6cb';
            } else if (index === selectedIndex && index !== question.correct) {
                option.style.backgroundColor = '#f8d7da';
                option.style.borderColor = '#f5c6cb';
            }
            option.disabled = true;
        });

        if (selectedIndex === question.correct) {
            score++;
        }

        // Ждем 1 секунду перед следующим вопросом
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1000);
    };

    function showResults() {
        const percentage = (score / questions.length) * 100;
        let message = '';
        let emoji = '';
        let color = '';
        
        if (percentage >= 90) {
            message = "Блестяще! Вы эксперт в управлении бюджетом!";
            emoji = "🏆";
            color = "#28a745";
        } else if (percentage >= 75) {
            message = "Отлично! Вы хорошо разбираетесь в финансах!";
            emoji = "⭐";
            color = "#17a2b8";
        } else if (percentage >= 60) {
            message = "Хорошо! Основы знаете, но есть куда расти.";
            emoji = "📚";
            color = "#ffc107";
        } else if (percentage >= 40) {
            message = "Неплохо, но стоит изучить тему подробнее.";
            emoji = "🤔";
            color = "#fd7e14";
        } else {
            message = "Рекомендуем изучить материалы на нашем сайте и попробовать снова!";
            emoji = "🎯";
            color = "#dc3545";
        }

        quizContent.innerHTML = `
            <div class="quiz-results">
                <h3>Результаты бюджетного квиза</h3>
                <div class="score-display">
                    <div class="score-circle" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -20)} 100%)">
                        <span class="score">${score}/${questions.length}</span>
                    </div>
                    <div class="score-percentage" style="color: ${color}">${Math.round(percentage)}%</div>
                </div>
                <div class="result-emoji">${emoji}</div>
                <p class="result-message">${message}</p>
                
                <div class="results-details">
                    <button class="btn btn-secondary" onclick="showAnswers()">Посмотреть ответы</button>
                    <button class="btn btn-primary" onclick="restartQuiz()">Пройти еще раз</button>
                </div>
            </div>
        `;
    }

    // Вспомогательная функция для настройки цвета
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

window.showAnswers = function() {
    let answersHTML = '<div class="answers-review"><h4>Подробный разбор ответов:</h4>';
    
    userAnswers.forEach((answer, index) => {
        answersHTML += `
            <div class="answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                <h5>Вопрос ${index + 1}: ${answer.question}</h5>
                <p><strong>Ваш ответ:</strong> ${answer.userAnswer}</p>
                <p><strong>Правильный ответ:</strong> ${answer.correctAnswer}</p>
                ${!answer.isCorrect ? '<p class="answer-explanation">Изучите этот вопрос в разделе теории</p>' : ''}
            </div>
        `;
    });
    
    answersHTML += '</div>';
    
    // Вставляем в game-content-area
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="quiz-results-container">
            ${answersHTML}
            <div class="quiz-actions">
                <button class="btn btn-primary" onclick="restartQuiz()">Пройти еще раз</button>
            </div>
        </div>
    `;
};

    window.restartQuiz = function() {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        showQuestion();
    };

    showQuestion();
}

// Инициализация квиза при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quiz-content')) {
        initQuiz();
    }
});
