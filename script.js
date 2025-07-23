// CloakerPro Landing Page JavaScript
// Handles language switching, mobile navigation, and interactive features

(function() {
    'use strict';

    // Global state
    let currentLanguage = 'en';
    let isMenuOpen = false;

    // DOM elements
    let elements = {};

    // Initialize the application
    function init() {
        cacheDOMElements();
        setupEventListeners();
        initializeLanguage();
        initializeAnimations();
        handleMobileNavigation();
    }

    // Cache frequently used DOM elements
    function cacheDOMElements() {
        elements = {
            languageButtons: document.querySelectorAll('.lang-btn'),
            mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
            navMenu: document.querySelector('.nav-menu'),
            navbar: document.querySelector('.navbar'),
            translatableElements: document.querySelectorAll('[data-en]'),
            ctaButtons: document.querySelectorAll('.cta-btn'),
            featureCards: document.querySelectorAll('.feature-card'),
            testimonialCards: document.querySelectorAll('.testimonial-card'),
            faqItems: document.querySelectorAll('.faq-item'),
            dashboardPreview: document.querySelector('.dashboard-preview')
        };
    }

    // Set up all event listeners
    function setupEventListeners() {
        // Language switching
        elements.languageButtons.forEach(button => {
            button.addEventListener('click', handleLanguageSwitch);
        });

        // Mobile menu toggle
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Navbar scroll behavior
        window.addEventListener('scroll', handleNavbarScroll);

        // Intersection Observer for animations
        if ('IntersectionObserver' in window) {
            setupIntersectionObserver();
        }

        // FAQ accordion functionality
        elements.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => toggleFAQ(item));
            }
        });

        // CTA button hover effects
        elements.ctaButtons.forEach(button => {
            button.addEventListener('mouseenter', handleCTAHover);
            button.addEventListener('mouseleave', handleCTALeave);
        });

        // Dashboard preview interaction
        if (elements.dashboardPreview) {
            elements.dashboardPreview.addEventListener('mouseenter', handleDashboardHover);
            elements.dashboardPreview.addEventListener('mouseleave', handleDashboardLeave);
        }

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);

        // Window resize handling
        window.addEventListener('resize', debounce(handleWindowResize, 250));
    }

    // Handle language switching
    function handleLanguageSwitch(event) {
        const newLanguage = event.target.getAttribute('data-lang');
        
        if (newLanguage === currentLanguage) return;

        // Update active language button
        elements.languageButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // Animate language change
        animateLanguageSwitch(newLanguage);
    }

    // Animate the language switching process
    function animateLanguageSwitch(newLanguage) {
        const elementsToTranslate = Array.from(elements.translatableElements);
        
        // Add fade-out class
        elementsToTranslate.forEach(element => {
            element.style.opacity = '0.7';
            element.style.transform = 'translateY(5px)';
            element.style.transition = 'all 0.2s ease-out';
        });

        // Change language after fade-out
        setTimeout(() => {
            currentLanguage = newLanguage;
            updateTextContent();
            
            // Fade back in
            elementsToTranslate.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });

            // Store language preference
            localStorage.setItem('cloakerpro-language', newLanguage);
        }, 100);
    }

    // Update text content based on current language
    function updateTextContent() {
        elements.translatableElements.forEach(element => {
            const text = element.getAttribute(`data-${currentLanguage}`);
            if (text) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = text;
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = text;
                } else if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', text);
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update document language attribute
        document.documentElement.lang = currentLanguage;
    }

    // Initialize language from localStorage or default to English
    function initializeLanguage() {
        const savedLanguage = localStorage.getItem('cloakerpro-language') || 'en';
        const languageButton = document.querySelector(`[data-lang="${savedLanguage}"]`);
        
        if (languageButton) {
            languageButton.click();
        } else {
            currentLanguage = 'en';
            updateTextContent();
        }
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (elements.navMenu) {
            elements.navMenu.classList.toggle('mobile-open', isMenuOpen);
        }
        
        // Update hamburger icon
        const icon = elements.mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
        }

        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        // Add accessibility attributes
        elements.mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
    }

    // Handle smooth scrolling
    function handleSmoothScroll(event) {
        const targetId = event.target.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        event.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }

        // Calculate offset for fixed navbar
        const navbarHeight = elements.navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Handle navbar scroll behavior
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    }

    // Setup Intersection Observer for animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = [
            ...elements.featureCards,
            ...elements.testimonialCards,
            ...document.querySelectorAll('.pricing-card'),
            ...document.querySelectorAll('.comparison-table'),
            ...document.querySelectorAll('.value-card')
        ];

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Initialize animations
    function initializeAnimations() {
        // Add CSS for animations if not already present
        if (!document.querySelector('#dynamic-animations')) {
            const style = document.createElement('style');
            style.id = 'dynamic-animations';
            style.textContent = `
                .animate-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .navbar.scrolled {
                    background: rgba(15, 23, 42, 0.98);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                }
                
                .mobile-open {
                    display: flex !important;
                    flex-direction: column;
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-primary);
                    padding: var(--spacing-xl);
                    z-index: 999;
                    animation: slideDown 0.3s ease-out;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .faq-item.expanded .faq-answer {
                    max-height: 200px;
                    opacity: 1;
                    margin-top: var(--spacing-md);
                }
                
                .faq-answer {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.3s ease-out;
                }
                
                .faq-question {
                    cursor: pointer;
                    position: relative;
                    padding-right: 30px;
                }
                
                .faq-question::after {
                    content: '+';
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: var(--primary-color);
                    transition: transform 0.3s ease-out;
                }
                
                .faq-item.expanded .faq-question::after {
                    transform: rotate(45deg);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Handle mobile navigation setup
    function handleMobileNavigation() {
        // Add mobile-specific event listeners
        if (window.innerWidth <= 768) {
            // Close menu when clicking outside
            document.addEventListener('click', (event) => {
                if (isMenuOpen && 
                    !elements.navMenu.contains(event.target) && 
                    !elements.mobileMenuToggle.contains(event.target)) {
                    toggleMobileMenu();
                }
            });
        }
    }

    // Toggle FAQ items
    function toggleFAQ(faqItem) {
        const isExpanded = faqItem.classList.contains('expanded');
        
        // Close all FAQ items
        elements.faqItems.forEach(item => {
            item.classList.remove('expanded');
        });
        
        // Open clicked item if it wasn't expanded
        if (!isExpanded) {
            faqItem.classList.add('expanded');
        }
    }

    // Handle CTA button hover effects
    function handleCTAHover(event) {
        event.target.style.transform = 'translateY(-2px) scale(1.02)';
        event.target.style.transition = 'all 0.2s ease-out';
    }

    function handleCTALeave(event) {
        event.target.style.transform = 'translateY(0) scale(1)';
    }

    // Handle dashboard preview interactions
    function handleDashboardHover() {
        if (elements.dashboardPreview) {
            elements.dashboardPreview.style.transform = 'perspective(1000px) rotateY(-2deg) rotateX(2deg) scale(1.02)';
        }
    }

    function handleDashboardLeave() {
        if (elements.dashboardPreview) {
            elements.dashboardPreview.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
        }
    }

    // Handle keyboard navigation
    function handleKeyboardNavigation(event) {
        // Escape key closes mobile menu
        if (event.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Tab navigation improvements
        if (event.key === 'Tab') {
            // Ensure focus is visible
            document.body.classList.add('keyboard-navigation');
        }
    }

    // Handle window resize
    function handleWindowResize() {
        // Close mobile menu on desktop resize
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Update dashboard preview on smaller screens
        if (elements.dashboardPreview && window.innerWidth <= 1024) {
            elements.dashboardPreview.style.transform = 'none';
        }
    }

    // Utility function for debouncing
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

    // Performance monitoring
    function logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('CloakerPro Landing Page Performance:', {
                        domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                        loadComplete: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                        totalTime: Math.round(perfData.loadEventEnd - perfData.fetchStart)
                    });
                }, 0);
            });
        }
    }

    // Analytics tracking (placeholder for real implementation)
    function trackEvent(eventName, properties = {}) {
        // This would integrate with your analytics service
        console.log('Analytics Event:', eventName, properties);
        
        // Example integration points:
        // - Language switches
        // - CTA button clicks
        // - Section scrolling
        // - Feature card interactions
    }

    // Add analytics tracking to key interactions
    function setupAnalytics() {
        // Track language switches
        elements.languageButtons.forEach(button => {
            button.addEventListener('click', () => {
                trackEvent('language_switch', {
                    from: currentLanguage,
                    to: button.getAttribute('data-lang')
                });
            });
        });

        // Track CTA clicks
        elements.ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                trackEvent('cta_click', {
                    button_text: button.textContent.trim(),
                    button_location: button.closest('section')?.className || 'unknown'
                });
            });
        });
    }

    // Error handling
    function handleError(error, context) {
        console.error(`CloakerPro Landing Page Error (${context}):`, error);
        
        // In production, you might want to send this to an error tracking service
        // trackEvent('javascript_error', { error: error.message, context });
    }

    // Initialize accessibility features
    function initializeAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content landmark
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.id = 'main-content';
            heroSection.setAttribute('role', 'main');
        }

        // Improve form accessibility
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
                    const label = form.querySelector(`label[for="${input.id}"]`);
                    if (label) {
                        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
                    }
                }
            });
        });
    }

    // Main initialization
    try {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
        
        // Setup additional features
        setupAnalytics();
        initializeAccessibility();
        logPerformance();
        
    } catch (error) {
        handleError(error, 'initialization');
    }

    // Expose some functions globally for debugging (development only)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        window.CloakerProDebug = {
            switchLanguage: handleLanguageSwitch,
            toggleMenu: toggleMobileMenu,
            currentLanguage: () => currentLanguage,
            trackEvent
        };
    }

})();
