/* ===================================== */
/* Smooth Scrolling                      */
/* ===================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* ===================================== */
/* Mobile Navigation Toggle              */
/* ===================================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* ===================================== */
/* Navbar Style on Scroll                */
/* ===================================== */
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
        }
    });
}

/* ===================================== */
/* Active Navigation Link Highlight      */
/* ===================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ===================================== */
/* Hero Parallax Effect                  */
/* ===================================== */
const heroContent = document.querySelector('.hero-content');

if (heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = `${1 - scrolled / 700}`;
        }
    });
}

/* ===================================== */
/* Typing Effect for Hero Name           */
/* ===================================== */
const heroName = document.querySelector('.hero-name');

if (heroName) {
    const originalText = heroName.textContent.trim();
    heroName.textContent = '';

    let index = 0;

    const typeEffect = () => {
        if (index < originalText.length) {
            heroName.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeEffect, 90);
        }
    };

    // Delay for better UX
    setTimeout(typeEffect, 400);
}

/* ===================================== */
/* Reveal Animation on Scroll (NEW)      */
/* ===================================== */
const revealElements = document.querySelectorAll('.section, .card, .skill-card');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
