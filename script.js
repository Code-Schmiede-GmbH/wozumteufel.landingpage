// Language switching functionality
let currentLanguage = 'de'; // Default to German

function toggleLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    updateLanguage();
    updateLanguageButton();
    updateDocumentLanguage();
}

function updateLanguage() {
    // Update all elements with data-en and data-de attributes
    const elements = document.querySelectorAll('[data-en][data-de]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update alt attributes for images
    const images = document.querySelectorAll('img[data-alt-en][data-alt-de]');
    images.forEach(img => {
        const alt = img.getAttribute(`data-alt-${currentLanguage}`);
        if (alt) {
            img.alt = alt;
        }
    });
}

function updateLanguageButton() {
    const langButton = document.querySelector('.lang-text');
    if (langButton) {
        const buttonText = currentLanguage === 'de' ? 'EN' : 'DE';
        langButton.textContent = buttonText;
    }
}

function updateDocumentLanguage() {
    document.documentElement.lang = currentLanguage;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            de: 'Fordere deine Freunde heraus, zu erraten, wo Fotos aufgenommen wurden in diesem spannenden standortbasierten Ratespiel. Verfügbar auf mobilen Geräten.',
            en: 'Challenge your friends to guess where photos were taken in this exciting location-based guessing game. Available on mobile devices.'
        };
        metaDescription.content = descriptions[currentLanguage];
    }
    
    // Update page title
    const titles = {
        de: 'Wo zum Teufel - Standort-Ratespiel',
        en: 'Wo zum Teufel - Location Guessing Game'
    };
    document.title = titles[currentLanguage];
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    updateLanguageButton();
    updateDocumentLanguage();

    // Smooth scrolling for navigation links
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background opacity based on scroll
        if (scrollTop > 50) {
            header.style.background = 'rgba(245, 242, 233, 0.98)';
        } else {
            header.style.background = 'rgba(245, 242, 233, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .step, .download-button');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.background-image');
        const rate = scrolled * -0.5;
        background.style.transform = `translateY(${rate}px)`;
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .download-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        });
    });

    // Mobile menu toggle (if needed for future mobile navigation)
    function createMobileMenu() {
        const nav = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                flex-direction: column;
                gap: 4px;
            }
            
            .hamburger-line {
                width: 25px;
                height: 3px;
                background-color: var(--color-text-dark);
                transition: all 0.3s ease;
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: flex;
                }
                
                .nav-links {
                    position: fixed;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: rgba(245, 242, 233, 0.98);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    padding: 20px;
                    transform: translateY(-100%);
                    opacity: 0;
                    transition: all 0.3s ease;
                    border-bottom: 2px solid var(--color-primary);
                }
                
                .nav-links.active {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .nav-links a {
                    padding: 15px 0;
                    border-bottom: 1px solid rgba(78, 59, 42, 0.1);
                }
                
                .nav-links .language-switcher {
                    margin-top: 15px;
                    width: 100%;
                    justify-content: center;
                    padding: 12px 16px;
                }
                
                .nav-links a:last-child {
                    border-bottom: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Insert mobile menu button
        nav.insertBefore(mobileMenuBtn, navLinks);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const lines = this.querySelectorAll('.hamburger-line');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link or the language switcher
        navLinks.querySelectorAll('a, .language-switcher').forEach(element => {
            element.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelectorAll('.hamburger-line').forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            });
        });
    }
    
    // Initialize mobile menu
    createMobileMenu();

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading animation for page load
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add CSS for loading animation
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Utility functions
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

// Optimize scroll performance
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler); 