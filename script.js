
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger
    if (hamburger.classList.contains('active')) {
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        hamburger.style.transform = 'rotate(0)';
    }
});

// Scroll reveal
function reveal() {
    const reveals = document.querySelectorAll('.section');
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('reveal', 'active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Keyboard shortcut: press "K" → scroll to top
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'k') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Random subtle glitch trigger
function triggerGlitch() {
    const logo = document.querySelector('.glitch');
    if (!logo) return;
    
    logo.classList.add('active-glitch');
    setTimeout(() => {
        logo.classList.remove('active-glitch');
    }, 800);
}

// Jalankan glitch setiap 6–12 detik secara random
setInterval(() => {
    if (Math.random() > 0.6) {   // ~40% kemungkinan trigger
        triggerGlitch();
    }
}, 10000);

// Trigger pertama setelah 3 detik page load
setTimeout(triggerGlitch, 3000);