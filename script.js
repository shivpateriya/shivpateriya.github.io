// Crystal Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Intersection Observer for animations
    initScrollAnimations();
    
    // Particle system
    initParticleSystem();
    
    // Crystal hover effects
    initCrystalEffects();
    
    // Skill bar animations
    initSkillBars();
    
    // Typing effect for hero text
    initTypingEffect();
});

// Navigation functionality
function initNavigation() {
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

// Smooth scrolling
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

// Scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger skill bar animations when skills section is visible
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
                
                // Trigger stats counter animation
                if (entry.target.classList.contains('about-section')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe all crystal cards and sections
    document.querySelectorAll('.crystal-card, section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Particle system for background
function initParticleSystem() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    
    document.querySelector('.crystal-background').appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Crystal hover effects
function initCrystalEffects() {
    const crystalCards = document.querySelectorAll('.crystal-card');
    
    crystalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.08)';
            this.style.borderColor = 'rgba(100, 255, 218, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        // Mouse move effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
}

// Skill bar animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 200);
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        let current = 0;
        const increment = target / 50;
        const suffix = counter.textContent.includes('+') ? '+' : '';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + suffix;
        }, 40);
    });
}

// Typing effect for hero text
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    
    // Only run typing effect on first load
    if (!sessionStorage.getItem('typingComplete')) {
        heroTitle.innerHTML = '';
        
        let index = 0;
        function typeText() {
            if (index < originalText.length) {
                heroTitle.innerHTML += originalText.charAt(index);
                index++;
                setTimeout(typeText, 100);
            } else {
                sessionStorage.setItem('typingComplete', 'true');
            }
        }
        
        setTimeout(typeText, 1000);
    }
}

// Parallax effect for floating crystals
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const crystals = document.querySelectorAll('.crystal');
    
    crystals.forEach((crystal, index) => {
        const speed = 0.5 + (index * 0.1);
        crystal.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Ensure external links work properly
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ensure the link opens properly
            console.log('Opening link:', this.href);
            
            // Add a small delay to ensure the link opens
            setTimeout(() => {
                if (!window.open(this.href, '_blank')) {
                    // Fallback if popup blocked
                    window.location.href = this.href;
                }
            }, 100);
        });
    });
});

// Crystal button effects
document.querySelectorAll('.crystal-btn, .crystal-btn-outline').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add glow effect to main crystal on hover
const mainCrystal = document.querySelector('.main-crystal');
if (mainCrystal) {
    mainCrystal.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.5))';
    });
    
    mainCrystal.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
}

// Resume download functionality
document.addEventListener('click', function(e) {
    if (e.target.textContent === 'View Resume') {
        // Create a sample resume content
        const resumeContent = `
SHIVAM PATERIYA
DevOps Engineer & Site Reliability Engineer

CONTACT INFORMATION
Email: shivampateriya40@gmail.com
LinkedIn: https://www.linkedin.com/in/shivam-pateriya/
GitHub: https://github.com/shivpateriya
Medium: https://medium.com/@shivampateriya40
YouTube: https://www.youtube.com/@Shivam_Pateriya

PROFESSIONAL SUMMARY
Experienced DevOps Engineer and Site Reliability Engineer with 6+ years of expertise 
in cloud infrastructure, automation, and system reliability. Passionate about building 
scalable systems that achieve 99.9% uptime and optimal performance.

TECHNICAL SKILLS
Cloud Platforms: AWS, Azure, Google Cloud Platform
Containerization: Docker, Kubernetes, OpenShift
Infrastructure as Code: Terraform, CloudFormation, Ansible
CI/CD: Jenkins, GitLab CI, GitHub Actions, ArgoCD
Monitoring: Prometheus, Grafana, ELK Stack, Datadog
Programming: Python, Bash, Go, YAML
Operating Systems: Linux (Ubuntu, CentOS, RHEL), Windows Server

EXPERIENCE
Senior DevOps Engineer | CloudTech Solutions | 2022 - Present
• Designed and implemented multi-cloud infrastructure serving 1M+ users daily
• Achieved 99.9% system uptime through comprehensive monitoring and automation
• Reduced deployment time by 80% using GitOps and CI/CD pipelines
• Led migration of legacy systems to Kubernetes, improving scalability by 300%

DevOps Engineer | InfraTech Inc. | 2020 - 2022
• Automated infrastructure provisioning using Terraform and Ansible
• Implemented comprehensive monitoring stack with Prometheus and Grafana
• Reduced incident response time by 60% through proactive alerting
• Managed Docker and Kubernetes clusters for microservices architecture

Site Reliability Engineer | TechScale Corp | 2019 - 2020
• Maintained 99.95% uptime for critical production systems
• Developed disaster recovery procedures and backup strategies
• Implemented security best practices and compliance frameworks
• Optimized database performance resulting in 40% faster query responses

EDUCATION
Bachelor of Science in Computer Engineering
State University | 2015 - 2019

CERTIFICATIONS
• AWS Certified Solutions Architect - Professional
• Certified Kubernetes Administrator (CKA)
• Google Cloud Professional DevOps Engineer
• HashiCorp Certified: Terraform Associate

KEY ACHIEVEMENTS
• Reduced infrastructure costs by 35% through resource optimization
• Implemented zero-downtime deployment strategy for critical applications
• Built automated disaster recovery system with 15-minute RTO
• Led team of 5 engineers in cloud migration project worth $2M

SOCIAL PROFILES
LinkedIn: https://www.linkedin.com/in/shivam-pateriya/
GitHub: https://github.com/shivpateriya
Medium: https://medium.com/@shivampateriya40
YouTube: https://www.youtube.com/@Shivam_Pateriya
        `;
        
        // Create and download resume
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Shivam_Pateriya_DevOps_Resume.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Show download confirmation
        showNotification('Resume downloaded successfully!');
    }
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(100, 255, 218, 0.9);
        color: #1e3c72;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Prevent multiple rapid clicks on links
let clickTimeout = {};

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        const link = e.target.tagName === 'A' ? e.target : e.target.closest('a');
        const href = link.href;
        
        // Check if this link was recently clicked
        if (clickTimeout[href]) {
            e.preventDefault();
            return false;
        }
        
        // Set timeout to prevent multiple clicks
        clickTimeout[href] = true;
        setTimeout(() => {
            delete clickTimeout[href];
        }, 1000); // Prevent multiple clicks for 1 second
    }
});

// Function to copy email to clipboard
function copyEmail(element) {
    const email = 'shivampateriya40@gmail.com';
    
    // Try multiple methods to ensure copying works
    let copySuccess = false;
    
    // Method 1: Modern clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showNotification('✅ Email copied to clipboard!');
            copySuccess = true;
        }).catch(err => {
            console.log('Clipboard API failed, trying fallback...');
            fallbackCopyTextToClipboard(email);
        });
    } else {
        // Method 2: Fallback for older browsers
        fallbackCopyTextToClipboard(email);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('✅ Email copied to clipboard!');
        } else {
            showNotification('❌ Copy failed. Please manually select the email.');
        }
    } catch (err) {
        console.error('Copy failed:', err);
        showNotification('❌ Copy failed. Please manually select the email.');
    }
    
    document.body.removeChild(textArea);
}
