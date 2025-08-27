// Premium DevOps Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Clear any cached session data for fresh experience
    sessionStorage.clear();
    
    // Premium Loading Screen
    initPremiumLoading();
    
    // Initialize premium features
    initTypingEffect();
    initSmoothScrolling();
    initScrollProgress();
    initFloatingActionButton();
    initCrystalAnimations();
    initNavigationEffects();
    initPremiumCursor();
    
    // Email copy functionality
    initEmailCopy();
});

// Premium Loading Screen
function initPremiumLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    document.body.classList.add('loading');
    
    // Simulate realistic loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        document.body.classList.remove('loading');
        
        // Remove loading screen after animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 600);
    }, 1200);
}

// Enhanced Typing Effect with Premium Styling
function initTypingEffect() {
    // Wait for loading screen to complete
    setTimeout(() => {
        const typingElements = document.querySelectorAll('.typing-text');
        
        if (typingElements.length === 0) {
            console.log('No typing elements found, creating them...');
            
            // Find the hero title and create typing structure
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                // Clear existing content
                heroTitle.innerHTML = '';
                
                // Create typing containers
                const firstNameSpan = document.createElement('span');
                firstNameSpan.className = 'typing-text';
                firstNameSpan.setAttribute('data-text', 'Shivam');
                
                const space = document.createTextNode(' ');
                
                const lastNameSpan = document.createElement('span');
                lastNameSpan.className = 'typing-text crystal-text';
                lastNameSpan.setAttribute('data-text', 'Pateriya');
                
                heroTitle.appendChild(firstNameSpan);
                heroTitle.appendChild(space);
                heroTitle.appendChild(lastNameSpan);
                
                // Start typing animation
                startTypingAnimation();
            }
        } else {
            startTypingAnimation();
        }
    }, 2000); // Start after loading screen
}

function startTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach((element, index) => {
        const text = element.getAttribute('data-text');
        
        setTimeout(() => {
            typeText(element, text, 150);
        }, index * 1000);
    });
}

function typeText(element, text, speed) {
    element.innerHTML = '<span class="typing-cursor">|</span>';
    let i = 0;
    
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            const currentText = text.substring(0, i + 1);
            element.innerHTML = currentText + '<span class="typing-cursor">|</span>';
            i++;
        } else {
            clearInterval(typeInterval);
            
            // Remove cursor after a delay
            setTimeout(() => {
                element.innerHTML = text;
            }, 1000);
        }
    }, speed);
}

// Premium Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Premium Floating Action Button
function initFloatingActionButton() {
    const fabTrigger = document.getElementById('fabTrigger');
    const fabMenu = document.getElementById('fabMenu');
    
    if (fabTrigger && fabMenu) {
        fabTrigger.addEventListener('click', function() {
            fabTrigger.classList.toggle('active');
            fabMenu.classList.toggle('active');
        });
        
        // Handle FAB item clicks
        const fabItems = document.querySelectorAll('.fab-item');
        fabItems.forEach(item => {
            item.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                handleFabAction(action);
            });
        });
        
        // Close FAB when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.fab-container')) {
                fabTrigger.classList.remove('active');
                fabMenu.classList.remove('active');
            }
        });
    }
}

function handleFabAction(action) {
    switch(action) {
        case 'resume':
            window.open('#', '_blank');
            break;
        case 'contact':
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'linkedin':
            window.open('https://linkedin.com/in/shivam-pateriya', '_blank');
            break;
        case 'github':
            window.open('https://github.com/shivpateriya', '_blank');
            break;
    }
}

// Crystal Animations
function initCrystalAnimations() {
    const crystals = document.querySelectorAll('.crystal, .main-crystal');
    
    crystals.forEach(crystal => {
        crystal.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotateY(180deg)';
        });
        
        crystal.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    });
}

// Enhanced Navigation Effects
function initNavigationEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Premium Custom Cursor
function initPremiumCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursor || !cursorOutline) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Update cursor position immediately
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move main cursor instantly
        cursor.style.left = (mouseX - 7) + 'px';
        cursor.style.top = (mouseY - 7) + 'px';
    });
    
    // Smooth following for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.3;
        outlineY += (mouseY - outlineY) * 0.3;
        
        cursorOutline.style.left = (outlineX - 17) + 'px';
        cursorOutline.style.top = (outlineY - 17) + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    
    animateOutline();
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .fab-trigger, .fab-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
            cursor.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Email Copy Functionality
function initEmailCopy() {
    const emailElement = document.querySelector('.copyable-email');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                // Show copy confirmation
                const originalText = this.textContent;
                this.textContent = 'Email Copied!';
                this.style.color = '#64ffda';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            });
        });
    }
}
