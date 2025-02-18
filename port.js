document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (window.scrollY > lastScrollY) {
                    entry.target.classList.add("slide-up");
                    entry.target.classList.remove("slide-down");
                } else {
                    entry.target.classList.add("slide-down");
                    entry.target.classList.remove("slide-up");
                }
            } else {
                entry.target.classList.remove("slide-up", "slide-down");
            }
        });
        lastScrollY = window.scrollY;
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Tambahkan efek scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Loading Screen
    window.addEventListener('load', function () {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    });
});
