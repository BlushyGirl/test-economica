// Улучшенная версия игры "Планировщик расходов"
function initBudgetGame() {
    const budgetContent = document.getElementById('budget-content');
    
    if (!budgetContent) {
        console.error('Контейнер budget-content не найден!');
        return;
    }
    
    const profiles = [
        {
            id: 1,
            name: "👨‍💼 Молодая пара",
            description: "Алексей и Ирина, 28 лет. Оба работают в IT, снимают квартиру, планируют покупку жилья через 3 года.",
            income: "180 000 руб/мес",
            expenses: {
                "Аренда": 40000,
                "Питание": 30000,
                "Автомобиль": 15000,
                "Развлечения": 20000,
                "Накопления": 15000
            },
            goals: ["Накопить на первоначальный взнос", "Создать финансовую подушку"],
            correctChoices: ["Сократить развлечения на 5 000", "Оптимизировать питание", "Увеличить накопления"],
            incorrectChoices: ["Взять кредит на отдых", "Купить новый автомобиль", "Увеличить аренду"]
        },
        {
            id: 2,
            name: "👨‍👩‍👧‍👦 Семья с детьми",
            description: "Сергей и Ольга, 38 лет. Двое детей, ипотечная квартира, два автомобиля.",
            income: "220 000 руб/мес",
            expenses: {
                "Ипотека": 40000,
                "Питание": 45000,
                "Автомобили": 25000,
                "Образование": 20000,
                "Коммуналка": 8000,
                "Накопления": 12000
            },
            goals: ["Накопить на образование детей", "Сделать ремонт", "Отпуск"],
            correctChoices: ["Оптимизировать транспорт", "Сократить развлечения", "Искать скидки на обучение"],
            incorrectChoices: ["Взять кредит на отпуск", "Продать автомобиль", "Отказаться от доп. образования"]
        },
        {
            id: 3,
            name: "👵 Пенсионерка",
            description: "Галина Петровна, 68 лет. Живет одна, небольшая пенсия, хронические заболевания.",
            income: "25 000 руб/мес",
            expenses: {
                "Коммуналка": 6000,
                "Питание": 10000,
                "Медицина": 3000,
                "Помощь внукам": 2000,
                "Накопления": 1000
            },
            goals: ["Резерв на лечение", "Небольшой ремонт"],
            correctChoices: ["Оптимизировать платежи", "Искать льготы", "Создать резерв"],
            incorrectChoices: ["Взять кредит", "Продать квартиру", "Отказаться от лечения"]
        },
        {
            id: 4,
            name: "🎓 Студент",
            description: "Дмитрий, 20 лет. Учится в университете, живет в общежитии, подрабатывает курьером.",
            income: "15 000 руб/мес",
            expenses: {
                "Общежитие": 2000,
                "Питание": 8000,
                "Транспорт": 2000,
                "Учеба": 1500,
                "Развлечения": 1000,
                "Накопления": 500
            },
            goals: ["Новый ноутбук", "Поездка домой на каникулы"],
            correctChoices: ["Составить строгий бюджет", "Искать подработку", "Экономить на питании"],
            incorrectChoices: ["Взять микрокредит", "Бросить учебу", "Продать телефон"]
        },
        {
            id: 5,
            name: "💼 Фрилансер",
            description: "Мария, 32 года. Работает удаленно, доход нестабильный, снимает квартиру.",
            income: "80 000 руб/мес",
            expenses: {
                "Аренда": 25000,
                "Питание": 15000,
                "Налоги": 7000,
                "Путешествия": 10000,
                "Техника": 5000,
                "Накопления": 8000
            },
            goals: ["Финансовая подушка", "Профессиональные курсы"],
            correctChoices: ["Создать резерв", "Учесть сезонность", "Сократить спонтанные траты"],
            incorrectChoices: ["Жить в долг", "Увеличить траты", "Игнорировать налоги"]
        },
        {
            id: 6,
            name: "👨‍👩‍👦 Семья с новорожденным",
            description: "Андрей и Светлана, 30 лет. Недавно родился ребенок, Светлана в декрете.",
            income: "90 000 руб/мес",
            expenses: {
                "Ипотека": 25000,
                "Питание": 20000,
                "Ребенок": 15000,
                "Автомобиль": 10000,
                "Коммуналка": 7000,
                "Накопления": 3000
            },
            goals: ["Пережить период с одним доходом", "Резерв на детские нужды"],
            correctChoices: ["Сократить необязательные траты", "Использовать пособия", "Оптимизировать питание"],
            incorrectChoices: ["Взять кредит", "Продать автомобиль", "Прекратить ипотеку"]
        },
        {
            id: 7,
            name: "🚗 Таксист",
            description: "Виктор, 45 лет. Работает на своем автомобиле, имеет семью, кредит на авто.",
            income: "70 000 руб/мес",
            expenses: {
                "Кредит на авто": 15000,
                "Бензин": 12000,
                "Питание": 18000,
                "Ремонт": 5000,
                "Семья": 10000,
                "Накопления": 3000
            },
            goals: ["Погасить кредит досрочно", "Резерв на ремонт"],
            correctChoices: ["Оптимизировать маршруты", "Фонд на ТО", "Рефинансировать кредит"],
            incorrectChoices: ["Работать больше", "Взять второй кредит", "Экономить на обслуживании"]
        },
        {
            id: 8,
            name: "🏠 Арендодатель",
            description: "Елена, 52 года. Сдает две квартиры, имеет пассивный доход, помогает детям.",
            income: "150 000 руб/мес",
            expenses: {
                "Коммуналка": 15000,
                "Ремонт": 10000,
                "Налоги": 13000,
                "Помощь детям": 20000,
                "Личные расходы": 25000,
                "Накопления": 22000
            },
            goals: ["Инвестиции в недвижимость", "Пенсионный капитал"],
            correctChoices: ["Диверсифицировать инвестиции", "Учесть налоги", "Фонд на ремонт"],
            incorrectChoices: ["Вложить все в одну квартиру", "Игнорировать налоги", "Прекратить помощь"]
        },
        {
            id: 9,
            name: "👨‍💻 IT-специалист",
            description: "Артем, 35 лет. Высокий доход, нет семьи, инвестирует в акции.",
            income: "300 000 руб/мес",
            expenses: {
                "Аренда": 60000,
                "Питание": 25000,
                "Технологии": 30000,
                "Инвестиции": 50000,
                "Развлечения": 40000,
                "Накопления": 45000
            },
            goals: ["Собственное жилье", "Инвестиционный портфель"],
            correctChoices: ["Увеличить инвестиции", "Оптимизировать аренду", "План на покупку жилья"],
            incorrectChoices: ["Увеличить развлечения", "Прекратить инвестировать", "Ипотека без накоплений"]
        },
        {
            id: 10,
            name: "👩‍🏫 Учитель",
            description: "Наталья, 42 года. Воспитывает дочь-подростка одна, имеет ипотеку.",
            income: "45 000 руб/мес",
            expenses: {
                "Ипотека": 15000,
                "Питание": 12000,
                "Образование дочери": 8000,
                "Коммуналка": 5000,
                "Транспорт": 3000,
                "Накопления": 1000
            },
            goals: ["Образование дочери", "Ремонт в квартире"],
            correctChoices: ["Искать доп. доход", "Использовать льготы", "Строгий бюджет"],
            incorrectChoices: ["Кредит на ремонт", "Прекратить занятия", "Отказаться от страховки"]
        }
    ];

    let currentProfile = 0;
    let totalScore = 0;
    let userAnswers = [];

    function showProfile() {
        if (currentProfile >= profiles.length) {
            showFinalResults();
            return;
        }

        const profile = profiles[currentProfile];
        const totalExpenses = Object.values(profile.expenses).reduce((a, b) => a + b, 0);
        const freeMoney = parseInt(profile.income.replace(/\D/g, '')) - totalExpenses;
        
        budgetContent.innerHTML = `
            <div class="policy-game-profile">
                <div class="profile-header">
                    <h3>${profile.name}</h3>
                    <div class="profile-progress">
                        Семья ${currentProfile + 1} из ${profiles.length}
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((currentProfile + 1) / profiles.length) * 100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="profile-info">
                    <div class="profile-description">
                        <h4>Описание ситуации:</h4>
                        <p>${profile.description}</p>
                        <p><strong>Доход:</strong> ${profile.income}</p>
                    </div>
                    
                    <div class="current-budget">
                        <h4>Текущий бюджет:</h4>
                        <div class="expenses-list">
                            ${Object.entries(profile.expenses).map(([category, amount]) => `
                                <div class="expense-item">
                                    <span class="expense-category">${category}</span>
                                    <span class="expense-amount">${amount.toLocaleString()} руб</span>
                                </div>
                            `).join('')}
                            <div class="expense-total">
                                <strong>Итого расходы:</strong> ${totalExpenses.toLocaleString()} руб
                            </div>
                            <div class="free-money ${freeMoney >= 0 ? 'positive' : 'negative'}">
                                <strong>Свободные средства:</strong> ${freeMoney.toLocaleString()} руб
                            </div>
                        </div>
                    </div>

                    <div class="financial-goals">
                        <h4>Финансовые цели:</h4>
                        <ul>
                            ${profile.goals.map(goal => `<li>${goal}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="policies-selection">
                    <h4>Как оптимизировать бюджет?</h4>
                    <p class="selection-hint">Выберите 2-3 наиболее эффективных способа оптимизации:</p>
                    
                    <div class="policies-grid">
                        ${[...profile.correctChoices, ...profile.incorrectChoices]
                            .sort(() => Math.random() - 0.5)
                            .map((choice, index) => `
                                <label class="policy-checkbox">
                                    <input type="checkbox" value="${choice}" 
                                           data-correct="${profile.correctChoices.includes(choice)}">
                                    <span class="checkmark"></span>
                                    <div class="policy-info">
                                        <strong>${choice}</strong>
                                    </div>
                                </label>
                            `).join('')}
                    </div>
                    
                    <div class="selection-summary">
                        <div class="selected-count">
                            Выбрано: <span id="selected-count">0</span> из 3
                        </div>
                    </div>

                    <button class="btn btn-primary" onclick="checkBudgetSelection()" id="check-button">
                        Проверить выбор
                    </button>
                </div>
            </div>
        `;

        // Ограничиваем выбор 3 пунктами
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checked = document.querySelectorAll('input[type="checkbox"]:checked');
                if (checked.length > 3) {
                    this.checked = false;
                }
                document.getElementById('selected-count').textContent = checked.length;
            });
        });
    }

    window.checkBudgetSelection = function() {
        const selectedChoices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => ({
                text: checkbox.value,
                correct: checkbox.dataset.correct === 'true'
            }));
        
        const profile = profiles[currentProfile];
        
        // Анализ выбора
        const correctSelected = selectedChoices.filter(choice => choice.correct).length;
        const incorrectSelected = selectedChoices.filter(choice => !choice.correct).length;
        
        // Расчет баллов (максимум 3 балла за профиль)
        let roundScore = Math.max(0, correctSelected - incorrectSelected);
        totalScore += roundScore;
        
        // Сохраняем ответы
        userAnswers.push({
            profile: profile.name,
            selected: selectedChoices,
            score: roundScore
        });
        
        showRoundResults(profile, selectedChoices, correctSelected, incorrectSelected, roundScore);
    };

    function showRoundResults(profile, selectedChoices, correctSelected, incorrectSelected, roundScore) {
        budgetContent.innerHTML = `
            <div class="policy-results">
                <h3>Результаты для ${profile.name}</h3>
                
                <div class="score-breakdown">
                    <div class="score-card correct">
                        <h4>✅ Правильные решения</h4>
                        <div class="score-number">${correctSelected}</div>
                        <div class="policies-list">
                            ${selectedChoices.filter(choice => choice.correct)
                                .map(choice => `
                                    <div class="policy-item selected">
                                        ${choice.text} ✓
                                    </div>
                                `).join('')}
                            ${profile.correctChoices.filter(correct => 
                                !selectedChoices.some(selected => selected.text === correct)
                            ).map(correct => `
                                <div class="policy-item missed">
                                    ${correct} ✗
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="score-card incorrect">
                        <h4>❌ Неэффективные решения</h4>
                        <div class="score-number">${incorrectSelected}</div>
                        <div class="policies-list">
                            ${selectedChoices.filter(choice => !choice.correct)
                                .map(choice => `
                                    <div class="policy-item extra">
                                        ${choice.text}
                                    </div>
                                `).join('') || '<div class="no-policies">Нет неэффективных решений</div>'}
                        </div>
                    </div>
                </div>
                
                <div class="expert-explanation">
                    <h4>💡 Советы эксперта:</h4>
                    <p>${getExpertAdvice(profile)}</p>
                </div>
                
                <div class="round-score">
                    <h4>Баллы за раунд: <span class="score-value">${roundScore}</span></h4>
                </div>
                
                <button class="btn btn-primary" onclick="nextProfile()">
                    ${currentProfile < profiles.length - 1 ? 'Следующая семья' : 'Посмотреть результаты'}
                </button>
            </div>
        `;
    }

    function getExpertAdvice(profile) {
        const advice = {
            1: "Молодой паре стоит сосредоточиться на накоплениях. Сокращение развлечений и оптимизация регулярных расходов помогут быстрее накопить на первоначальный взнос.",
            2: "Семье с детьми важно найти баланс между текущими нуждами и долгосрочными целями. Оптимизация транспортных расходов может высвободить значительные средства.",
            3: "Пенсионерке важно оптимизировать обязательные платежи и использовать все доступные льготы. Небольшой, но регулярный резерв поможет в непредвиденных ситуациях.",
            4: "Студенту важно научиться жить по средствам. Составление строгого бюджета и поиск дополнительных доходов - ключ к финансовой стабильности.",
            5: "Фрилансеру критически важна финансовая подушка. Учет сезонности доходов и сокращение спонтанных трат помогут пережить периоды без работы.",
            6: "Семье с одним доходом важно оптимизировать все расходы и максимально использовать государственную поддержку. Даже небольшая экономия поможет создать резерв.",
            7: "Таксисту важно систематизировать профессиональные расходы. Оптимизация маршрутов и создание фонда на обслуживание автомобиля снизят финансовую нагрузку.",
            8: "Арендодателю важно правильно распределять пассивный доход между текущими нуждами и долгосрочными инвестициями. Диверсификация защитит от рисков.",
            9: "При высоком доходе важно максимизировать инвестиции. Систематическое увеличение доли инвестиций в бюджете ускорит достижение финансовых целей.",
            10: "При скромном доходе важно использовать все доступные льготы и постепенно двигаться к целям. Поиск дополнительных источников дохода может значительно улучшить ситуацию."
        };
        return advice[profile.id] || "Правильное планирование бюджета - ключ к финансовой стабильности.";
    }

    window.nextProfile = function() {
        currentProfile++;
        showProfile();
    };

    function showFinalResults() {
        const maxPossibleScore = profiles.length * 3;
        const percentage = (totalScore / maxPossibleScore) * 100;
        
        let message = '';
        let emoji = '';
        
        if (percentage >= 80) {
            message = "Отлично! Вы отлично разбираетесь в планировании бюджета!";
            emoji = "🏆";
        } else if (percentage >= 60) {
            message = "Хорошо! Вы понимаете основы финансового планирования!";
            emoji = "⭐";
        } else {
            message = "Есть над чем поработать! Практикуйтесь и изучайте финансовую грамотность!";
            emoji = "📚";
        }

        budgetContent.innerHTML = `
            <div class="policy-final-results">
                <h3>Игра завершена!</h3>
                
                <div class="final-score-display">
                    <div class="score-circle">
                        <span class="score">${totalScore}/${maxPossibleScore}</span>
                    </div>
                    <div class="score-percentage">${Math.round(percentage)}%</div>
                </div>
                
                <div class="result-emoji">${emoji}</div>
                <p class="result-message">${message}</p>
                
                <div class="profiles-summary">
                    <h4>Результаты по 10 семьям:</h4>
                    <div class="profiles-grid">
                        ${userAnswers.map((answer, index) => `
                            <div class="profile-result ${answer.score > 0 ? 'good' : 'bad'}">
                                <strong>${answer.profile}</strong>
                                <div class="mini-score">${answer.score} балл(ов)</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="results-details">
                    <button class="btn btn-primary" onclick="restartBudgetGame()">Играть снова</button>
                    <button class="btn btn-secondary" onclick="backToGames()">К списку игр</button>
                </div>
            </div>
        `;
    }

    window.restartBudgetGame = function() {
        currentProfile = 0;
        totalScore = 0;
        userAnswers = [];
        showProfile();
    };

    // Инициализация игры
    showProfile();
}

// Автоматическая инициализация
if (document.getElementById('budget-content')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBudgetGame);
    } else {
        initBudgetGame();
    }
}