// 3D Scene Setup with Three.js
let scene, camera, renderer;
let particles = [];
let animationId;

function initThreeScene() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0c29);

    // Camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 50;

    // Renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('hero-canvas'),
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particle system
    createParticles();

    // Add lighting
    const light1 = new THREE.PointLight(0x667eea, 1, 100);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x764ba2, 1, 100);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x667eea,
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    particles.push(points);
}

function animate() {
    animationId = requestAnimationFrame(animate);

    // Rotate particles
    particles.forEach(particle => {
        particle.rotation.x += 0.0001;
        particle.rotation.y += 0.0002;
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Project Data - Updated with actual project descriptions
const projectsData = [
    {
        title: "Loan Default Risk Analytics",
        description: "Predictive Analytics project using Machine Learning to identify loan default risk, evaluate borrower creditworthiness, and support data-driven lending decisions.",
        icon: "🎯",
        repo: "Loan-Default-Risk-Analytics",
        link: "https://github.com/Nageswararaokakarapathi/Loan-Default-Risk-Analytics",
        languages: "Jupyter Notebook"
    },
    {
        title: "E-Commerce SQL Business Intelligence",
        description: "End-to-end E-Commerce Sales, Customer, Product & Marketing Analytics using SQL to generate actionable business insights and KPIs.",
        icon: "💼",
        repo: "ecommerce-sql-business-intelligence",
        link: "https://github.com/Nageswararaokakarapathi/ecommerce-sql-business-intelligence",
        languages: "SQL"
    },
    {
        title: "Employee Attrition Workforce Intelligence",
        description: "A Power BI dashboard for employee attrition analysis, workforce intelligence, retention drivers, employee segmentation, and strategic HR decision-making.",
        icon: "👥",
        repo: "employee-attrition-workforce-intelligence-dashboard",
        link: "https://github.com/Nageswararaokakarapathi/employee-attrition-workforce-intelligence-dashboard",
        languages: "Power BI"
    },
    {
        title: "E-Commerce Power BI Dashboard",
        description: "Interactive Power BI dashboard analyzing sales performance, customer activity, product contribution, and order fulfillment metrics.",
        icon: "📊",
        repo: "ecommerce-powerbi-dashboard",
        link: "https://github.com/Nageswararaokakarapathi/ecommerce-powerbi-dashboard",
        languages: "Power BI"
    },
    {
        title: "E-Commerce Business Intelligence Analytics",
        description: "End-to-end business intelligence analysis of e-commerce transactions using Python, focusing on revenue optimization, customer intelligence, marketing effectiveness, and executive decision-making.",
        icon: "🔍",
        repo: "Ecommerce-Business-Intelligence-Analytics",
        link: "https://github.com/Nageswararaokakarapathi/Ecommerce-Business-Intelligence-Analytics",
        languages: "Jupyter Notebook"
    }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
                <span class="project-language">📚 ${project.languages}</span>
            </div>
            <div class="project-links">
                <a href="${project.link}" class="project-link" target="_blank">View on GitHub</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Smooth Scroll
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

// CTA Button Scroll to Projects
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Initialize on load
window.addEventListener('load', () => {
    initThreeScene();
    renderProjects();
});

// Cleanup on unload
window.addEventListener('beforeunload', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    renderer.dispose();
});