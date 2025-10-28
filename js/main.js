// Основные функции сайта
let currentGame = null;

function startGame(gameType) {
    // Скрываем меню игр
    document.querySelector('.games-grid').style.display = 'none';
    
    // Показываем выбранную игру
    const gameElement = document.getElementById(`${gameType}-game`);
    gameElement.style.display = 'block';
    
    currentGame = gameType;
    
    // Инициализируем выбранную игру
    switch(gameType) {
        case 'quiz':
            initQuiz();
            break;
        case 'terms':
            initTermsGame();
            break;
        case 'simulator':
            initSimulator();
            break;
        case 'policy':
            initPolicyGame();
            break;
    }
}

function backToGames() {
    // Скрываем все игры
    const gameContainers = document.querySelectorAll('.game-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    // Показываем меню игр
    document.querySelector('.games-grid').style.display = 'grid';
    currentGame = null;
}

// Мобильное меню
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Закрываем меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Плавная прокрутка для якорных ссылок
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем все игровые контейнеры при загрузке
    const gameContainers = document.querySelectorAll('.game-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    // Показываем только меню игр
    const gamesGrid = document.querySelector('.games-grid');
    if (gamesGrid) {
        gamesGrid.style.display = 'grid';
    }
    
    // Инициализируем мобильное меню
    initMobileMenu();
    
    // Инициализируем плавную прокрутку
    initSmoothScroll();
});
// Функции для управления играми
function startGame(gameType) {
    // Скрыть все игровые контейнеры
    hideAllGames();
    
    // Показать выбранную игру
    const gameContainer = document.getElementById(`${gameType}-game`);
    if (gameContainer) {
        gameContainer.style.display = 'block';
        
        // Прокрутить к игре
        gameContainer.scrollIntoView({ behavior: 'smooth' });
        
        // Инициализировать игру
        initializeGame(gameType);
    }
}

function backToGames() {
    // Скрыть все игровые контейнеры
    hideAllGames();
    
    // Прокрутить к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideAllGames() {
    const gameContainers = document.querySelectorAll('.game-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
}

function initializeGame(gameType) {
    switch(gameType) {
        case 'quiz':
            if (typeof initQuiz === 'function') {
                initQuiz();
            } else {
                showGameNotReady(gameType);
            }
            break;
        case 'terms':
            if (typeof initTermsGame === 'function') {
                initTermsGame();
            } else {
                showGameNotReady(gameType);
            }
            break;
        case 'simulator':
            if (typeof initSimulator === 'function') {
                initSimulator();
            } else {
                showGameNotReady(gameType);
            }
            break;
        case 'policy':
            if (typeof initPolicyGame === 'function') {
                initPolicyGame();
            } else {
                showGameNotReady(gameType);
            }
            break;
    }
}

function showGameNotReady(gameType) {
    const gameContent = document.getElementById(`${gameType}-content`);
    if (gameContent) {
        gameContent.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🚧</div>
                <h3 style="color: #333; margin-bottom: 1rem;">Игра в разработке</h3>
                <p style="color: #666; margin-bottom: 2rem;">Эта игра находится в стадии разработки и скоро будет доступна.</p>
                <button class="btn btn-primary" onclick="backToGames()">
                    Вернуться к играм
                </button>
            </div>
        `;
    }
}

// Функции перезапуска игр (заглушки)
function restartQuiz() {
    if (typeof resetQuiz === 'function') {
        resetQuiz();
    } else {
        alert('Функция перезапуска квиза будет доступна после реализации игры');
    }
}

function restartTermsGame() {
    if (typeof resetTermsGame === 'function') {
        resetTermsGame();
    } else {
        alert('Функция перезапуска игры с терминами будет доступна после реализации');
    }
}

function restartSimulator() {
    if (typeof resetSimulator === 'function') {
        resetSimulator();
    } else {
        alert('Функция перезапуска симулятора будет доступна после реализации');
    }
}

function restartPolicyGame() {
    if (typeof resetPolicyGame === 'function') {
        resetPolicyGame();
    } else {
        alert('Функция перезапуска игры с полисами будет доступна после реализации');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Скрыть все игровые контейнеры при загрузке
    hideAllGames();
    
    // Добавить обработчики для мобильного меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Инициализация мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('active');
            
            // Блокировка прокрутки при открытом меню
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Закрытие меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Закрытие меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Закрытие меню при изменении размера окна (на десктоп)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
