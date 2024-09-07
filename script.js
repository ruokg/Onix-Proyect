// ----------------------------------------------------------------slider---------------------------------------------------------------- //
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideInterval;


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}


function autoSlides() {
    slideIndex++;
    showSlides(slideIndex);
}


function startAutoSlide() {
    slideInterval = setInterval(autoSlides, 5000); 
}


function stopAutoSlide() {
    clearInterval(slideInterval);
}


function currentSlide(n) {
    stopAutoSlide(); 
    showSlides(n);
    startAutoSlide();
}


function plusSlides(n) {
    stopAutoSlide();
    showSlides(slideIndex + n);
    startAutoSlide();
}


window.onload = function() {
    showSlides(1);
    startAutoSlide();
};