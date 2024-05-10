window.onload = function() {
    // Проверка разрешения экрана при загрузке страницы
    window.addEventListener('load', function() {
    if (window.innerWidth <= 700) {
        
    }
    });

    // Проверка разрешения экрана при изменении размера окна
    window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        
    }
    });


    const carousel = document.getElementById('participants-slider');
    const slides = carousel.querySelectorAll('.participants-item');
    const slideContainer = carousel.querySelector('.slide-container');
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;
    let currentIndex = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlide = document.getElementById('currentSlide');
    const totalSlidesDisplay = document.getElementById('totalSlides');

    totalSlidesDisplay.textContent = totalSlides;

    prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 3 + totalSlides) % totalSlides;
    updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 3) % totalSlides;
    updateCarousel();
    });

    function updateCarousel() {
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Прокрутка с шагом 1
    currentSlide.textContent = currentIndex + 3;
    }

    setInterval(() => {
    currentIndex = (currentIndex + 3) % totalSlides;
    updateCarousel();
    }, 4000);
};