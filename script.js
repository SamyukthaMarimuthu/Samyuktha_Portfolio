// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// MOBILE NAVIGATION
// ========================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-content')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll('section[id]');
const navigationLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ========================================
// SKILL BARS ANIMATION
// ========================================

const skillProgressBars = document.querySelectorAll('.skill-progress');

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetWidth = progressBar.getAttribute('data-progress') + '%';
            progressBar.style.setProperty('--progress-width', targetWidth);
            progressBar.classList.add('visible');
            observer.unobserve(progressBar);
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

skillProgressBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll('.education-card, .skill-category, .project-card, .timeline-item');

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ========================================
// PARALLAX EFFECT (HERO SECTION)
// ========================================

const heroContent = document.querySelector('.hero-content');
const profileWrapper = document.querySelector('.profile-wrapper');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    if (scrolled < window.innerHeight && heroContent) {
        const parallaxSpeed = 0.3;
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        
        // Fade out effect
        const opacity = 1 - (scrolled / 700);
        if (opacity >= 0) {
            heroContent.style.opacity = opacity;
        }
    }
    
    if (scrolled < window.innerHeight && profileWrapper) {
        const parallaxSpeed = 0.15;
        profileWrapper.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ========================================
// TYPING EFFECT FOR HERO NAME
// ========================================

const heroName = document.querySelector('.hero-name');

if (heroName) {
    const originalText = heroName.textContent;
    heroName.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            heroName.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after page load
    setTimeout(typeWriter, 500);
}

// ========================================
// PROFILE PICTURE LOADING
// ========================================

const profileImage = document.querySelector('.profile-picture img');

if (profileImage) {
    profileImage.addEventListener('load', () => {
        profileImage.style.opacity = '0';
        setTimeout(() => {
            profileImage.style.transition = 'opacity 0.5s ease';
            profileImage.style.opacity = '1';
        }, 100);
    });
}

// ========================================
// CONTACT FORM ENHANCEMENT (if added later)
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        const mailtoLink = `mailto:samyukthamarimuthu6@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client will open.');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// COPY EMAIL TO CLIPBOARD
// ========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        
        // Optional: Add copy to clipboard on click with modifier key
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                alert('Email copied to clipboard!');
            }).catch(() => {
                console.log('Could not copy email');
            });
        }
    });
});

// ========================================
// SMOOTH APPEARANCE ON PAGE LOAD
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// EASTER EGG: KONAMI CODE
// ========================================

let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedUpdateActiveLink = debounce(updateActiveLink, 100);
window.removeEventListener('scroll', updateActiveLink);
window.addEventListener('scroll', debouncedUpdateActiveLink);

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cThanks for checking out my portfolio code!', 'font-size: 14px; color: #6b7280;');
console.log('%c💼 Samyuktha M - Textile Technologist', 'font-size: 12px; color: #7c3aed;');
console.log('%c📧 samyukthamarimuthu6@gmail.com', 'font-size: 12px; color: #10b981;');
