// Simple hover effect for the brand logos
const brands = document.querySelectorAll('.brand-bar img');

brands.forEach(brand => {
    brand.addEventListener('mouseenter', () => {
        brand.style.filter = 'grayscale(0%)';
        brand.style.opacity = '1';
    });
    brand.addEventListener('mouseleave', () => {
        brand.style.filter = 'grayscale(100%)';
        brand.style.opacity = '0.6';
    });
});



const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = '0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});




document.querySelectorAll('.lime-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.querySelector('.arrow-icon').style.transform = 'translate(3px, -3px)';
        link.querySelector('.arrow-icon').style.transition = '0.3s';
    });
    link.addEventListener('mouseleave', () => {
        link.querySelector('.arrow-icon').style.transform = 'translate(0, 0)';
    });
});





function toggleAccordion(element) {
    const items = document.querySelectorAll('.accordion-item');
    
    // Check if the clicked item is already active
    const isActive = element.classList.contains('active');

    // Reset all items to normal (Gray)
    items.forEach(item => {
        item.classList.remove('active');
    });

    // If the clicked item wasn't active, make it active (Green)
    if (!isActive) {
        element.classList.add('active');
    }
}





let currentSlide = 0;
const slider = document.getElementById('testimonialSlider');
const dots = document.querySelectorAll('.dot');

function moveSlider(direction) {
    const slides = document.querySelectorAll('.testimonial-card');
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    // Calculate offset including gap
    const offset = currentSlide * (slides[0].offsetWidth + 40);
    slider.style.transform = `translateX(-${offset}px)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}
