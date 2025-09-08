// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic'
    });
});

// Particle System
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 4}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 4}s`;

        container.appendChild(particle);
    }
}

// Smooth scrolling function
function scrollToSection(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Team data with modern profiles
const teamData = [
    {
        name: "Arjun Patel",
        role: "AI/ML Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
        description: "Passionate about creating AI solutions that solve real-world problems and enhance human capabilities.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Priya Sharma",
        role: "Full-Stack Developer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        skills: ["React", "Node.js", "MongoDB", "AWS"],
        description: "Building scalable web applications with modern technologies and user-centric design principles.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Rahul Kumar",
        role: "Data Science Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        skills: ["Python", "R", "Tableau", "Big Data"],
        description: "Extracting insights from complex datasets to drive intelligent decision-making and innovation.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        description: "Crafting intuitive and beautiful user experiences that bridge the gap between technology and humanity.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Vikash Singh",
        role: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        skills: ["Docker", "Kubernetes", "CI/CD", "Cloud"],
        description: "Ensuring seamless deployment and robust infrastructure for scalable and reliable applications.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Ananya Gupta",
        role: "Product Strategist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        skills: ["Strategy", "Analytics", "User Research", "Growth"],
        description: "Bridging technology and business needs to create products that make a meaningful impact.",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    }
];

// Populate team section
function populateTeam() {
    const teamGrid = document.getElementById('team-grid');

    teamData.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'glass-morphism p-8 rounded-3xl hover-glow transition-all duration-500 group';
        memberCard.setAttribute('data-aos', 'fade-up');
        memberCard.setAttribute('data-aos-delay', `${(index + 1) * 100}`);

        memberCard.innerHTML = `
            <div class="relative mb-6">
                <img src="${member.image}" alt="${member.name}" 
                     class="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-electric-purple/20 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            </div>

            <h3 class="text-2xl font-bold text-center mb-2">${member.name}</h3>
            <p class="text-neon-blue font-semibold text-center mb-4">${member.role}</p>
            <p class="text-gray-300 text-sm text-center mb-6 leading-relaxed">${member.description}</p>

            <div class="flex flex-wrap justify-center gap-2 mb-6">
                ${member.skills.map(skill => 
                    `<span class="px-3 py-1 bg-gradient-to-r from-electric-purple/20 to-neon-blue/20 rounded-full text-xs font-medium">${skill}</span>`
                ).join('')}
            </div>

            <div class="flex justify-center space-x-4">
                <a href="${member.social.github}" class="w-10 h-10 bg-gradient-to-r from-neon-blue/20 to-electric-purple/20 rounded-full flex items-center justify-center hover:from-neon-blue hover:to-electric-purple transition-all duration-300">
                    <i class="fab fa-github text-sm"></i>
                </a>
                <a href="${member.social.linkedin}" class="w-10 h-10 bg-gradient-to-r from-electric-purple/20 to-cyber-green/20 rounded-full flex items-center justify-center hover:from-electric-purple hover:to-cyber-green transition-all duration-300">
                    <i class="fab fa-linkedin text-sm"></i>
                </a>
                <a href="${member.social.twitter}" class="w-10 h-10 bg-gradient-to-r from-cyber-green/20 to-neon-blue/20 rounded-full flex items-center justify-center hover:from-cyber-green hover:to-neon-blue transition-all duration-300">
                    <i class="fab fa-twitter text-sm"></i>
                </a>
            </div>
        `;

        teamGrid.appendChild(memberCard);
    });
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();

    // Populate team
    populateTeam();

    // Start counter animation when hero section is visible
    setTimeout(animateCounters, 2000);

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = mobileMenu.classList.contains('hidden') ? 'fas fa-bars' : 'fas fa-times';
    });

    // Navigation link handling
    const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);

            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });

    // Navbar scroll effect
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.style.backgroundColor = 'rgba(26, 11, 46, 0.9)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            navbar.style.backdropFilter = 'blur(10px)';
        }

        // Hide navbar on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Animate button
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
            submitBtn.className = 'w-full bg-gradient-to-r from-cyber-green to-neon-blue py-4 rounded-2xl font-semibold text-lg transition-all duration-300';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.className = 'w-full bg-gradient-to-r from-neon-blue to-electric-purple py-4 rounded-2xl font-semibold text-lg hover-glow transition-all duration-300';
            }, 2000);
        }, 1500);
    });

    // Add floating animation to various elements
    const floatingElements = document.querySelectorAll('.animate-float');
    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });

    // Intersection Observer for advanced animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-glow');
            }
        });
    }, observerOptions);

    // Observe glow elements
    document.querySelectorAll('.hover-glow').forEach(el => {
        observer.observe(el);
    });
});

// Advanced cursor effect (optional enhancement)
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const cursorEl = document.createElement('div');
        cursorEl.className = 'cursor fixed w-4 h-4 bg-gradient-to-r from-neon-blue to-electric-purple rounded-full pointer-events-none z-50 mix-blend-difference opacity-75';
        document.body.appendChild(cursorEl);
    }

    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 8 + 'px';
    cursorElement.style.top = e.clientY - 8 + 'px';
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can be added here
}, 16));