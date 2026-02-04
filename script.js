// Smooth scroll with offset for fixed header
const header = document.querySelector('.header'); // your fixed header

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      // Calculate offset
      const headerHeight = header.offsetHeight;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight - 20; // 20px extra space

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// ===== Header Animation on Scroll =====
const header1 = document.querySelector('.header');

const handleHeaderScroll = () => {
  if (window.scrollY > 60) {
    header1.classList.add('scrolled');
  } else {
    header1.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', handleHeaderScroll);
handleHeaderScroll();

// ===== Scroll Reveal for Sections =====
const reveals = document.querySelectorAll('.reveal');
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineLine = document.querySelector('.timeline-line');
const timelineContainer = document.querySelector('.timeline-container');
const staggerSection = document.querySelector('.stagger');
const cards = document.querySelectorAll('.about-card.expandable');

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  // ----- Scroll Reveal -----
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 120) {
      section.classList.add('active');
    }
  });

 const timelineContainer = document.querySelector('.timeline-container');
const timelineLine = document.querySelector('.timeline-line');
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  if (timelineContainer && timelineLine) {
    const containerTop = timelineContainer.offsetTop;
    const containerHeight = timelineContainer.offsetHeight;

    // Vertical line grows with scroll
    let progress = scrollTop + windowHeight / 2 - containerTop;
    progress = Math.max(0, Math.min(progress, containerHeight));
    timelineLine.style.height = progress + 'px';

    // Reveal timeline items
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < windowHeight - 150) {
        item.classList.add('active');
      }
    });
  }
});



  // ----- Scroll progress bar -----
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    const docHeight = document.documentElement.scrollHeight - windowHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // initial call

// ===== Rotating Statement =====
const words = ["design", "build", "lead"];
let index = 0;
const rotateText = document.getElementById("rotate-text");

if (rotateText) {
  setInterval(() => {
    rotateText.style.opacity = 0;
    rotateText.style.transform = "translateY(10px)";

    setTimeout(() => {
      index = (index + 1) % words.length;
      rotateText.textContent = words[index];
      rotateText.style.opacity = 1;
      rotateText.style.transform = "translateY(0)";
    }, 400);
  }, 2500);
}

//Project Modal Logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalCode = document.getElementById('modalCode');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project-card');
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalTech.textContent = "Technologies: " + card.dataset.tech;

    // Modal Text
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalTech.textContent = "Technologies: " + card.dataset.tech;

    // Set Preview Image
    const previewImg = document.getElementById('modalPreview');
    previewImg.src = card.dataset.preview || "images/placeholder.png";
    
    // Split code by lines
    const lines = card.dataset.code.split("\n");
    modalCode.innerHTML = ""; // Clear previous code

    lines.forEach(line => {
      // Escape HTML
      let escaped = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");

      // Highlight: tags blue, attributes cyan, values orange
      escaped = escaped
        .replace(/(&lt;\/?.*?&gt;)/g, "<span style='color: #9cdcfe'>$1</span>") // tags
        .replace(/\b(class|id|href)\b/g, "<span style='color: #569cd6'>$1</span>") // attributes
        .replace(/"(.*?)"/g, "<span style='color:#ce9178'>\"$1\"</span>"); // values

      // Add line with a <div> to preserve line breaks
      const div = document.createElement("div");
      div.innerHTML = escaped || " "; // keep empty lines visible
      modalCode.appendChild(div);
    });

    modal.classList.add('show');
  });
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', e => {
  if(e.target === modal) modal.classList.remove('show');
});



// Scroll reveal effect for project cards
const projectCards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < windowHeight - 100){
      card.classList.add('active');
    }
  });
});

//Contact message
const form = document.querySelector('.contact-form');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(e){
  e.preventDefault();

  // Show minimal message
  feedback.textContent = "Message sent!";
  feedback.classList.add('show');

  // Reset form fields
  form.reset();

  // Hide message after 2.5 seconds
  setTimeout(() => {
    feedback.classList.remove('show');
  }, 2500);
});


const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
  skillLevels.forEach(level => {
    const rect = level.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) { // trigger earlier
      const targetWidth = level.dataset.width;
      level.style.width = targetWidth;
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);



//Back to top
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
