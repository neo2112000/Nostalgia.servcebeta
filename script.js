let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots[index].classList.remove('active');
    });
    
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlides();
}

// Initialize the gallery
showSlides();
