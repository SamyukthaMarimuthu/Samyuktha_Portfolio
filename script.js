document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetTop = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 120) {
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

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.style.boxShadow =
        window.scrollY > 10
            ? '0 4px 20px rgba(0,0,0,0.08)'
            : '0 1px 0 rgba(0,0,0,0.05)';
});
