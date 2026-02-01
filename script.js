/* ===================================== */
/* Smooth Scrolling                      */
/* ===================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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

window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
    }
});

/* ===================================== */
/* Active Navigation Link Highlight      */
/* ===================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* ===================================== */
/* Hero Parallax Effect                  */
/* ===================================== */
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    if (!heroContent) return;

    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 700;
    }
});

/* ===================================== */
/* Typing Effect for Hero Name           */
/* ===================================== */
const heroName = document.querySelector('.hero-name');

if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            heroName.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    };

    setTimeout(typeEffect, 500);
}
