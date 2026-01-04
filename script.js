// Initialize AOS & Effects
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-quart'
    });

    // Initialize Systems
    createGeometricBackground();
    initMagneticEffect();
    
    // Populate Data
    if(document.getElementById('team-grid')) populateTeam();
    if(document.getElementById('projects-grid')) populateProjects();
    
    // Start Counters
    setTimeout(animateCounters, 500);
});

// --- 1. GEOMETRIC BACKGROUND (High Contrast) ---
function createGeometricBackground() {
    const container = document.getElementById('particles-container');
    if(!container) return;

    const colors = ['#F59E0B', '#ffffff', '#6366f1']; // Amber, White, Indigo
    const count = 20;

    for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        shape.className = 'absolute opacity-20 animate-float-slow mix-blend-overlay';
        
        // Random shapes: Square or Circle
        const isCircle = Math.random() > 0.5;
        if(isCircle) shape.classList.add('rounded-full');
        
        const size = Math.random() * 200 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // High contrast borders instead of fills for some
        if(Math.random() > 0.7) {
            shape.style.border = `2px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
        } else {
            shape.style.background = colors[Math.floor(Math.random() * colors.length)];
            shape.style.filter = 'blur(40px)';
        }

        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 20 + 20}s`;
        
        container.appendChild(shape);
    }
}

// --- 2. MAGNETIC HOVER EFFECT ---
function initMagneticEffect() {
    const cards = document.querySelectorAll('.contrast-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// --- DATA SETS ---

const teamData = [
    {
        name: "Akshat Kumar",
        role: "AI Architect",
        image: "https://ui-avatars.com/api/?name=Akshat+Kumar&background=F59E0B&color=000",
        tags: ["TensorFlow", "Vision"],
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Ansh Katiyar",
        role: "Lead Dev",
        image: "https://ui-avatars.com/api/?name=Ansh+Katiyar&background=6366f1&color=fff",
        tags: ["Full Stack", "System"],
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Keshav Bansal",
        role: "Data Lead",
        image: "https://ui-avatars.com/api/?name=Keshav+Bansal&background=fff&color=000",
        tags: ["Analytics", "Python"],
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Kumkum Sharma",
        role: "UX Designer",
        image: "https://ui-avatars.com/api/?name=Kumkum+Sharma&background=F59E0B&color=000",
        tags: ["Figma", "Research"],
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Madhur Krishna",
        role: "Cloud Ops",
        image: "https://ui-avatars.com/api/?name=Madhur+Krishna&background=6366f1&color=fff",
        tags: ["AWS", "Docker"],
        social: { github: "#", linkedin: "#" }
    },
    {
        name: "Utkarsh Patra",
        role: "Strategist",
        image: "https://ui-avatars.com/api/?name=Utkarsh+Patra&background=fff&color=000",
        tags: ["Product", "Growth"],
        social: { github: "#", linkedin: "#" }
    }
];

const projectData = [
    {
        title: "Attendance System",
        cat: "IoT",
        desc: "High-precision proxy reducing system, streamlining the process.",
        accent: "border-amber-500 text-amber-500"
    }
];

// --- POPULATORS ---

function populateTeam() {
    const grid = document.getElementById('team-grid');
    if(!grid) return;

    teamData.forEach((member, i) => {
        const card = document.createElement('div');
        // High contrast borders, dark background
        card.className = 'contrast-card group relative bg-[#0f1016] border border-white/10 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', i * 100);

        card.innerHTML = `
            <div class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                 style="background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.1), transparent 40%);"></div>

            <div class="relative z-10 flex items-center gap-4">
                <img src="${member.image}" class="w-14 h-14 rounded-lg object-cover border-2 border-white/5 group-hover:border-amber-500 transition-colors" alt="${member.name}">
                <div>
                    <h3 class="text-xl font-bold text-white font-space">${member.name}</h3>
                    <p class="text-sm text-gray-400 uppercase tracking-wider font-bold">${member.role}</p>
                </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
                ${member.tags.map(tag => `<span class="text-xs font-bold px-2 py-1 bg-white/5 text-gray-300 border border-white/5 uppercase">${tag}</span>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function populateProjects() {
    const grid = document.getElementById('projects-grid');
    if(!grid) return;

    projectData.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = `contrast-card group relative bg-[#0f1016] border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-l-4 ${project.accent.split(' ')[0]}`;
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', i * 100);

        card.innerHTML = `
            <div class="relative z-10">
                <span class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">${project.cat}</span>
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">${project.title}</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">${project.desc}</p>
                <a href="#" class="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:underline decoration-2 underline-offset-4 decoration-amber-500 transition-all">
                    View Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function animateCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1500;
        const inc = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += inc;
            if(current >= target) {
                counter.innerText = target;
                clearInterval(timer);
            } else {
                counter.innerText = Math.ceil(current);
            }
        }, 16);
    });
}