/* ---- START OF FILE: script.js ---- */
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header'); 

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            const isMenuOpen = navLinks.classList.toggle('active');
            mobileMenu.querySelector('i').classList.toggle('fa-bars', !isMenuOpen);
            mobileMenu.querySelector('i').classList.toggle('fa-times', isMenuOpen);
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.querySelector('i').classList.add('fa-bars');
                    mobileMenu.querySelector('i').classList.remove('fa-times');
                }
            });
        });
    }

    // --- Header Scrolled Effect ---
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Animate on Scroll Effect ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});