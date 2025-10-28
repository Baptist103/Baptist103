let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

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

