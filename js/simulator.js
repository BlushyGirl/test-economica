// Полная версия симулятора управления семейным бюджетом
function initSimulator() {
    const simulatorContent = document.getElementById('simulator-content');
    
    const scenarios = [
        {
            title: "💰 Планирование семейного бюджета",
            situation: "Вы получили семейный доход 120 000 рублей. Нужно распределить средства на месяц.",
            steps: [
                {
                    question: "Какой метод распределения бюджета наиболее эффективен?",
                    options: [
                        {
                            text: "Тратить по мере поступления денег",
                            correct: false,
                            explanation: "Неэффективно! Без плана легко потратить больше, чем можно позволить."
                        },
                        {
                            text: "Использовать правило 50/30/20 для распределения",
                            correct: true,
                            explanation: "Правильно! 50% - обязательные расходы, 30% - желания, 20% - сбережения. Это сбалансированный подход."
                        },
                        {
                            text: "Отложить все в сбережения, жить экономно",
                            correct: false,
                            explanation: "Слишком экстремально! Важен баланс между текущими нуждами и будущими целями."
                        }
                    ]
                },
                {
                    question: "Как распределить обязательные расходы (50% - 60 000 руб)?",
                    options: [
                        {
                            text: "Ипотека 30 000, коммуналка 8 000, питание 15 000, транспорт 7 000",
                            correct: true,
                            explanation: "Верно! Это реалистичное распределение: жилье, еда, транспорт покрыты."
                        },
                        {
                            text: "Развлечения 30 000, еда 20 000, остальное на одежду",
                            correct: false,
                            explanation: "Неправильно! Развлечения - это желания, а не обязательные расходы."
                        },
                        {
                            text: "Все 60 000 на ипотеку",
                            correct: false,
                            explanation: "Нельзя! Нужно учитывать все обязательные статьи расходов."
                        }
                    ]
                },
                {
                    question: "Что делать с 20% на сбережения (24 000 руб)?",
                    options: [
                        {
                            text: "Хранить дома наличными",
                            correct: false,
                            explanation: "Рискованно! Деньги теряют стоимость из-за инфляции и не защищены."
                        },
                        {
                            text: "Разделить: 12 000 - финансовая подушка, 12 000 - инвестиции",
                            correct: true,
                            explanation: "Правильно! Сначала создаем подушку безопасности, затем инвестируем."
                        },
                        {
                            text: "Потратить на крупную покупку",
                            correct: false,
                            explanation: "Сбережения - это не для текущих трат, а для будущей финансовой безопасности."
                        }
                    ]
                }
            ]
        },
        {
            title: "🏠 Крупная покупка - ремонт квартиры",
            situation: "Нужно сделать ремонт за 300 000 рублей. Как правильно спланировать финансы?",
            steps: [
                {
                    question: "Как накопить на ремонт?",
                    options: [
                        {
                            text: "Взять кредит под 20% годовых",
                            correct: false,
                            explanation: "Дорого! Проценты по кредиту значительно увеличат стоимость ремонта."
                        },
                        {
                            text: "Откладывать 25 000 руб/мес в течение года",
                            correct: true,
                            explanation: "Правильно! Планирование и дисциплина позволяют накопить без долгов."
                        },
                        {
                            text: "Продать часть имущества",
                            correct: false,
                            explanation: "Экстремально! Лучше планировать накопления без радикальных мер."
                        }
                    ]
                },
                {
                    question: "Как контролировать расходы на ремонт?",
                    options: [
                        {
                            text: "Довериться прорабу и не следить за расходами",
                            correct: false,
                            explanation: "Рискованно! Без контроля бюджет может быть значительно превышен."
                        },
                        {
                            text: "Составить смету и еженедельно сверять фактические расходы",
                            correct: true,
                            explanation: "Верно! Регулярный контроль помогает оставаться в рамках бюджета."
                        },
                        {
                            text: "Покупать все материалы заранее",
                            correct: false,
                            explanation: "Неэффективно! Могут понадобиться другие материалы в процессе работ."
                        }
                    ]
                },
                {
                    question: "Что делать при превышении бюджета?",
                    options: [
                        {
                            text: "Взять дополнительный кредит",
                            correct: false,
                            explanation: "Опасно! Это может привести к долговой яме."
                        },
                        {
                            text: "Пересмотреть план: отложить второстепенные работы или найти экономию",
                            correct: true,
                            explanation: "Правильно! Гибкость в планировании помогает избежать долгов."
                        },
                        {
                            text: "Прекратить ремонт на полпути",
                            correct: false,
                            explanation: "Неразумно! Уже вложенные средства могут не окупиться."
                        }
                    ]
                }
            ]
        },
        {
            title: "🚨 Финансовая непредвиденная ситуация",
            situation: "Внезапно сломался автомобиль, ремонт стоит 50 000 рублей.",
            steps: [
                {
                    question: "Как поступить с непредвиденными расходами?",
                    options: [
                        {
                            text: "Взять потребительский кредит",
                            correct: false,
                            explanation: "Дорого! Проценты увеличат ваши финансовые обязательства."
                        },
                        {
                            text: "Использовать финансовую подушку безопасности",
                            correct: true,
                            explanation: "Правильно! Именно для таких ситуаций и создается резервный фонд."
                        },
                        {
                            text: "Отказаться от всех текущих трат на месяц",
                            correct: false,
                            explanation: "Сложно реализовать! Могут пострадать обязательные платежи."
                        }
                    ]
                },
                {
                    question: "Как восстановить финансовую подушку?",
                    options: [
                        {
                            text: "Не восстанавливать, жить как есть",
                            correct: false,
                            explanation: "Опасно! Без подушки вы уязвимы для следующих непредвиденных ситуаций."
                        },
                        {
                            text: "Увеличить процент сбережений до 30% на 3-4 месяца",
                            correct: true,
                            explanation: "Верно! Временное увеличение накоплений быстро восстановит резерв."
                        },
                        {
                            text: "Взять еще один кредит для пополнения подушки",
                            correct: false,
                            explanation: "Абсурдно! Кредиты не должны использоваться для сбережений."
                        }
                    ]
                },
                {
                    question: "Как предотвратить подобные ситуации в будущем?",
                    options: [
                        {
                            text: "Перестать пользоваться автомобилем",
                            correct: false,
                            explanation: "Нереалистично! Нужно планировать, а не избегать."
                        },
                        {
                            text: "Создать отдельный фонд на обслуживание автомобиля",
                            correct: true,
                            explanation: "Правильно! Регулярные отчисления на техобслуживание предотвратят крупные траты."
                        },
                        {
                            text: "Надеяться, что больше ничего не сломается",
                            correct: false,
                            explanation: "Наивно! Техника имеет свойство ломаться, к этому нужно готовиться."
                        }
                    ]
                }
            ]
        },
        {
            title: "📈 Инвестирование сбережений",
            situation: "У вас накопилось 200 000 рублей. Куда лучше инвестировать?",
            steps: [
                {
                    question: "С чего начать инвестирование?",
                    options: [
                        {
                            text: "Вложить все в акции одной компании",
                            correct: false,
                            explanation: "Опасно! Отсутствие диверсификации - большой риск."
                        },
                        {
                            text: "Создать финансовую подушку на 6 месяцев, затем инвестировать остальное",
                            correct: true,
                            explanation: "Правильно! Сначала обеспечиваем безопасность, затем думаем о росте."
                        },
                        {
                            text: "Вложить в криптовалюты для быстрой прибыли",
                            correct: false,
                            explanation: "Высокорисково! Криптовалюты очень волатильны и не подходят новичкам."
                        }
                    ]
                },
                {
                    question: "Как распределить инвестиционный портфель?",
                    options: [
                        {
                            text: "50% - банковские вклады, 30% - облигации, 20% - ETF",
                            correct: true,
                            explanation: "Верно! Консервативный подход с диверсификацией подходит начинающим."
                        },
                        {
                            text: "100% - фондовый рынок",
                            correct: false,
                            explanation: "Слишком рискованно! Рынки могут падать, нужна защита."
                        },
                        {
                            text: "Хранить все в рублях на текущем счете",
                            correct: false,
                            explanation: "Неэффективно! Инфляция съедает сбережения."
                        }
                    ]
                },
                {
                    question: "Какой инвестиционный горизонт выбрать?",
                    options: [
                        {
                            text: "1-3 месяца для быстрой прибыли",
                            correct: false,
                            explanation: "Слишком коротко! Инвестиции требуют времени для роста."
                        },
                        {
                            text: "3-5 лет для достижения финансовых целей",
                            correct: true,
                            explanation: "Правильно! Среднесрочный горизонт позволяет пережить рыночные колебания."
                        },
                        {
                            text: "Не определять сроки",
                            correct: false,
                            explanation: "Без целей сложно оценивать эффективность инвестиций."
                        }
                    ]
                }
            ]
        },
        {
            title: "👨‍👩‍👧‍👦 Планирование отпуска с семьей",
            situation: "Хотите поехать в отпуск на 2 недели. Бюджет 150 000 рублей на семью из 3 человек.",
            steps: [
                {
                    question: "Как накопить на отпуск?",
                    options: [
                        {
                            text: "Откладывать 12 500 руб/мес в течение года",
                            correct: true,
                            explanation: "Правильно! Планомерное накопление делает крупные траты комфортными."
                        },
                        {
                            text: "Взять кредит на отпуск",
                            correct: false,
                            explanation: "Финансово неграмотно! Отдыхать в долг - плохая привычка."
                        },
                        {
                            text: "Использовать все сбережения",
                            correct: false,
                            explanation: "Опасно! Лишать себя финансовой подушки ради отдыха неразумно."
                        }
                    ]
                },
                {
                    question: "Как оптимизировать расходы на отпуск?",
                    options: [
                        {
                            text: "Бронировать все в последний момент",
                            correct: false,
                            explanation: "Дорого! Последние предложения обычно самые невыгодные."
                        },
                        {
                            text: "Планировать заранее, использовать акции и скидки",
                            correct: true,
                            explanation: "Верно! Заблаговременное планирование позволяет сэкономить до 30%."
                        },
                        {
                            text: "Экономить на питании и проживании",
                            correct: false,
                            explanation: "Может испортить отдых! Важен разумный баланс экономии и комфорта."
                        }
                    ]
                },
                {
                    question: "Как учесть непредвиденные расходы в поездке?",
                    options: [
                        {
                            text: "Не планировать, решать по ситуации",
                            correct: false,
                            explanation: "Рискованно! Могут возникнуть непредвиденные траты."
                        },
                        {
                            text: "Заложить 15-20% от бюджета на непредвиденное",
                            correct: true,
                            explanation: "Правильно! Резерв на случай непредвиденных обстоятельств."
                        },
                        {
                            text: "Взять дополнительную кредитную карту",
                            correct: false,
                            explanation: "Опасно! Может привести к неконтролируемым долгам."
                        }
                    ]
                }
            ]
        },
        {
            title: "💼 Изменение доходов - снижение зарплаты",
            situation: "Ваша зарплата уменьшилась с 80 000 до 60 000 рублей в месяц.",
            steps: [
                {
                    question: "Как адаптировать бюджет к новому уровню доходов?",
                    options: [
                        {
                            text: "Продолжить жить как раньше, надеясь на лучшее",
                            correct: false,
                            explanation: "Опасно! Может привести к долгам и финансовому кризису."
                        },
                        {
                            text: "Пересмотреть все статьи расходов, найти возможности для экономии",
                            correct: true,
                            explanation: "Правильно! Быстрая адаптация бюджета - ключ к финансовой стабильности."
                        },
                        {
                            text: "Взять кредит для поддержания привычного уровня жизни",
                            correct: false,
                            explanation: "Категорически нельзя! Это усугубит финансовые проблемы."
                        }
                    ]
                },
                {
                    question: "Какие расходы сократить в первую очередь?",
                    options: [
                        {
                            text: "Обязательные платежи (ипотека, коммуналка)",
                            correct: false,
                            explanation: "Нельзя! Это может привести к серьезным проблемам."
                        },
                        {
                            text: "Развлечения, рестораны, необязательные подписки",
                            correct: true,
                            explanation: "Верно! Сначала сокращаем дискреционные расходы."
                        },
                        {
                            text: "Питание и медицину",
                            correct: false,
                            explanation: "Опасно для здоровья! Базовые потребности должны быть приоритетом."
                        }
                    ]
                },
                {
                    question: "Как восстановить прежний уровень доходов?",
                    options: [
                        {
                            text: "Искать дополнительные источники дохода или новую работу",
                            correct: true,
                            explanation: "Правильно! Активные действия помогут улучшить финансовую ситуацию."
                        },
                        {
                            text: "Ждать, когда работодатель повысит зарплату",
                            correct: false,
                            explanation: "Пассивно! Нужно брать инициативу в свои руки."
                        },
                        {
                            text: "Играть в лотерею",
                            correct: false,
                            explanation: "Ненадежно! Вероятность выигрыша крайне мала."
                        }
                    ]
                }
            ]
        },
        {
            title: "🎓 Планирование образования детей",
            situation: "Хотите накопить 1 500 000 рублей на образование ребенка через 10 лет.",
            steps: [
                {
                    question: "Как рассчитать ежемесячные взносы?",
                    options: [
                        {
                            text: "Откладывать 12 500 руб/мес (1 500 000 / 120 месяцев)",
                            correct: false,
                            explanation: "Не учитывает инфляцию! Сумма будет обесценена через 10 лет."
                        },
                        {
                            text: "Откладывать 15 000 руб/мес с учетом инфляции и инвестиционного роста",
                            correct: true,
                            explanation: "Правильно! Учет инфляции и возможной доходности делает план реалистичным."
                        },
                        {
                            text: "Копить по остаточному принципу",
                            correct: false,
                            explanation: "Ненадежно! Без регулярных взносов цель может быть не достигнута."
                        }
                    ]
                },
                {
                    question: "Где хранить образовательные накопления?",
                    options: [
                        {
                            text: "На банковском счете с минимальным процентом",
                            correct: false,
                            explanation: "Неэффективно! Инфляция может съесть сбережения."
                        },
                        {
                            text: "В консервативных инвестиционных инструментах с постепенным снижением риска",
                            correct: true,
                            explanation: "Верно! За 10 лет можно получить умеренный рост с минимальным риском."
                        },
                        {
                            text: "В акциях технологических компаний",
                            correct: false,
                            explanation: "Слишком рискованно для образовательных сбережений!"
                        }
                    ]
                },
                {
                    question: "Как защитить образовательные накопления?",
                    options: [
                        {
                            text: "Ничего не делать, просто копить",
                            correct: false,
                            explanation: "Рискованно! Нужна защита от непредвиденных обстоятельств."
                        },
                        {
                            text: "Застраховать жизнь кормильца и создать завещание",
                            correct: true,
                            explanation: "Правильно! Финансовая защита семьи обеспечит достижение цели даже в непредвиденных ситуациях."
                        },
                        {
                            text: "Рассказать всем о своих накоплениях",
                            correct: false,
                            explanation: "Небезопасно! Финансовая информация должна быть конфиденциальной."
                        }
                    ]
                }
            ]
        },
        {
            title: "🔄 Рефинансирование кредитов",
            situation: "У вас 3 кредита с общей ежемесячной платежной нагрузкой 40 000 рублей.",
            steps: [
                {
                    question: "Стоит ли рассматривать рефинансирование?",
                    options: [
                        {
                            text: "Нет, слишком сложно и долго",
                            correct: false,
                            explanation: "Неверно! Рефинансирование может значительно снизить финансовую нагрузку."
                        },
                        {
                            text: "Да, если новая ставка ниже, а ежемесячный платеж уменьшится",
                            correct: true,
                            explanation: "Правильно! Рефинансирование выгодно при снижении ставки и/или платежа."
                        },
                        {
                            text: "Взять еще один кредит для погашения старых",
                            correct: false,
                            explanation: "Опасно! Может привести к увеличению общей задолженности."
                        }
                    ]
                },
                {
                    question: "Как выбрать банк для рефинансирования?",
                    options: [
                        {
                            text: "Выбрать банк с самой низкой рекламной ставкой",
                            correct: false,
                            explanation: "Недостаточно! Нужно учитывать все условия и скрытые комиссии."
                        },
                        {
                            text: "Сравнить эффективные ставки, условия досрочного погашения, отзывы",
                            correct: true,
                            explanation: "Верно! Комплексный анализ поможет выбрать лучшие условия."
                        },
                        {
                            text: "Выбрать случайный банк",
                            correct: false,
                            explanation: "Безответственно! Финансовые решения требуют тщательного анализа."
                        }
                    ]
                },
                {
                    question: "Что делать после рефинансирования?",
                    options: [
                        {
                            text: "Расслабиться и потратить высвободившиеся деньги",
                            correct: false,
                            explanation: "Неразумно! Высвободившиеся средства лучше направить на сбережения."
                        },
                        {
                            text: "Направить часть высвободившихся средств на досрочное погашение",
                            correct: true,
                            explanation: "Правильно! Это ускорит выход из долгов и сэкономит на процентах."
                        },
                        {
                            text: "Взять новый кредит, раз платежи уменьшились",
                            correct: false,
                            explanation: "Категорически нельзя! Это сводит на нет все преимущества рефинансирования."
                        }
                    ]
                }
            ]
        },
        {
            title: "📊 Анализ финансовых привычек",
            situation: "Замечаете, что деньги утекают непонятно куда, хотя доход стабильный.",
            steps: [
                {
                    question: "С чего начать анализ расходов?",
                    options: [
                        {
                            text: "Вести учет всех трат в течение месяца",
                            correct: true,
                            explanation: "Правильно! Только полная фиксация расходов покажет реальную картину."
                        },
                        {
                            text: "Сократить все расходы сразу на 50%",
                            correct: false,
                            explanation: "Слишком радикально! Может привести к срыву и еще большим тратам."
                        },
                        {
                            text: "Ничего не делать, само наладится",
                            correct: false,
                            explanation: "Пассивно! Без анализа и действий ситуация не изменится."
                        }
                    ]
                },
                {
                    question: "Как выявить проблемные зоны в расходах?",
                    options: [
                        {
                            text: "Сгруппировать расходы по категориям и проанализировать каждую",
                            correct: true,
                            explanation: "Верно! Категоризация помогает понять, куда именно уходят деньги."
                        },
                        {
                            text: "Сравнить свои траты с тратами друзей",
                            correct: false,
                            explanation: "Бесполезно! У всех разные финансовые ситуации и приоритеты."
                        },
                        {
                            text: "Ориентироваться на средние показатели по стране",
                            correct: false,
                            explanation: "Неинформативно! Индивидуальные траты могут сильно отличаться."
                        }
                    ]
                },
                {
                    question: "Как изменить финансовые привычки?",
                    options: [
                        {
                            text: "Резко отказаться от всех спонтанных покупок",
                            correct: false,
                            explanation: "Сложно поддерживать! Резкие изменения часто недолговечны."
                        },
                        {
                            text: "Внедрять изменения постепенно, ставя конкретные цели",
                            correct: true,
                            explanation: "Правильно! Постепенные изменения более устойчивы и эффективны."
                        },
                        {
                            text: "Переложить ответственность на другого члена семьи",
                            correct: false,
                            explanation: "Не решает проблему! Финансовая грамотность нужна всем."
                        }
                    ]
                }
            ]
        }
    ];

    let currentScenario = 0;
    let currentStep = 0;
    let totalScore = 0;
    let maxPossibleScore = 0;
    let currentScenarioScore = 0;
    let userAnswers = [];

    // Рассчитываем максимально возможный балл
    scenarios.forEach(scenario => {
        maxPossibleScore += scenario.steps.length;
    });

    function showScenario() {
        if (currentScenario >= scenarios.length) {
            showFinalResults();
            return;
        }

        const scenario = scenarios[currentScenario];
        currentStep = 0;
        currentScenarioScore = 0;
        userAnswers[currentScenario] = [];
        
        simulatorContent.innerHTML = `
            <div class="simulator-scenario">
                <div class="scenario-header">
                    <h3>${scenario.title}</h3>
                    <div class="scenario-progress">
                        Сценарий ${currentScenario + 1} из ${scenarios.length}
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((currentScenario + 1) / scenarios.length) * 100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="situation-card">
                    <h4>Ситуация:</h4>
                    <p>${scenario.situation}</p>
                </div>

                <div class="scenario-steps">
                    ${scenario.steps.map((step, index) => `
                        <div class="step-item ${index === 0 ? 'active' : ''} ${index < currentStep ? 'completed' : ''}">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-question">${step.question}</div>
                            ${index < currentStep ? '<div class="step-status">✓</div>' : ''}
                        </div>
                    `).join('')}
                </div>

                <button class="btn btn-primary" onclick="startScenarioSteps()">Начать сценарий</button>
            </div>
        `;
    }

    window.startScenarioSteps = function() {
        showStep();
    };

    function showStep() {
        const scenario = scenarios[currentScenario];
        
        if (currentStep >= scenario.steps.length) {
            currentScenario++;
            showScenario();
            return;
        }

        const step = scenario.steps[currentStep];
        
        simulatorContent.innerHTML = `
            <div class="simulator-step">
                <div class="step-header">
                    <h3>${scenarios[currentScenario].title}</h3>
                    <div class="step-progress">
                        Шаг ${currentStep + 1} из ${scenario.steps.length}
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((currentStep + 1) / scenario.steps.length) * 100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="step-question-card">
                    <h4>Вопрос:</h4>
                    <p>${step.question}</p>
                </div>

                <div class="step-options">
                    ${step.options.map((option, index) => `
                        <button class="step-option" onclick="handleStepChoice(${index})">
                            <span class="option-indicator">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option.text}</span>
                        </button>
                    `).join('')}
                </div>

                <div class="current-scenario-score">
                    Правильных ответов в этом сценарии: <strong>${currentScenarioScore}</strong> из ${currentStep}
                </div>
            </div>
        `;
    }

    window.handleStepChoice = function(choiceIndex) {
        const scenario = scenarios[currentScenario];
        const step = scenario.steps[currentStep];
        const chosenOption = step.options[choiceIndex];
        
        // Сохраняем ответ пользователя
        userAnswers[currentScenario][currentStep] = {
            chosenIndex: choiceIndex,
            isCorrect: chosenOption.correct
        };

        // Подсвечиваем варианты
        const options = document.querySelectorAll('.step-option');
        options.forEach((option, index) => {
            if (step.options[index].correct) {
                option.style.backgroundColor = '#d4edda';
                option.style.borderColor = '#c3e6cb';
            } else if (index === choiceIndex && !step.options[index].correct) {
                option.style.backgroundColor = '#f8d7da';
                option.style.borderColor = '#f5c6cb';
            }
            option.disabled = true;
        });

        // Обновляем счетчик если ответ правильный
        if (chosenOption.correct) {
            currentScenarioScore++;
            totalScore++;
        }

        // Показываем объяснение
        setTimeout(() => {
            simulatorContent.innerHTML += `
                <div class="step-feedback">
                    <div class="feedback-card ${chosenOption.correct ? 'correct' : 'incorrect'}">
                        <h4>${chosenOption.correct ? '✅ Правильно!' : '❌ Неправильно'}</h4>
                        <p>${chosenOption.explanation}</p>
                        <button class="btn btn-primary" onclick="nextStep()">Продолжить</button>
                    </div>
                </div>
            `;
        }, 1000);
    };

    window.nextStep = function() {
        currentStep++;
        showStep();
    };

    function showFinalResults() {
        const percentage = (totalScore / maxPossibleScore) * 100;
        let message = '';
        let emoji = '';
        let color = '';
        
        if (percentage >= 90) {
            message = "Блестяще! Вы эксперт в управлении семейным бюджетом!";
            emoji = "🏆";
            color = "#28a745";
        } else if (percentage >= 75) {
            message = "Отлично! Вы хорошо разбираетесь в финансовом планировании!";
            emoji = "⭐";
            color = "#17a2b8";
        } else if (percentage >= 60) {
            message = "Хорошо! Вы понимаете основы, но есть куда расти!";
            emoji = "📚";
            color = "#ffc107";
        } else {
            message = "Есть над чем поработать! Изучите теорию и попробуйте снова!";
            emoji = "🎯";
            color = "#dc3545";
        }

        // Создаем детальную статистику по сценариям
        let scenariosStats = '';
        scenarios.forEach((scenario, scenarioIndex) => {
            const scenarioAnswers = userAnswers[scenarioIndex] || [];
            const correctInScenario = scenarioAnswers.filter(answer => answer.isCorrect).length;
            const totalInScenario = scenario.steps.length;
            
            scenariosStats += `
                <div class="scenario-stat-item ${correctInScenario === totalInScenario ? 'perfect' : correctInScenario >= totalInScenario / 2 ? 'good' : 'needs-improvement'}">
                    <div class="scenario-stat-header">
                        <span class="scenario-title">${scenario.title}</span>
                        <span class="scenario-score">${correctInScenario}/${totalInScenario}</span>
                    </div>
                    <div class="scenario-progress-bar">
                        <div class="scenario-progress-fill" style="width: ${(correctInScenario / totalInScenario) * 100}%"></div>
                    </div>
                </div>
            `;
        });

        simulatorContent.innerHTML = `
            <div class="simulator-results">
                <h3>Результаты симулятора бюджета</h3>
                <div class="score-display">
                    <div class="score-circle" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -20)} 100%)">
                        <span class="score">${totalScore}/${maxPossibleScore}</span>
                    </div>
                    <div class="score-percentage" style="color: ${color}">${Math.round(percentage)}%</div>
                </div>
                <div class="result-emoji">${emoji}</div>
                <p class="result-message">${message}</p>
                
                <div class="scenarios-stats">
                    <h4>Детальная статистика по сценариям:</h4>
                    <div class="scenarios-stats-list">
                        ${scenariosStats}
                    </div>
                </div>
                
                <div class="results-details">
                    <button class="btn btn-primary" onclick="restartSimulator()">Пройти снова</button>
                    <button class="btn btn-secondary" onclick="backToGames()">К списку игр</button>
                </div>
            </div>
        `;
    }

    // Вспомогательная функция для настройки цвета
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    window.restartSimulator = function() {
        currentScenario = 0;
        currentStep = 0;
        totalScore = 0;
        currentScenarioScore = 0;
        userAnswers = [];
        showScenario();
    };

    // Инициализация симулятора
    showScenario();
}