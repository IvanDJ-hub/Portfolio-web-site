var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var header = document.getElementById("header");

// Preload images to avoid lag when changing background
function preloadImages() {
    for (let i = 0; i < slides.length; i++) {
        let img = new Image();
        img.src = slides[i].getElementsByTagName("img")[0].src;
    }
}
preloadImages();

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Get the current image src
    var currentImage = slides[slideIndex - 1].getElementsByTagName("img")[0].src;

    // Change background first to avoid fade lag
    header.style.transition = "background-image 0.7s ease-in-out, opacity 0.5s ease-in-out";
    header.style.opacity = "0.5"; // Gradual fade effect
    setTimeout(() => {
        header.style.backgroundImage = `url('${currentImage}')`;
        header.style.opacity = "1";
    }, 200);

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}