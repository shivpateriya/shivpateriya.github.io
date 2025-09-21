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
    initPremiumCursor(); // Restored original cursor with speed optimization
    initPremiumInteractions();
    initParticleSystem();
    initTiltEffects();
    // initPageTransitions(); // Disabled - user wants direct navigation
    initDynamicBackground();
    initTypewriterEffect();
    initAnimatedSkillBars();
    initProjectShowcase();
    initMatrixRain();
    initThemeToggle(); // Initialize theme switching
    initLazyVideoLoading(); // New: Lazy loading for videos
    initScrollToTop(); // New: Scroll to top button
    initReducedMotion(); // New: Reduced motion support
    initKeyboardAccessibility(); // New: Enhanced keyboard navigation
    
    // Force reset to light theme
    localStorage.removeItem('theme');
    
    // Force light theme on page load
    const stylesheet = document.querySelector('link[rel="stylesheet"][href*="styles"]');
    if (stylesheet) {
        stylesheet.href = 'styles.css';
    }
    document.body.classList.remove('dark-theme');
    
    // Initialize AI Chat Agent
    initAIChatAgent();
    
    // Email copy functionality
    initEmailCopy();
    
    // Initialize futuristic features
    initParticleSystem();
    initCustomCursor();
    initMorphingShapes();
    initAdvancedInteractions();
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
            // Download Shivam's actual resume
            window.open('./Shivam_Pateriya_Resume.pdf', '_blank');
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
        case 'theme-toggle':
            // Handle theme toggle
            toggleTheme();
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
    
    // Smooth following for outline with faster response
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.5; // Increased from 0.3 to 0.5 for faster response
        outlineY += (mouseY - outlineY) * 0.5;
        
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

// AI Chat Agent with Real ChatGPT Integration
function initAIChatAgent() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    const chatTyping = document.getElementById('chatTyping');
    
    // ⚠️ IMPORTANT: Replace with your OpenAI API key
    const OPENAI_API_KEY = '';
    
    // Resume context for ChatGPT
    const RESUME_CONTEXT = `
    SHIVAM PATERIYA - DevOps Engineer
    Location: Gurugram, India | Email: shivampateriya40@gmail.com
    
    EXPERIENCE: 4+ years DevOps and SRE, 99.9% system uptime, 50+ deployments/month
    SKILLS: AWS/Azure/GCP (95%), Kubernetes/Docker (90%), Terraform, Jenkins, ArgoCD
    PROJECTS: Cloud automation (80% faster), Kubernetes monitoring (1M+ requests/day), CI/CD optimization (95% success)
    ACHIEVEMENTS: 99.9% uptime, 80% faster provisioning, 95% deployment success, 50% faster releases
    `;
    
    // Real ChatGPT API call
    async function callChatGPT(userMessage) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are Shivam Pateriya's AI assistant. Answer questions about Shivam based on: ${RESUME_CONTEXT}. Be enthusiastic, professional, use specific details, include relevant emojis (max 2-3), keep responses 2-3 sentences max.`
                        },
                        {
                            role: 'user',
                            content: userMessage
                        }
                    ],
                    max_tokens: 200,
                    temperature: 0.7
                })
            });

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            
            const data = await response.json();
            return data.choices[0].message.content.trim();
            
        } catch (error) {
            console.error('ChatGPT API error:', error);
            return getFallbackResponse(userMessage);
        }
    }
    
    // Fallback responses (in case API fails)
    const aiResponses = {
        greeting: [
            "Hi! I'm here to tell you all about Shivam's DevOps expertise! Ask me anything specific like 'Does Shivam know AWS?' or 'How many years of experience?' 🚀",
            "Hello! Ask me anything about Shivam's skills and experience! Try questions like 'What's his AWS experience?' or 'Tell me about his projects!' 👨‍💻",
            "Hey there! Ready to learn about Shivam's DevOps journey? Ask me specific questions about his skills, experience, or technologies! ⚡"
        ],
        skills: [
            "Shivam's core skills include: ☁️ AWS/Azure/GCP (95% proficiency), ☸️ Kubernetes & Docker (90%+ expertise), 🛠️ Terraform & Ansible for IaC, 🔄 Jenkins & ArgoCD for CI/CD, 📊 Prometheus & Grafana monitoring, 🐧 Linux administration, and 🔒 Security best practices!",
            "His technical expertise spans: Cloud platforms (AWS, Azure, GCP), Container orchestration (Kubernetes, Docker), Infrastructure as Code (Terraform, Ansible), CI/CD pipelines (Jenkins, ArgoCD), Monitoring & observability (Prometheus, Grafana, ELK), Python scripting, and Linux system administration! �",
            "Shivam is proficient in: Multi-cloud architecture, Kubernetes container orchestration, Infrastructure automation with Terraform, CI/CD pipeline optimization, Comprehensive monitoring solutions, Security-first infrastructure design, and DevOps best practices! 🌟"
        ],
        experience: [
            "Shivam has 4+ years of hands-on DevOps experience with an impressive track record: 📈 99.9% system uptime maintained, 🚀 50+ deployments per month managed, 👥 Led teams in GitOps implementation, and ⚡ 80% reduction in provisioning time achieved!",
            "With over 4 years in DevOps and Site Reliability Engineering, he has: Maintained 99.9% uptime across multiple critical projects, Successfully managed 50+ monthly deployments, Led cross-functional teams in modern GitOps workflows, and Specialized in microservices architecture at scale! �",
            "His 4+ years of experience includes: Expert-level cloud infrastructure automation, Building and maintaining high-availability systems, Leading DevOps transformation initiatives, Implementing zero-downtime deployment strategies, and Managing enterprise-scale infrastructure! 🎯"
        ],
        projects: [
            "🏆 Key projects: Cloud Infrastructure Automation (80% faster provisioning), Kubernetes Monitoring Stack (1M+ requests/day), CI/CD Pipeline Optimization (95% success rate), Multi-cloud architecture implementation, Zero-downtime deployment strategies, and Security-first infrastructure design!",
            "📊 Notable achievements: Built monitoring systems handling 1+ million daily requests, Reduced cloud provisioning time by 80% with IaC, Achieved 95% deployment success rate with optimized CI/CD, Implemented GitOps workflows across multiple teams, and Designed resilient microservices architectures!",
            "🚀 Standout projects: Automated infrastructure provisioning reducing setup time by 80%, Enterprise Kubernetes platform serving 1M+ requests daily with 99.9% uptime, CI/CD optimization achieving 95% deployment success and 50% faster releases, and Multi-cloud security implementation!"
        ],
        contact: [
            "📧 Reach Shivam at: shivampateriya40@gmail.com, 🔗 LinkedIn: linkedin.com/in/shivam-pateriya, 📍 Location: Gurugram/Remote, 📺 YouTube: @Shivam_Pateriya, 💻 GitHub: @shivpateriya - He's open to DevOps opportunities and consultations!",
            "💬 Contact options: Email shivampateriya40@gmail.com for direct communication, Connect on LinkedIn for professional networking, Check his YouTube @Shivam_Pateriya for DevOps tutorials, Explore his GitHub @shivpateriya for code samples, Based in Gurugram but available for remote work worldwide! 🌍",
            "🤝 Get in touch: Professional email at shivampateriya40@gmail.com, LinkedIn profile for networking and opportunities, YouTube channel for learning DevOps concepts, GitHub for technical projects and contributions. He's always excited to discuss DevOps challenges and solutions! ⚡"
        ]
    };
    
    // Event listeners
    chatToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', closeChat);
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Quick questions
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-question')) {
            const question = e.target.getAttribute('data-question');
            handleUserMessage(question);
        }
    });
    
    function toggleChat() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
    }
    
    function closeChat() {
        chatWindow.classList.remove('active');
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        handleUserMessage(message);
        chatInput.value = '';
    }
    
    async function handleUserMessage(message) {
        addMessage(message, 'user');
        showTyping();
        
        try {
            // Try ChatGPT first
            const response = await callChatGPT(message);
            hideTyping();
            addMessage(response, 'bot');
        } catch (error) {
            // Fallback to keyword matching if API fails
            console.log('Using fallback response due to API error');
            setTimeout(() => {
                hideTyping();
                const response = getFallbackResponse(message.toLowerCase());
                addMessage(response, 'bot');
            }, 1500);
        }
    }
    
    function getFallbackResponse(message) {
        // Comprehensive keyword matching for fallback
        if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('know')) {
            return getRandomResponse('skills');
        } else if (message.includes('experience') || message.includes('work') || message.includes('background') || message.includes('year') || message.includes('how long')) {
            return getRandomResponse('experience');
        } else if (message.includes('project') || message.includes('portfolio')) {
            return getRandomResponse('projects');
        } else if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire')) {
            return getRandomResponse('contact');
        } else if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('yes')) {
            return getRandomResponse('greeting');
        } else if (message.includes('kubernetes') || message.includes('k8s')) {
            return "Shivam is a Kubernetes expert with 90% proficiency! He's built monitoring stacks handling 1M+ requests/day and specializes in container orchestration. ☸️";
        } else if (message.includes('aws') || message.includes('amazon') || message.includes('cloud')) {
            return "Yes! Shivam has 95% proficiency in AWS along with Azure and GCP! He's automated multi-cloud infrastructure and reduced provisioning time by 80%. He's an AWS expert! ☁️";
        } else if (message.includes('azure') || message.includes('microsoft')) {
            return "Absolutely! Shivam is proficient in Microsoft Azure cloud services and has experience with multi-cloud deployments across AWS, Azure, and GCP! 🔵";
        } else if (message.includes('gcp') || message.includes('google')) {
            return "Yes! Shivam has extensive experience with Google Cloud Platform (GCP) as part of his multi-cloud expertise! 🌐";
        } else if (message.includes('devops') || message.includes('automation')) {
            return "Shivam is a DevOps expert with 4+ years experience, maintaining 99.9% uptime and managing 50+ deployments monthly with cutting-edge automation! 🚀";
        } else if (message.includes('terraform') || message.includes('ansible') || message.includes('iac')) {
            return "He's an Infrastructure as Code specialist using Terraform and Ansible to automate deployments and ensure consistent environments across clouds! 🛠️";
        } else if (message.includes('monitoring') || message.includes('prometheus') || message.includes('grafana')) {
            return "Shivam builds comprehensive monitoring solutions with Prometheus, Grafana, and ELK Stack for real-time observability and alerting! 📊";
        } else if (message.includes('ci/cd') || message.includes('pipeline') || message.includes('jenkins') || message.includes('argocd')) {
            return "He's optimized CI/CD pipelines using Jenkins and ArgoCD, achieving 95% deployment success rates and 50% faster releases with GitOps! 🔄";
        } else {
            return "That's an interesting question! Try asking me about Shivam's DevOps skills, experience, projects, or contact information. I can tell you about his AWS expertise, Kubernetes knowledge, or specific technologies! 💡";
        }
    }
    
    function generateResponse(message) {
        // Legacy function - now redirects to fallback
        return getFallbackResponse(message);
    }
    
    function getRandomResponse(category) {
        const responses = aiResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<p>${text}</p>`;
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 100);
    }
    
    function showTyping() {
        chatTyping.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function hideTyping() {
        chatTyping.style.display = 'none';
    }
}

// Futuristic Particle System
function initParticleSystem() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 12000);
    }
    
    // Create particles continuously
    setInterval(createParticle, 200);
    
    // Add morphing shapes
    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'morph-shape';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDelay = i * 2 + 's';
        document.body.appendChild(shape);
    }
}

// Custom Futuristic Cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    const cursorTrails = [];
    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        cursorTrails.push(trail);
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorTrails.forEach((trail, index) => {
            const delay = (index + 1) * 0.1;
            const trailX = cursorX + (mouseX - cursorX) * delay;
            const trailY = cursorY + (mouseY - cursorY) * delay;
            
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';
            trail.style.opacity = 1 - (index * 0.2);
        });
        
        requestAnimationFrame(updateCursor);
    }
    
    updateCursor();
    
    // Cursor interactions
    document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'var(--neon-pink)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--holo-primary)';
        });
    });
}

// Morphing Shapes Animation
function initMorphingShapes() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Add floating geometric shapes
        for (let i = 0; i < 3; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            shape.style.cssText = `
                position: absolute;
                width: ${50 + Math.random() * 100}px;
                height: ${50 + Math.random() * 100}px;
                background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
                opacity: 0.1;
                border-radius: 50%;
                animation: floatRandom ${10 + Math.random() * 5}s infinite ease-in-out;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
            `;
            heroSection.appendChild(shape);
        }
    }
}

// Advanced Interactions
function initAdvancedInteractions() {
    // Parallax scrolling for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.morph-shape');
        
        parallax.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px) rotateZ(${scrolled * 0.01}deg)`;
        });
    });
    
    // Add glow effect on hover
    document.querySelectorAll('.project-card, .crystal-nav, .btn-primary').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 20px var(--neon-cyan))';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
    
    // Smooth section reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });
}

// Premium Mouse Trail Effect
function initMouseTrailEffect() {
    const trailElements = [];
    const trailLength = 20;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.opacity = (trailLength - i) / trailLength * 0.3;
        trail.style.transform = `scale(${(trailLength - i) / trailLength * 0.5})`;
        document.body.appendChild(trail);
        trailElements.push({ element: trail, x: 0, y: 0 });
    }
    
    document.addEventListener('mousemove', (e) => {
        trailElements.forEach((trail, index) => {
            const delay = index * 50;
            setTimeout(() => {
                trail.x = e.clientX;
                trail.y = e.clientY;
                trail.element.style.left = trail.x + 'px';
                trail.element.style.top = trail.y + 'px';
            }, delay);
        });
    });
}

// Premium Interactive Elements
function initPremiumInteractions() {
    // Magnetic buttons
    document.querySelectorAll('.neon-btn, .crystal-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.filter = 'brightness(1.2)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'brightness(1)';
        });

        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translateY(-5px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
    });
    
    // Ripple effect
    document.querySelectorAll('.ripple').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Enhanced Particle System
function initParticleSystem() {
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        createPremiumParticle();
    }
    
    function createPremiumParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle premium-particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const vx = (Math.random() - 0.5) * 2;
        const vy = (Math.random() - 0.5) * 2;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Random neon color
        const colors = ['#00ffff', '#ff00ff', '#ffff00', '#ff0080', '#80ff00'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
        
        document.body.appendChild(particle);
        
        const particleData = {
            element: particle,
            x: x,
            y: y,
            vx: vx,
            vy: vy,
            life: Math.random() * 5000 + 5000
        };
        
        particles.push(particleData);
        animatePremiumParticle(particleData);
    }
    
    function animatePremiumParticle(particleData) {
        function animate() {
            particleData.x += particleData.vx;
            particleData.y += particleData.vy;
            particleData.life -= 16;
            
            // Bounce off edges
            if (particleData.x <= 0 || particleData.x >= window.innerWidth) {
                particleData.vx *= -1;
            }
            if (particleData.y <= 0 || particleData.y >= window.innerHeight) {
                particleData.vy *= -1;
            }
            
            // Update position
            particleData.element.style.left = particleData.x + 'px';
            particleData.element.style.top = particleData.y + 'px';
            
            // Fade out over time
            const opacity = Math.max(0, particleData.life / 10000);
            particleData.element.style.opacity = opacity;
            
            if (particleData.life > 0) {
                requestAnimationFrame(animate);
            } else {
                // Remove and create new particle
                particleData.element.remove();
                const index = particles.indexOf(particleData);
                if (index > -1) particles.splice(index, 1);
                createPremiumParticle();
            }
        }
        
        animate();
    }
}

// 3D Tilt Effects
function initTiltEffects() {
    document.querySelectorAll('.tilt-effect').forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 15;
            const rotateY = (centerX - x) / centerX * 15;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            this.style.transition = 'none';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// ===== NEW PREMIUM FEATURES =====

// Page Transitions
function initPageTransitions() {
    const transitionOverlay = document.getElementById('page-transition');
    
    // Navigation link transitions
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Show transition
            transitionOverlay.classList.add('active');
            
            setTimeout(() => {
                // Scroll to target
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Hide transition
                setTimeout(() => {
                    transitionOverlay.classList.remove('active');
                    transitionOverlay.classList.add('exit');
                    
                    setTimeout(() => {
                        transitionOverlay.classList.remove('exit');
                    }, 800);
                }, 500);
            }, 400);
        });
    });
}

// Dynamic Background with Floating Shapes
function initDynamicBackground() {
    const shapesContainer = document.getElementById('floating-shapes');
    const shapes = ['triangle', 'circle', 'square', 'hexagon'];
    
    function createFloatingShape() {
        const shape = document.createElement('div');
        shape.className = `floating-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        
        // Random horizontal position
        shape.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        shape.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size variation
        const scale = 0.5 + Math.random() * 0.8;
        shape.style.transform = `scale(${scale})`;
        
        shapesContainer.appendChild(shape);
        
        // Remove shape after animation
        setTimeout(() => {
            if (shape.parentNode) {
                shape.parentNode.removeChild(shape);
            }
        }, 20000);
    }
    
    // Create initial shapes
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFloatingShape(), i * 1000);
    }
    
    // Continuously create new shapes
    setInterval(createFloatingShape, 2000);
    
    // Parallax scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax1 = document.querySelector('.parallax-layer-1');
        const parallax2 = document.querySelector('.parallax-layer-2');
        const parallax3 = document.querySelector('.parallax-layer-3');
        
        if (parallax1) parallax1.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (parallax2) parallax2.style.transform = `translateY(${scrolled * 0.15}px)`;
        if (parallax3) parallax3.style.transform = `translateY(${scrolled * 0.05}px)`;
    });
}

// Typewriter Text Animation
function initTypewriterEffect() {
    const subtitle = document.getElementById('hero-subtitle');
    const description = document.getElementById('hero-description');
    
    function typeWriter(element, text, speed = 50, startDelay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                element.innerHTML = '';
                element.style.opacity = '1';
                let i = 0;
                
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        // Add blinking cursor
                        element.innerHTML += '<span class="typewriter-cursor"></span>';
                        resolve();
                    }
                }
                
                type();
            }, startDelay);
        });
    }
    
    // Start typewriter effects with proper sequencing
    if (subtitle) {
        typeWriter(subtitle, 'DevOps Engineer & Site Reliability Expert', 60, 1500);
    }
    
    if (description) {
        typeWriter(description, 'Building scalable infrastructure and ensuring system reliability with crystalline precision and automation excellence.', 30, 4000);
    }
}

// Animated Skill Progress Bars
function initAnimatedSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const percentages = document.querySelectorAll('.skill-percentage');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                const percentage = bar.parentNode.parentNode.querySelector('.skill-percentage');
                
                // Animate progress bar
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                    bar.classList.add('animate');
                }, 200);
                
                // Animate percentage counter
                if (percentage) {
                    percentage.classList.add('counting');
                    animateCounter(percentage, 0, parseInt(targetWidth), 2000);
                }
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    
    function animateCounter(element, start, end, duration) {
        const startTime = Date.now();
        
        function update() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current + '%';
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        update();
    }
}

// Interactive Project Showcase
function initProjectShowcase() {
    // Add click events to project cards for modal popup
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            const projectDesc = this.querySelector('p').textContent;
            
            // Create modal (placeholder for now)
            showProjectModal(projectTitle, projectDesc);
        });
    });
}

function showProjectModal(title, description) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="project-details">
                <h3>Technologies Used:</h3>
                <div class="tech-badges">
                    <span class="tech-badge">React</span>
                    <span class="tech-badge">Node.js</span>
                    <span class="tech-badge">MongoDB</span>
                </div>
                <div class="project-links">
                    <a href="#" class="btn btn-primary">Live Demo</a>
                    <a href="#" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ===== MATRIX DIGITAL RAIN EFFECT =====
function initMatrixRain() {
    const matrixContainer = document.getElementById('matrix-rain');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    // Create matrix columns
    for (let i = 0; i < columns; i++) {
        createMatrixColumn(i);
    }
    
    function createMatrixColumn(columnIndex) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = columnIndex * 20 + 'px';
        
        // Random animation duration for variation
        const duration = Math.random() * 3 + 2; // 2-5 seconds
        column.style.animationDuration = duration + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        // Create character string for this column
        const charCount = Math.floor(Math.random() * 20) + 10;
        for (let j = 0; j < charCount; j++) {
            const char = document.createElement('span');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            
            // Make some characters fade
            if (Math.random() > 0.7) {
                char.classList.add('fade');
            }
            
            column.appendChild(char);
        }
        
        matrixContainer.appendChild(column);
        
        // Remove column after animation and create new one
        setTimeout(() => {
            if (column.parentNode) {
                column.parentNode.removeChild(column);
                createMatrixColumn(columnIndex);
            }
        }, (duration + 2) * 1000);
        
        // Change characters randomly during animation
        const interval = setInterval(() => {
            const chars_in_column = column.querySelectorAll('.matrix-char');
            chars_in_column.forEach(char => {
                if (Math.random() > 0.95) {
                    char.textContent = chars[Math.floor(Math.random() * chars.length)];
                }
            });
        }, 100);
        
        setTimeout(() => clearInterval(interval), (duration + 2) * 1000);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newColumns = Math.floor(window.innerWidth / 20);
        const currentColumns = matrixContainer.children.length;
        
        if (newColumns > currentColumns) {
            for (let i = currentColumns; i < newColumns; i++) {
                createMatrixColumn(i);
            }
        }
    });
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    console.log('Theme toggle initialization:', themeToggle);
    
    if (!themeToggle) {
        console.error('Theme toggle button not found!');
        return;
    }
    
    // Check for saved theme preference or default to 'light'
    let currentTheme = localStorage.getItem('theme');
    
    // If no theme is saved, or if we want to reset to light, set it to light
    if (!currentTheme) {
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    
    console.log('Current theme:', currentTheme);
    
    // Ensure we start with the correct stylesheet
    const currentStylesheet = document.querySelector('link[rel="stylesheet"][href*="styles"]');
    if (currentTheme === 'light' && currentStylesheet) {
        currentStylesheet.href = 'styles.css';
        document.body.classList.remove('dark-theme');
    }
    
    // Apply the saved theme on page load
    applyTheme(currentTheme);
    updateToggleUI(currentTheme);
}

function toggleTheme() {
    console.log('Toggle theme called!');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    console.log('Switching from', currentTheme, 'to', newTheme);
    
    // Apply theme with smooth transition
    applyTheme(newTheme);
    updateToggleUI(newTheme);
    
    // Save preference
    localStorage.setItem('theme', newTheme);
    
    // Add click animation
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
}

function applyTheme(theme) {
    const currentStylesheet = document.querySelector('link[rel="stylesheet"][href*="styles"]');
    
    if (currentStylesheet) {
        if (theme === 'dark') {
            currentStylesheet.href = 'styles-dark.css';
            document.body.classList.add('dark-theme');
        } else {
            currentStylesheet.href = 'styles.css';
            document.body.classList.remove('dark-theme');
        }
    }
}

function updateToggleUI(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    const themeTooltip = themeToggle.querySelector('.fab-tooltip');
    
    if (theme === 'dark') {
        if (themeIcon) themeIcon.className = 'fas fa-sun';
        if (themeTooltip) themeTooltip.textContent = 'Light Mode';
        themeToggle.style.background = 'linear-gradient(135deg, #ffd700, #ffec8b)';
    } else {
        if (themeIcon) themeIcon.className = 'fas fa-moon';
        if (themeTooltip) themeTooltip.textContent = 'Dark Mode';
        themeToggle.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
}

// Copy email functionality
function copyEmail(element) {
    const email = element.textContent;
    navigator.clipboard.writeText(email).then(() => {
        const originalText = element.textContent;
        element.textContent = '✓ Email copied!';
        element.style.color = 'var(--neon-cyan)';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    });
}

// New: Lazy Loading for YouTube Videos
function initLazyVideoLoading() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const container = this.parentElement;
            
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.title = 'DevOps Tutorial';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.cssText = 'width: 100%; height: 100%; border: none; border-radius: 15px;';
            
            // Add loading animation
            container.style.opacity = '0.7';
            container.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                // Replace thumbnail with iframe
                container.innerHTML = '';
                container.appendChild(iframe);
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// New: Scroll to Top Button
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add ripple effect
        createRippleEffect(scrollButton);
    });
}

// New: Reduced Motion Support
function initReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleMotionPreference(e) {
        if (e.matches) {
            // Disable heavy animations
            document.body.classList.add('reduced-motion');
            
            // Disable particle effects
            const particles = document.querySelectorAll('.particle, .floating-shapes, .matrix-rain');
            particles.forEach(particle => {
                particle.style.display = 'none';
            });
            
            // Simplify animations
            const style = document.createElement('style');
            style.textContent = `
                .reduced-motion * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
                
                .reduced-motion .shimmer-effect,
                .reduced-motion .floating-3d,
                .reduced-motion .tilt-effect {
                    animation: none !important;
                    transform: none !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            document.body.classList.remove('reduced-motion');
        }
    }
    
    // Check initial preference
    handleMotionPreference(prefersReducedMotion);
    
    // Listen for changes
    prefersReducedMotion.addEventListener('change', handleMotionPreference);
}

// New: Enhanced Keyboard Accessibility
function initKeyboardAccessibility() {
    const fabTrigger = document.getElementById('fabTrigger');
    const fabMenu = document.getElementById('fabMenu');
    const fabItems = document.querySelectorAll('.fab-item');
    
    // Make FAB keyboard accessible
    fabTrigger.setAttribute('tabindex', '0');
    fabTrigger.setAttribute('role', 'button');
    fabTrigger.setAttribute('aria-label', 'Open floating action menu');
    
    // Handle keyboard navigation for FAB
    fabTrigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
        
        if (e.key === 'Escape') {
            fabMenu.classList.remove('open');
            this.focus();
        }
    });
    
    // Make FAB items keyboard accessible
    fabItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextItem = fabItems[index + 1] || fabItems[0];
                nextItem.focus();
            }
            
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevItem = fabItems[index - 1] || fabItems[fabItems.length - 1];
                prevItem.focus();
            }
            
            if (e.key === 'Escape') {
                fabMenu.classList.remove('open');
                fabTrigger.focus();
            }
        });
    });
    
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
        .fab-trigger:focus,
        .fab-item:focus {
            outline: 2px solid var(--neon-cyan);
            outline-offset: 2px;
        }
        
        .nav-link:focus,
        .btn:focus,
        .social-link:focus {
            outline: 2px solid var(--neon-cyan);
            outline-offset: 2px;
            outline-style: solid;
        }
    `;
    document.head.appendChild(style);
}

// Helper function for ripple effects
function createRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
