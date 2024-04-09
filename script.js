const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slideritem');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const slideWidth = slides[0].offsetWidth;
const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);

let currentIndex = 0;

function showSlide(index) {
    const slideOffset = -(slideWidth + slideMarginRight) * index;
    slider.style.transform = `translateX(${slideOffset}px)`;
}

function nextSlide() {
    if (currentIndex < slides.length - 3) { 
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);