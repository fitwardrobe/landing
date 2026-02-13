document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle removed (handled by js/mobile-nav.js)


    // 2. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');
            
            // Close all first
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // Toggle current if it wasn't active
            if (!isActive) {
                header.classList.add('active');
                header.nextElementSibling.style.maxHeight = header.nextElementSibling.scrollHeight + "px";
            }
        });
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Navbar Scroll Effect (Shadow on scroll)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "var(--shadow-md)";
        } else {
            navbar.style.boxShadow = "var(--shadow-sm)";
        }
    });

    // 5. Smooth Scroll Offset
    // (CSS scroll-padding-top handles layout, this ensures consistent behavior support)
    document.documentElement.style.scrollPaddingTop = "80px";



    // 7. Cookie Consent Logic
    (function() {
        'use strict';
        
        const CONSENT_KEY = 'fitwardrobe_cookie_consent';
        const popup = document.getElementById('cookie-consent');
        const acceptBtn = document.getElementById('cookie-accept');
        const analyticsBtn = document.getElementById('cookie-analytics');
        
        if (popup && !localStorage.getItem(CONSENT_KEY)) {
            setTimeout(() => {
                popup.style.display = 'block';
            }, 1000);
        }
        
        acceptBtn?.addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'all');
            closePopup();
        });
        
        analyticsBtn?.addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'analytics-only');
            closePopup();
        });
        
        function closePopup() {
            if (!popup) return;
            popup.classList.add('hiding');
            setTimeout(() => {
                popup.style.display = 'none';
                popup.remove();
            }, 400);
        }
    })();
});
