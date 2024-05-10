window.onload = function () {
    // Конфигурация карусели
    const carouselStageConfig = {
        slidesToShow: 1, // Количество слайдов для показа
        scrollStep: 1,   // Шаг прокрутки
    };

    // Функция отображения слайдов
    function displaySlidesStage(slidesStage, startIndexStage, endIndexStage) {
        const carouselStage = document.getElementById('stage-slider');
        carouselStage.innerHTML = ''; // Очистка карусели перед отображением новых слайдов

        for (let i = startIndexStage; i <= endIndexStage; i++) {
            const slideStage = slidesStage[i].cloneNode(true);
            slideStage.classList.add('stage-slider-item');
            carouselStage.appendChild(slideStage);
        }
    }

    // Инициализация карусели
    function initCarouselStage(slidesStage, config) {
        const { slidesToShow, scrollStep } = config;
        let startIndexStage = 0;
        let endIndexStage = slidesToShow - 1;

        displaySlidesStage(slidesStage, startIndexStage, endIndexStage); 

        const slidesIndexStage = slidesStage.length;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('dots');

        // Функция обновления точек (индикаторов)
        function updateDots(index) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slidesStage.length; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === index) {
                    dot.classList.add('active');
                }
                dotsContainer.appendChild(dot);
            }
        }

        
        updateDots(startIndexStage);

        prevBtn.addEventListener('click', () => {
            if (startIndexStage > 0) {
                startIndexStage -= scrollStep;
                endIndexStage -= scrollStep;
                displaySlidesStage(slidesStage, startIndexStage, endIndexStage);
                updateDots(startIndexStage);
            }
            if (startIndexStage === 0) {
                prevBtn.setAttribute('disabled', 'true');
            } else {
                prevBtn.removeAttribute('disabled');
            }
            nextBtn.removeAttribute('disabled');
        });

        nextBtn.addEventListener('click', () => {
            if (endIndexStage < slidesIndexStage - 1) {
                startIndexStage += scrollStep;
                endIndexStage += scrollStep;
                displaySlidesStage(slidesStage, startIndexStage, endIndexStage);
                updateDots(startIndexStage);
            }
            if (endIndexStage === slidesIndexStage - 1) {
                nextBtn.setAttribute('disabled', 'true');
            } else {
                nextBtn.removeAttribute('disabled');
            }
            prevBtn.removeAttribute('disabled');
        });

        if (startIndexStage === 0) {
            prevBtn.setAttribute('disabled', 'true');
        }
    }


    // Проверка разрешения экрана при изменении размера окна
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 700) {

            // Вызов функции инициализации карусели
            const slidesStage = document.querySelectorAll('.stage-slider-item');
            initCarouselStage(slidesStage, carouselStageConfig);
        }
    });

    // Проверка ширины экрана при загрузке страницы
    if (window.innerWidth <= 700) {
        // Вызов функции инициализации карусели
        const slidesStage = document.querySelectorAll('.stage-slider-item');
        initCarouselStage(slidesStage, carouselStageConfig);
    }
    




    const carousel = document.getElementById('participants-slider');
    const slides = carousel.querySelectorAll('.participants-item');
    const slideContainer = carousel.querySelector('.slide-container');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideWidth = carousel.offsetWidth / 3; // Ширина слайда по умолчанию

    const prevBtnPart = document.getElementById('prevBtnPart');
    const nextBtnPart = document.getElementById('nextBtnPart');
    const currentSlide = document.getElementById('currentSlide');
    const totalSlidesDisplay = document.getElementById('totalSlides');

    totalSlidesDisplay.textContent = totalSlides;

    prevBtnPart.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextBtnPart.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    function updateCarousel() {
        slideWidth = carousel.offsetWidth; // Обновление ширины карусели при изменении размера экрана
        slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Прокрутка на 1 слайд
        currentSlide.textContent = currentIndex + 1;
    }

    window.addEventListener('resize', () => { // Обновление карусели при изменении размера экрана
        updateCarousel();
    });

    updateCarousel(); // Инициализация карусели при загрузке страницы

    setInterval(() => { // Автоматическая прокрутка карусели
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 4000);

};