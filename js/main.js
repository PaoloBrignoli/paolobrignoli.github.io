// Main JavaScript file for Paolo Libenzio Brignoli's website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    loadContent();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                bar.style.transform = navMenu.classList.contains('active') 
                    ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translateY(${index === 1 ? 0 : index === 0 ? 8 : -8}px)`
                    : 'none';
                if (index === 1) {
                    bar.style.opacity = navMenu.classList.contains('active') ? '0' : '1';
                }
            });
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const bars = navToggle.querySelectorAll('.bar');
                    bars.forEach((bar, index) => {
                        bar.style.transform = 'none';
                        bar.style.opacity = '1';
                    });
                }
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle?.contains(event.target) && !navMenu?.contains(event.target)) {
            if (navMenu?.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        }
    });
}

// Animation functionality
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.quick-nav-card, .publication-card, .software-card, .project-card, .blog-post, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Content loading functionality
function loadContent() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'research':
            loadPublications();
            loadWorkingPapers();
            loadSoftware();
            break;
        case 'projects':
            loadProjects();
            break;
        case 'blog':
            loadBlogPosts();
            break;
        default:
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename.replace('.html', '') || 'index';
}

// Load publications data
async function loadPublications() {
    const container = document.getElementById('publications-container');
    if (!container) return;
    
    try {
        const response = await fetch('data/publications.json');
        const data = await response.json();
        
        container.innerHTML = data.papers.map(paper => createPublicationCard(paper)).join('');
        attachPublicationEventListeners();
    } catch (error) {
        console.error('Error loading publications:', error);
        container.innerHTML = '<p>Error loading publications</p>';
    }
}

// Load working papers data
async function loadWorkingPapers() {
    const container = document.getElementById('working-papers-container');
    if (!container) return;
    
    try {
        const response = await fetch('data/working-papers.json');
        const data = await response.json();
        
        container.innerHTML = data.papers.map(paper => createPublicationCard(paper)).join('');
        attachPublicationEventListeners();
    } catch (error) {
        console.error('Error loading working papers:', error);
        container.innerHTML = '<p>Error loading working papers</p>';
    }
}

// Load software data
async function loadSoftware() {
    const container = document.getElementById('software-container');
    if (!container) return;
    
    try {
        const response = await fetch('data/software.json');
        const data = await response.json();
        
        container.innerHTML = data.software.map(software => createSoftwareCard(software)).join('');
    } catch (error) {
        console.error('Error loading software:', error);
        container.innerHTML = '<p>Error loading software</p>';
    }
}

// Load projects data
async function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        
        container.innerHTML = data.projects.map(project => createProjectCard(project)).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
        container.innerHTML = '<div class="content-placeholder"><p>Add current research projects here</p></div>';
    }
}

// Load blog posts data
async function loadBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    try {
        const response = await fetch('data/blog-posts.json');
        const data = await response.json();
        
        container.innerHTML = data.posts.map(post => createBlogPostCard(post)).join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        container.innerHTML = '<div class="content-placeholder"><p>Add blog posts here</p></div>';
    }
}

// Create publication card HTML
function createPublicationCard(paper) {
    const abstractId = `abstract-${Math.random().toString(36).substr(2, 9)}`;
    
    return `
        <div class="publication-card">
            <h3 class="publication-title">${paper.title}</h3>
            <p class="publication-authors">${paper.authors}</p>
            <p class="publication-journal">${paper.journal} (${paper.year})</p>
            <div class="publication-buttons">
                <button class="btn btn-outline" onclick="toggleAbstract('${abstractId}')">Abstract</button>
                ${paper.doi ? `<a href="${paper.doi}" class="btn btn-primary" target="_blank">DOI</a>` : ''}
                ${paper.pdf ? `<a href="${paper.pdf}" class="btn btn-secondary" target="_blank">PDF</a>` : ''}
            </div>
            <div id="${abstractId}" class="publication-abstract">
                <p>${paper.abstract}</p>
            </div>
        </div>
    `;
}

// Create software card HTML
function createSoftwareCard(software) {
    return `
        <div class="software-card">
            <h3 class="software-name">${software.name}</h3>
            <p class="software-fullname">${software.fullname}</p>
            <p class="software-description">${software.description}</p>
            <div class="publication-buttons">
                ${software.link ? `<a href="${software.link}" class="btn btn-primary" target="_blank">GitHub</a>` : ''}
            </div>
        </div>
    `;
}

// Create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <h3 class="publication-title">${project.title}</h3>
            <p class="publication-authors">${project.description}</p>
            <div class="publication-buttons">
                ${project.link ? `<a href="${project.link}" class="btn btn-primary" target="_blank">Learn More</a>` : ''}
            </div>
        </div>
    `;
}

// Create blog post card HTML
function createBlogPostCard(post) {
    return `
        <article class="blog-post">
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.excerpt}</p>
            <div class="publication-buttons">
                ${post.link ? `<a href="${post.link}" class="btn btn-primary">Read More</a>` : ''}
            </div>
        </article>
    `;
}

// Toggle abstract visibility
function toggleAbstract(abstractId) {
    const abstract = document.getElementById(abstractId);
    if (abstract) {
        abstract.classList.toggle('show');
    }
}

// Attach event listeners to publication cards
function attachPublicationEventListeners() {
    const cards = document.querySelectorAll('.publication-card');
    cards.forEach((card, index) => {
        // Add fade-in animation with delay
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
}

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states for async operations
function showLoading(element) {
    if (element) {
        element.classList.add('loading');
        element.innerHTML = '<div class="loading-spinner"></div>';
    }
}

function hideLoading(element) {
    if (element) {
        element.classList.remove('loading');
    }
}

// Handle resize events
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (window.innerWidth > 768 && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) {
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        }
        
        // Close any open abstracts
        const openAbstracts = document.querySelectorAll('.publication-abstract.show');
        openAbstracts.forEach(abstract => {
            abstract.classList.remove('show');
        });
    }
});

// Initialize theme and accessibility features
function initializeAccessibility() {
    // Add skip-to-content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels for better screen reader support
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        navToggle.setAttribute('aria-expanded', 'false');
        
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAccessibility);
} else {
    initializeAccessibility();
}