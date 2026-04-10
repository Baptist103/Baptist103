const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar?.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar?.classList.remove('active');
    menuIcon?.classList.remove('bx-x');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header?.classList.add('sticky');
  } else {
    header?.classList.remove('sticky');
  }
});

const pages = document.querySelectorAll('.reveal');

const options = {
  threshold: 0.3 // means 30% of section must be visible before triggering
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');  // fade in when visible
    } else {
      entry.target.classList.remove('active'); // fade out when out of view
    }
  });
}, options);

pages.forEach(section => {
  observer.observe(section);
});



const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;


  for(let i = 0 ; i < dots ; i++){
    points += `<div class="points" style="--i:${i}; --root:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i<percent ; i++){
    pointsMarked[i].classList.add('marked')
  }
})

ScrollReveal({
  reset: true,          // replays animation every time section enters viewport
  distance: '50px',     // how far it moves before showing
  duration: 1200,       // speed of the animation (ms)
  delay: 100            // small delay before starting
});

ScrollReveal().reveal('.reveal', { 
  origin: 'bottom', 
  interval: 200 
});

ScrollReveal().reveal('#about', { origin: 'left' });
ScrollReveal().reveal('#service', { origin: 'left' });
ScrollReveal().reveal('#skill', { origin: 'left' });
ScrollReveal().reveal('#portfolio', { origin: 'left' });
ScrollReveal().reveal('#contact', { origin: 'bottom' });

// ============================================
// Advanced Interactive Effects
// ============================================

// Mouse Tracking Effect
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  const serviceBoxes = document.querySelectorAll('.service-box');
  serviceBoxes.forEach(box => {
    box.style.setProperty('--mouse-x', mouseX);
    box.style.setProperty('--mouse-y', mouseY);
  });
});

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(element => {
    const scrollPosition = window.scrollY;
    const elementOffset = element.offsetTop;
    const distance = scrollPosition - elementOffset;
    element.style.transform = `translateY(${distance * 0.5}px)`;
  });
});

// Animating Elements on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-box, .portfolio-box, .skill-bar .bar span');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
  });
};

// Glowing Text Effect on Headings
const addGlowToHeadings = () => {
  const headings = document.querySelectorAll('.heading, .home-content h1');
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
      heading.style.animation = 'glow-text-animation 0.5s ease-out forwards';
    });
  });
};

// Scroll Progress Bar Enhancement
const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  const progressBar = document.querySelector('body::before');
  if (progressBar) {
    document.body.style.setProperty('--scroll', scrollPercent + '%');
  }
};

window.addEventListener('scroll', updateScrollProgress);

// Smooth Scroll Reveal with Stagger
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach((reveal, index) => {
    reveal.style.opacity = '0';
    reveal.style.transform = 'translateY(30px)';
    reveal.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`;
    reveal.style.transitionDelay = `${index * 100}ms`;
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });
  
  reveals.forEach(reveal => observer.observe(reveal));
};

// Button Ripple Effect
const addRippleEffect = () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripples = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripples.style.width = ripples.style.height = size + 'px';
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      ripples.classList.add('ripple');
      
      this.appendChild(ripples);
      
      setTimeout(() => ripples.remove(), 600);
    });
  });
};

// Floating Animation for Images
const addFloatingAnimation = () => {
  const images = document.querySelectorAll('.home-img img, .about-img img');
  images.forEach((img, index) => {
    img.style.animationDelay = `${index * 0.2}s`;
  });
};

// Service Box Hover 3D Effect
const add3DEffect = () => {
  const serviceBoxes = document.querySelectorAll('.service-box');
  
  serviceBoxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    box.addEventListener('mouseleave', () => {
      box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
};

// Icon Pulse Animation
const pulseIcons = () => {
  const icons = document.querySelectorAll('.service-box i');
  icons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.15}s`;
  });
};

// Portfolio Image Zoom Effect
const addPortfolioZoom = () => {
  const portfolioBoxes = document.querySelectorAll('.portfolio-box');
  
  portfolioBoxes.forEach(box => {
    const img = box.querySelector('img');
    
    box.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.2) rotate(2deg)';
    });
    
    box.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1) rotate(0deg)';
    });
  });
};

// Text Highlight on Scroll
const highlightTextOnScroll = () => {
  const textElements = document.querySelectorAll('.home-content p, .about-content p, .service-box p');
  
  textElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.color = 'var(--main-color)';
      element.style.textShadow = '0 0 10px rgba(14, 239, 255, 0.5)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.color = 'var(--text-color)';
      element.style.textShadow = 'none';
    });
  });
};

// Smooth Counter Animation for Skill Bars
const animateSkillCounter = () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  const skillSection = document.querySelector('#skill');
  
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        
        skillBars.forEach(bar => {
          const span = bar.querySelector('.bar span');
          const infoP = bar.querySelectorAll('.info p');
          const targetPercent = parseInt(infoP[1].textContent);
          
          let currentPercent = 0;
          const increment = targetPercent / 30; // Animate over ~30 frames (1 second at 30fps)
          
          const animateBar = () => {
            if (currentPercent < targetPercent) {
              currentPercent += increment;
              if (currentPercent > targetPercent) currentPercent = targetPercent;
              
              span.style.width = currentPercent + '%';
              infoP[1].textContent = Math.round(currentPercent) + '%';
              
              requestAnimationFrame(animateBar);
            }
          };
          
          animateBar();
        });
      }
    });
  }, { threshold: 0.3 });
  
  if (skillSection) observer.observe(skillSection);
};

// Initialize All Effects
const initializeEffects = () => {
  animateOnScroll();
  addGlowToHeadings();
  revealOnScroll();
  addRippleEffect();
  addFloatingAnimation();
  add3DEffect();
  pulseIcons();
  addPortfolioZoom();
  highlightTextOnScroll();
  animateSkillCounter();
};

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initializeEffects);

// Keyboard Animation on Focus
const addKeyboardEffects = () => {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.boxShadow = '0 0 20px rgba(14, 239, 255, 0.3)';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.boxShadow = 'none';
    });
  });
};

document.addEventListener('DOMContentLoaded', addKeyboardEffects);

// Performance: Throttle scroll events
let scrollTimeout;
const throttledScroll = () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  
  scrollTimeout = window.requestAnimationFrame(() => {
    updateScrollProgress();
  });
};

window.addEventListener('scroll', throttledScroll, { passive: true });

console.log('✨ All advanced effects initialized!');


