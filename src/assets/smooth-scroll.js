// Smooth scrolling implementation with frame transitions
document.addEventListener('DOMContentLoaded', () => {
  // Options for the smooth scrolling
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start'
  };

  // Get all navigation links that should trigger smooth scrolling
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listeners to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the target section from the href attribute
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
      
      // Scroll to the target section smoothly
      targetSection.scrollIntoView(scrollOptions);
    });
  });

  // Frame-by-frame scroll animation for sections
  const animateSections = () => {
    const sections = document.querySelectorAll('section');
    
    // Create IntersectionObserver to detect when sections enter viewport
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation class when section enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          // Animate children elements with staggered delay
          const elements = entry.target.querySelectorAll('.animate-element');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('element-visible');
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.15 });
    
    // Observe all sections
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  };

  // Initialize frame animations
  animateSections();
  
  // Smooth scrolling for the entire page
  let lastScrollTop = 0;
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Determine scroll direction
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        // Add scroll direction class to body for potential direction-specific animations
        document.body.setAttribute('data-scroll-direction', scrollDirection);
        
        // Update parallax elements if any
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
          const speed = element.getAttribute('data-speed') || 0.5;
          const yPos = -(scrollTop * speed);
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        lastScrollTop = scrollTop;
        ticking = false;
      });
      
      ticking = true;
    }
  });
});
