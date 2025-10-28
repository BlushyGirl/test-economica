// Функциональность для страницы теории
document.addEventListener('DOMContentLoaded', function() {
    initTheoryPage();
});

function initTheoryPage() {
    initScrollSpy();
    initReadingProgress();
    initTabs();
    initPrintFunction();
}

// Отслеживание прокрутки для навигации
function initScrollSpy() {
    const sections = document.querySelectorAll('.theory-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Инициализация при загрузке
}

// Прогресс чтения
function initReadingProgress() {
    const content = document.querySelector('.theory-content');
    const progressFill = document.getElementById('reading-progress');
    
    function updateProgress() {
        const contentHeight = content.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / contentHeight) * 100;
        progressFill.style.width = Math.min(progress, 100) + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Инициализация
}

// Вкладки для видов страхования
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Убираем активный класс у всех кнопок и контента
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и контенту
            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Функция печати
function initPrintFunction() {
    window.printPage = function() {
        window.print();
    };
}

// Плавная прокрутка для навигационных ссылок
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});