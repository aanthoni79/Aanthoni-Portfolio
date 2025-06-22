// Enhanced UX and Interactions
document.addEventListener('DOMContentLoaded', () => {
  // Add scroll-triggered animations for all sections
  const enhanceScrollExperience = () => {
    // Apply frame-by-frame scroll snap behavior
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('scroll-snap-section');
    });
    
    // Add parallax effect to background elements
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    });
    
    // Add floating animation to selected elements
    document.querySelectorAll('.float-animation').forEach(element => {
      element.classList.add('floating');
    });
    
    // Add gradient text effect to headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
      if (!heading.classList.contains('no-gradient')) {
        heading.classList.add('gradient-text');
      }
    });
    
    // Add glow effect to important elements
    document.querySelectorAll('.highlight-element').forEach(element => {
      element.classList.add('glow');
    });
  };
  
  // Add cursor effects for interactive elements
  const enhanceCursorInteractions = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active');
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  };
  
  // Add smooth reveal for 3D models
  const enhance3DModels = () => {
    const modelContainers = document.querySelectorAll('.model-container');
    
    modelContainers.forEach(container => {
      container.classList.add('model-wrapper');
      container.classList.add('model-hidden');
      
      // Create observer for model containers
      const modelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('model-hidden');
            entry.target.classList.add('model-visible');
          } else {
            entry.target.classList.remove('model-visible');
            entry.target.classList.add('model-hidden');
          }
        });
      }, { threshold: 0.3 });
      
      modelObserver.observe(container);
    });
  };
  
  // Add scroll progress indicator
  const addScrollProgressIndicator = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      progressBar.style.width = `${scrollPercentage}%`;
    });
  };
  
  // Add back-to-top button
  const addBackToTopButton = () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  
  // Add dark/light mode toggle
  const addThemeToggle = () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    document.body.appendChild(themeToggle);
    
    // Toggle theme when clicked
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      // Save preference to localStorage
      const isLightMode = document.body.classList.contains('light-mode');
      localStorage.setItem('lightMode', isLightMode);
    });
    
    // Check for saved preference
    const savedLightMode = localStorage.getItem('lightMode') === 'true';
    if (savedLightMode) {
      document.body.classList.add('light-mode');
    }
  };
  
  // Initialize all enhancements
  setTimeout(() => {
    enhanceScrollExperience();
    enhanceCursorInteractions();
    enhance3DModels();
    addScrollProgressIndicator();
    addBackToTopButton();
    addThemeToggle();
  }, 1000); // Delay to ensure DOM is fully loaded
});
