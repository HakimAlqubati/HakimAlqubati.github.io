// --- 1. Language & Content Logic ---
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hello, World! I am",
        hero_titles: ["Backend Architect", "Systems Engineer", "Cloud Native Expert"],
        btn_projects: "View Work", btn_contact: "Contact Me",
        section_about: "About Me",
        about_desc: "As a <strong class='text-cyber-blue'>Backend Architect</strong>, I don't just write code; I design resilient, scalable systems that power the AI era. My passion lies in orchestration, microservices, and optimizing data flow. I turn complex logic into efficient, invisible engines.",
        section_skills: "Tech Architecture",
        section_exp: "Experience Log",
        section_projects: "System Implementations",
        proj_1_desc: "A high-performance API gateway with AI-based traffic analysis and anomaly detection built in Go.",
        proj_2_desc: "Custom implementation of a distributed caching mechanism using consistent hashing.",
        section_contact: "Initialize Handshake"
    },
    ar: {
        nav_about: "عني", nav_skills: "المهارات", nav_exp: "الخبرات", nav_projects: "المشاريع", nav_contact: "تواصل معي",
        hero_greeting: "أهلاً بك في عالمي، أنا",
        hero_titles: ["مهندس أنظمة Backend", "مصمم معماري برمجيات", "خبير الحوسبة السحابية"],
        btn_projects: "تصفح أعمالي", btn_contact: "تواصل معي",
        section_about: "نبذة عني",
        about_desc: "بصفتي <strong class='text-cyber-blue'>Backend Architect</strong>، أنا لا أكتب الكود فحسب؛ بل أصمم أنظمة مرنة وقابلة للتوسع تقود عصر الذكاء الاصطناعي. شغفي يكمن في الأتمتة، الخدمات المصغرة (Microservices)، وتحسين تدفق البيانات.",
        section_skills: "الترسانة التقنية",
        section_exp: "السجل المهني",
        section_projects: "تنفيذ الأنظمة",
        proj_1_desc: "بوابة API عالية الأداء مع تحليل حركة المرور القائم على الذكاء الاصطناعي وكشف الشذوذ، مبنية بلغة Go.",
        proj_2_desc: "تنفيذ مخصص لنظام التخزين المؤقت الموزع (Distributed Cache) باستخدام خوارزميات التجزئة المتسقة.",
        section_contact: "بدء الاتصال"
    }
};

let currentLang = 'en';
// Elements will be null initially, need to re-select after load, or event delegation
// Since we are loading HTML dynamically, we must ensure elements exist
// Modifying this to specific functions called after load

function initLanguage() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    if(!langToggleBtn) return;

    function updateContent() {
        const t = translations[currentLang];
        document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update simple text keys
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (t[key]) el.innerHTML = t[key];
        });

        // Update Font classes for Arabic
        if (currentLang === 'ar') {
            document.body.classList.add('font-cairo');
            document.body.classList.remove('font-inter');
            // Adjust timeline spacing for RTL
            document.querySelectorAll('.timeline-line').forEach(el => el.style.right = '50%');
        } else {
            document.body.classList.add('font-inter');
            document.body.classList.remove('font-cairo');
        }
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        langText.innerText = currentLang === 'en' ? 'AR' : 'EN';
        updateContent();
    });
}

// --- 2. Typewriter Effect Logic ---
let typeWriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriterEffect() {
    const typeElement = document.getElementById('typewriter');
    if(!typeElement) return;

    const titles = translations[currentLang].hero_titles;
    const currentTitle = titles[typeWriterIndex % titles.length];

    if (isDeleting) {
        typeElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typeElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeWriterIndex++;
        typeSpeed = 500;
    }

    setTimeout(typeWriterEffect, typeSpeed);
}

// --- 3. Three.js Background (Neural Network / Server Nodes) ---
function initThreeJS() {
    const canvas = document.querySelector('#bg-canvas');
    if(!canvas) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300; // Optimal for performance
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20; // Spread logic
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material (Cyber Blue Dots)
    const material = new THREE.PointsMaterial({
        size: 0.04,
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.8,
    });

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Lines connecting close particles (Neural Network effect)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x2a2a35, transparent: true, opacity: 0.1 });
    const linesGeometry = new THREE.BufferGeometry();
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    camera.position.z = 4;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Rotate entire system gently
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = mouseY * 0.2;
        particlesMesh.rotation.y += mouseX * 0.2;

        renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// --- 4. GSAP Scroll Animations ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal elements on scroll
    gsap.utils.toArray('.gs-reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                }
            }
        );
    });
    
    // Staggered skill reveal
    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    });
}

// Form handling (Mock)
function initForm() {
    const form = document.getElementById('contact-form');
    if(!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "> TRANSMITTING...";
        btn.classList.add('text-cyber-blue');
        
        setTimeout(() => {
            btn.innerText = "> DATA SENT SUCCESSFULLY";
            btn.classList.replace('text-cyber-blue', 'text-cyber-green');
            e.target.reset();
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('text-cyber-green');
            }, 3000);
        }, 1500);
    });
}

// Initialize everything
function initAll() {
    initLanguage();
    typeWriterEffect();
    initThreeJS();
    initGSAP();
    initForm();
}

// Call initAll only after all sections are loaded
// This will be called from index.html
