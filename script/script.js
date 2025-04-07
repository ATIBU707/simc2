let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function updateNavButtons() {
    let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    let nextIndex = (slideIndex + 1) % slides.length;

    prevBtn.style.backgroundImage = `url(${slides[prevIndex].getElementsByTagName('img')[0].src})`;
    nextBtn.style.backgroundImage = `url(${slides[nextIndex].getElementsByTagName('img')[0].src})`;
}

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    slideIndex = n;
    updateNavButtons();

    // Get all text elements in the current slide
    const textElements = slides[n].querySelectorAll('.text h2, .text p');
    
    // Apply typewriter effect to each text element with slight delay between them
    textElements.forEach((element, index) => {
        const originalText = element.textContent;
        setTimeout(() => {
            typeWriter(element, originalText);
        }, index * 1000); // 1 second delay between each text element
    });
}

function showNextSlide() {
    let nextIndex = (slideIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function showPrevSlide() {
    let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function autoSlideShow() {
    showNextSlide();
    setTimeout(autoSlideShow, 10000); // Change slide every 10 seconds
}

// Initialize first slide and buttons
showSlide(0);
setTimeout(autoSlideShow, 10000);

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
    x.className += " responsive";
    } else {
    x.className = "navbar";
    }
}

// Enhanced Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const dropdowns = document.querySelectorAll('.dropdown');
const body = document.body;

// Toggle menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest('.menu') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        body.style.overflow = "";
        dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
    }
});

// Handle dropdown toggles
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        // Remove the desktop behavior
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                }
            });
            
            dropdown.classList.toggle("active");
        }
        // Remove the else block for desktop behavior
    });
});

// Close menu when clicking a link
document.querySelectorAll(".menu ul li a:not(.dropdown > a)").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        body.style.overflow = "";
        dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
            body.style.overflow = "";
            dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
        }
    }, 250);
});