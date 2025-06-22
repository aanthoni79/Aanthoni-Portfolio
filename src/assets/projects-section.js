// Projects section component
document.addEventListener('DOMContentLoaded', () => {
  // Create projects section HTML structure
  const createProjectsSection = () => {
    // Find where to insert the projects section (before the contact section if it exists)
    const root = document.getElementById('root');
    if (!root) return;
    
    // Create projects section container
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';
    projectsSection.className = 'projects-section section';
    
    // Add projects section content
    projectsSection.innerHTML = `
      <div class="projects-header animate-element fade-in-up">
        <h2>My Projects</h2>
        <p>Here are some of my recent works that showcase my skills and passion for development.</p>
      </div>
      
      <div class="projects-container stagger-animation">
        <!-- Featured Project -->
        <div class="project-card featured animate-element">
          <img src="/assets/carrent-BctJziWf.png" alt="Featured Project" class="project-image">
          <div class="project-content">
            <h3 class="project-title">Car Rental Platform</h3>
            <p class="project-description">A comprehensive car rental application with booking system, user authentication, and payment integration. Features a responsive design and intuitive user interface.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">Node.js</span>
              <span class="project-tag">MongoDB</span>
              <span class="project-tag">Stripe</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="project-card animate-element">
          <img src="/assets/jobit-Bku9SwYl.png" alt="Job Portal" class="project-image">
          <div class="project-content">
            <h3 class="project-title">Job Search Portal</h3>
            <p class="project-description">A job search application that aggregates listings from multiple sources with filtering and application tracking features.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">Redux</span>
              <span class="project-tag">API Integration</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="project-card animate-element">
          <img src="/assets/tripguide-DhXlknDF.png" alt="Travel Guide" class="project-image">
          <div class="project-content">
            <h3 class="project-title">Travel Guide App</h3>
            <p class="project-description">A comprehensive travel guide application with destination recommendations, itinerary planning, and booking integration.</p>
            <div class="project-tags">
              <span class="project-tag">Next.js</span>
              <span class="project-tag">Tailwind CSS</span>
              <span class="project-tag">Google Maps API</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project 4 -->
        <div class="project-card animate-element">
          <img src="/assets/vsp-DQZjBR8A.png" alt="VSP Project" class="project-image">
          <div class="project-content">
            <h3 class="project-title">AI Content Generator</h3>
            <p class="project-description">An AI-powered content generation tool that helps create marketing copy, blog posts, and social media content with customizable parameters.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">OpenAI API</span>
              <span class="project-tag">Firebase</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
              <a href="#" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Insert the projects section into the DOM
    // Try to find a good insertion point (before contact section or at the end of root)
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      root.insertBefore(projectsSection, contactSection);
    } else {
      root.appendChild(projectsSection);
    }
    
    // Initialize animations for the projects section
    initProjectAnimations();
  };
  
  // Initialize animations for project cards
  const initProjectAnimations = () => {
    // Create IntersectionObserver to detect when project cards enter viewport
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('element-visible');
        }
      });
    }, { threshold: 0.15 });
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      projectObserver.observe(card);
    });
    
    // Observe staggered animation containers
    const staggerContainers = document.querySelectorAll('.stagger-animation');
    staggerContainers.forEach(container => {
      projectObserver.observe(container);
    });
  };
  
  // Add 3D tilt effect to project cards
  const addTiltEffect = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        // Calculate rotation based on mouse position
        const rotateY = mouseX * 0.05;
        const rotateX = -mouseY * 0.05;
        
        // Apply the transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      // Reset transform on mouse leave
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease';
      });
    });
  };
  
  // Initialize the projects section
  setTimeout(() => {
    createProjectsSection();
    setTimeout(addTiltEffect, 1000); // Add tilt effect after a delay to ensure DOM is ready
  }, 500); // Small delay to ensure the DOM is fully loaded
});
