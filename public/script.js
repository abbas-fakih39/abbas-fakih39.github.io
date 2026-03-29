// Initialize EmailJS avec votre Public Key
(function() {
    emailjs.init("bLECYSz1NM7GcjAev"); // Remplacez par votre Public Key d'EmailJS
})();

// Basculement du menu mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

const closeMobileMenu = () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
};

const openMobileMenu = () => {
    navMenu.classList.add('active');
    hamburger.classList.add('active');
    body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
};

hamburger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
hamburger.setAttribute('aria-expanded', 'false');

// Défilement fluide pour les liens de navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Fermer le menu mobile s'il est ouvert
        closeMobileMenu();
    });
});

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

document.addEventListener('click', (event) => {
    const clickedOutsideMenu = !navMenu.contains(event.target);
    const clickedOutsideButton = !hamburger.contains(event.target);

    if (navMenu.classList.contains('active') && clickedOutsideMenu && clickedOutsideButton) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// En-tête collant lors du défilement
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer pour les animations de fondu
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les cartes qui doivent apparaitre au scroll
document.querySelectorAll('.reveal-card').forEach(card => {
    observer.observe(card);
});

// Bouton retour en haut
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Soumission du formulaire de contact avec EmailJS
const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Désactiver le bouton pendant l'envoi
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    
    // Envoyer l'email via EmailJS
    emailjs.sendForm(
        'service_jq5ib7h',    // Remplacez par votre Service ID
        'template_m3asgjl',   // Remplacez par votre Template ID
        contactForm
    )
    .then(() => {
        // Succès
        alert('Merci! Votre message a été envoyé avec succès. Je vous répondrai bientôt.');
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le Message';
    })
    .catch((error) => {
        // Erreur
        console.error('Erreur:', error);
        alert('Désolé, une erreur s\'est produite. Veuillez réessayer ou m\'envoyer un email directement.');
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le Message';
    });
});

// Ajouter la classe active à la navigation lors du défilement
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Effet de frappe pour le sous-titre hero (amélioration optionnelle)
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Démarrer l'effet de frappe au chargement de la page
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});
