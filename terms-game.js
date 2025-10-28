// Полная версия игры "Финансовые термины" с 30 терминами
function initTermsGame() {
    const termsContent = document.getElementById('terms-content');
    
    const terms = [
        { 
            term: "Семейный бюджет", 
            definition: "План доходов и расходов семьи на определенный период времени, обычно на месяц",
            example: "Ежемесячное распределение 150 000 рублей на нужды семьи"
        },
        { 
            term: "Финансовая подушка", 
            definition: "Резервный фонд, достаточный для покрытия расходов семьи на 3-6 месяцев",
            example: "300 000 рублей на отдельном счете для непредвиденных ситуаций"
        },
        { 
            term: "Пассивный доход", 
            definition: "Доход, который не требует постоянных активных усилий для его получения",
            example: "Проценты по вкладам, дивиденды по акциям, арендная плата"
        },
        { 
            term: "Активный доход", 
            definition: "Доход, получаемый в обмен на выполненную работу или оказанные услуги",
            example: "Заработная плата, доход от предпринимательской деятельности"
        },
        { 
            term: "Инфляция", 
            definition: "Устойчивое повышение общего уровня цен на товары и услуги",
            example: "В прошлом году хлеб стоил 40 рублей, сейчас - 50 рублей"
        },
        { 
            term: "Инвестиции", 
            definition: "Вложение денежных средств с целью получения дохода или прибыли в будущем",
            example: "Покупка акций, облигаций, недвижимости для получения дохода"
        },
        { 
            term: "Диверсификация", 
            definition: "Распределение инвестиций по разным активам для снижения рисков",
            example: "Вложение денег в акции, облигации и недвижимость одновременно"
        },
        { 
            term: "Активы", 
            definition: "Все, что приносит доход или имеет стоимость, которая может быть реализована",
            example: "Недвижимость, акции, банковские вклады, бизнес"
        },
        { 
            term: "Пассивы", 
            definition: "Все, что требует расходов и не приносит дохода",
            example: "Кредиты, ипотека, коммунальные платежи"
        },
        { 
            term: "Чистый доход", 
            definition: "Сумма, остающаяся после вычета всех налогов и обязательных платежей",
            example: "Из зарплаты 100 000 рублей после налогов остается 87 000 рублей"
        },
        { 
            term: "Накопления", 
            definition: "Часть дохода, откладываемая для будущих целей или создания резерва",
            example: "Ежемесячное откладывание 20 000 рублей на покупку автомобиля"
        },
        { 
            term: "Кредитная история", 
            definition: "Информация о выполнении заемщиком обязательств по кредитам",
            example: "Запись в бюро кредитных историй о своевременности платежей"
        },
        { 
            term: "Рефинансирование", 
            definition: "Получение нового кредита на более выгодных условиях для погашения старых кредитов",
            example: "Взятие кредита под 12% годовых для погашения кредита под 18%"
        },
        { 
            term: "Ипотека", 
            definition: "Долгосрочный кредит, предоставляемый под залог недвижимости",
            example: "Кредит на покупку квартиры сроком на 20 лет под залог этой квартиры"
        },
        { 
            term: "Сложный процент", 
            definition: "Процент, начисляемый на первоначальную сумму и накопленные проценты",
            example: "Вклад 100 000 рублей под 10% годовых через 2 года превратится в 121 000 рублей"
        },
        { 
            term: "Финансовая грамотность", 
            definition: "Способность эффективно управлять личными финансами для достижения жизненных целей",
            example: "Умение планировать бюджет, инвестировать, избегать долгов"
        },
        { 
            term: "Банкротство", 
            definition: "Признанная судом неспособность должника удовлетворить требования кредиторов",
            example: "Физическое лицо не может платить по кредитам из-за потери работы"
        },
        { 
            term: "Лизинг", 
            definition: "Долгосрочная аренда имущества с последующим правом выкупа",
            example: "Аренда автомобиля с возможностью выкупа через 3 года"
        },
        { 
            term: "Депозит", 
            definition: "Денежные средства, размещенные в банке на определенный срок под процент",
            example: "Вклад 500 000 рублей на 1 год под 8% годовых"
        },
        { 
            term: "Облигация", 
            definition: "Ценная бумага, подтверждающая право владельца на получение номинальной стоимости и процентов",
            example: "Государственная облигация номиналом 1000 рублей с купоном 7%"
        },
        { 
            term: "Дивиденды", 
            definition: "Часть прибыли компании, распределяемая между акционерами",
            example: "Выплата 50 рублей на каждую акцию по итогам года"
        },
        { 
            term: "Брокер", 
            definition: "Профессиональный участник рынка, осуществляющий операции с ценными бумагами",
            example: "Компания, через которую покупаются и продаются акции на бирже"
        },
        { 
            term: "Инвестиционный портфель", 
            definition: "Совокупность всех инвестиций физического или юридического лица",
            example: "Набор из акций, облигаций и валюты стоимостью 1 000 000 рублей"
        },
        { 
            term: "Рентабельность", 
            definition: "Относительный показатель экономической эффективности",
            example: "Прибыль 50 000 рублей при вложениях 500 000 рублей = 10% рентабельности"
        },
        { 
            term: "Ликвидность", 
            definition: "Способность актива быть быстро проданным по рыночной цене",
            example: "Деньги на счете - высоколиквидный актив, недвижимость - низколиквидный"
        },
        { 
            term: "Фондовый рынок", 
            definition: "Организованный рынок торговли ценными бумагами",
            example: "Московская биржа, где торгуются акции Газпрома, Сбербанка"
        },
        { 
            term: "Криптовалюта", 
            definition: "Цифровая валюта, защищенная криптографией и не имеющая центрального управления",
            example: "Биткоин, Эфириум - цифровые активы на блокчейне"
        },
        { 
            term: "Страхование", 
            definition: "Система защиты имущественных интересов при наступлении страховых случаев",
            example: "Полис КАСКО для автомобиля или ДМС для медицинского обслуживания"
        },
        { 
            term: "Пенсионные накопления", 
            definition: "Денежные средства, формируемые для обеспечения в старости",
            example: "Накопительная часть пенсии, управляемая через НПФ или ВЭБ"
        },
        { 
            term: "Финансовое планирование", 
            definition: "Процесс определения финансовых целей и разработки стратегии их достижения",
            example: "План накопления на образование детей и покупку жилья"
        },
        { 
            term: "Бюджетный дефицит", 
            definition: "Превышение расходов над доходами в бюджете за определенный период",
            example: "Семья потратила 120 000 рублей при доходе 100 000 рублей"
        },
        { 
            term: "Профицит бюджета", 
            definition: "Превышение доходов над расходами в бюджете за определенный период",
            example: "Семья заработала 150 000 рублей, потратила 130 000 рублей"
        },
        { 
            term: "Финансовая независимость", 
            definition: "Состояние, когда пассивный доход покрывает все необходимые расходы",
            example: "Доход от инвестиций 100 000 рублей в месяц при расходах 80 000 рублей"
        },
        { 
            term: "Кредитное плечо", 
            definition: "Использование заемных средств для увеличения потенциальной доходности инвестиций",
            example: "Покупка акций на 1 000 000 рублей при наличии собственных 200 000 рублей"
        },
        { 
            term: "Хеджирование", 
            definition: "Страхование финансовых рисков с помощью производных инструментов",
            example: "Покупка опциона для защиты от падения курса валюты"
        },
        { 
            term: "Волатильность", 
            definition: "Степень изменчивости цены актива за определенный период времени",
            example: "Акции могут расти или падать на 5-10% в течение дня"
        }
    ];

    let currentRound = 0;
    const rounds = [];
    const totalRounds = 30;
    let score = 0;
    let usedTermIndexes = new Set();

    // Создаем раунды
    function createRounds() {
        rounds.length = 0;
        usedTermIndexes.clear();
        
        // Перемешиваем термины
        const shuffledIndexes = [...Array(terms.length).keys()].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < totalRounds && i < shuffledIndexes.length; i++) {
            const termIndex = shuffledIndexes[i];
            usedTermIndexes.add(termIndex);
            const correctTerm = terms[termIndex];
            
            // Собираем неправильные варианты из неиспользованных терминов
            const wrongTermIndexes = [...Array(terms.length).keys()]
                .filter(idx => !usedTermIndexes.has(idx))
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            
            const wrongTerms = wrongTermIndexes.map(idx => terms[idx]);
            const allOptions = [correctTerm, ...wrongTerms].sort(() => Math.random() - 0.5);
            
            rounds.push({
                definition: correctTerm.definition,
                example: correctTerm.example,
                options: allOptions,
                correctTerm: correctTerm.term,
                correctDefinition: correctTerm.definition
            });
        }
    }

    function showRound() {
        if (currentRound >= rounds.length) {
            showResults();
            return;
        }

        const round = rounds[currentRound];
        termsContent.innerHTML = `
            <div class="terms-game-round">
                <div class="round-progress">
                    Вопрос ${currentRound + 1} из ${totalRounds}
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((currentRound + 1) / totalRounds) * 100}%"></div>
                    </div>
                </div>
                
                <div class="definition-card">
                    <h3>Определение:</h3>
                    <p class="definition-text">${round.definition}</p>
                    ${round.example ? `<p class="example-text"><strong>Пример:</strong> ${round.example}</p>` : ''}
                </div>

                <div class="terms-options">
                    <h4>Выберите правильный термин:</h4>
                    ${round.options.map((option, index) => `
                        <button class="term-option" onclick="selectTermOption('${option.term}', '${round.correctTerm}')">
                            <span class="option-number">${index + 1}</span>
                            <span class="term-text">${option.term}</span>
                        </button>
                    `).join('')}
                </div>

                <div class="current-score">
                    Правильных ответов: <strong>${score}</strong> из ${currentRound}
                </div>
            </div>
        `;
    }

    window.selectTermOption = function(selectedTerm, correctTerm) {
        const round = rounds[currentRound];
        const options = document.querySelectorAll('.term-option');
        
        // Подсвечиваем правильный и неправильный ответы
        options.forEach(option => {
            const termText = option.querySelector('.term-text').textContent;
            if (termText === correctTerm) {
                option.style.backgroundColor = '#d4edda';
                option.style.borderColor = '#c3e6cb';
                option.innerHTML += '<span class="correct-mark"> ✓</span>';
            } else if (termText === selectedTerm && selectedTerm !== correctTerm) {
                option.style.backgroundColor = '#f8d7da';
                option.style.borderColor = '#f5c6cb';
                option.innerHTML += '<span class="incorrect-mark"> ✗</span>';
            }
            option.disabled = true;
        });

        // Показываем объяснение
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'answer-explanation';
        explanationDiv.innerHTML = `
            <div class="explanation-content ${selectedTerm === correctTerm ? 'correct' : 'incorrect'}">
                <h4>${selectedTerm === correctTerm ? '✅ Правильно!' : '❌ Неправильно'}</h4>
                <p><strong>Правильный ответ:</strong> ${correctTerm}</p>
                <p><strong>Определение:</strong> ${round.correctDefinition}</p>
                ${round.example ? `<p><strong>Пример:</strong> ${round.example}</p>` : ''}
                <button class="btn btn-primary" onclick="nextTermRound()">Продолжить</button>
            </div>
        `;

        if (selectedTerm === correctTerm) {
            score++;
        }

        // Обновляем счет
        document.querySelector('.current-score').innerHTML = 
            `Правильных ответов: <strong>${score}</strong> из ${currentRound + 1}`;

        // Ждем немного и показываем объяснение
        setTimeout(() => {
            termsContent.appendChild(explanationDiv);
        }, 1000);
    };

    window.nextTermRound = function() {
        currentRound++;
        if (currentRound < totalRounds) {
            showRound();
        } else {
            showResults();
        }
    };

    function showResults() {
        const percentage = (score / totalRounds) * 100;
        let message = '';
        let emoji = '';
        let color = '';
        
        if (percentage >= 90) {
            message = "Потрясающе! Вы настоящий эксперт финансовых терминов!";
            emoji = "🏆";
            color = "#28a745";
        } else if (percentage >= 75) {
            message = "Отлично! Вы прекрасно разбираетесь в финансовой терминологии!";
            emoji = "⭐";
            color = "#17a2b8";
        } else if (percentage >= 60) {
            message = "Хорошо! Продолжайте изучать финансовые термины!";
            emoji = "📚";
            color = "#ffc107";
        } else if (percentage >= 40) {
            message = "Неплохо! Но есть куда расти в изучении финансовых терминов.";
            emoji = "🤔";
            color = "#fd7e14";
        } else {
            message = "Рекомендуем изучить теорию на сайте и попробовать снова!";
            emoji = "🎯";
            color = "#dc3545";
        }

        termsContent.innerHTML = `
            <div class="terms-results">
                <h3>Результаты игры "Финансовые термины"</h3>
                <div class="score-display">
                    <div class="score-circle" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -20)} 100%)">
                        <span class="score">${score}/${totalRounds}</span>
                    </div>
                    <div class="score-percentage" style="color: ${color}">${Math.round(percentage)}%</div>
                </div>
                <div class="result-emoji">${emoji}</div>
                <p class="result-message">${message}</p>
                
                <div class="results-stats">
                    <div class="stat-item">
                        <span class="stat-label">Всего терминов:</span>
                        <span class="stat-value">${totalRounds}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Правильных ответов:</span>
                        <span class="stat-value">${score}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Процент успеха:</span>
                        <span class="stat-value">${Math.round(percentage)}%</span>
                    </div>
                </div>
                
                <div class="results-details">
                    <button class="btn btn-primary" onclick="restartTermsGame()">Играть снова</button>
                    <button class="btn btn-secondary" onclick="backToGames()">К списку игр</button>
                </div>

                <div class="terms-review">
                    <h4>Изученные термины:</h4>
                    <div class="terms-list">
                        ${rounds.slice(0, 10).map(round => 
                            `<div class="term-review-item">
                                <strong>${round.correctTerm}</strong> - ${round.definition.substring(0, 80)}...
                            </div>`
                        ).join('')}
                    </div>
                    ${rounds.length > 10 ? 
                        `<p class="more-terms">... и еще ${rounds.length - 10} терминов</p>` : 
                        ''
                    }
                </div>
            </div>
        `;
    }

    // Вспомогательная функция для настройки цвета
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    window.restartTermsGame = function() {
        currentRound = 0;
        score = 0;
        createRounds();
        showRound();
    };

    // Инициализация игры
    createRounds();
    showRound();
}