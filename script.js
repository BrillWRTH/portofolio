    const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".typed-name");
  const roleElement = document.querySelector(".typed-role");

  const nameText = "Diwan Brilliant Rysanmahdi";
  const roles = ["Web Developer", "Digital Asset Analyst", "Tech Enthusiast", "Student"];

  let nameIndex = 0;
  let roleIndex = 0;
  let roleCharIndex = 0;
  let isDeleting = false;

  function typeName() {
    if (nameIndex < nameText.length) {
      nameElement.textContent += nameText.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeName, 100);
    } else {
      setTimeout(typeRole, 800);
    }
  }

  function typeRole() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      roleElement.textContent = currentRole.substring(0, roleCharIndex + 1);
      roleCharIndex++;
      if (roleCharIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 1500);
      } else {
        setTimeout(typeRole, 100);
      }
    } else {
      roleElement.textContent = currentRole.substring(0, roleCharIndex - 1);
      roleCharIndex--;
      if (roleCharIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 400);
      } else {
        setTimeout(typeRole, 50);
      }
    }
  }

  typeName();
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("cvDropdown");
  const btn = document.getElementById("cvBtn");
  const menu = document.getElementById("cvMenu");

  function openDropdown() {
    dropdown.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    dropdown.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
  function toggleDropdown() {
    if (dropdown.classList.contains("open")) closeDropdown();
    else openDropdown();
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Klik di luar untuk menutup
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) closeDropdown();
  });

  // tutup dengan Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdown();
  });
});


function openModal(imgSrc, schoolName, schoolURL) {
  document.getElementById("schoolModal").style.display = "block";
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("caption").innerText = schoolName;
  document.getElementById("schoolLink").href = schoolURL;
}

function closeModal() {
  document.getElementById("schoolModal").style.display = "none";
}


// skills
//const carousel = document.getElementById('skillsCarousel');
//let isPointerDown = false;
//let startX, scrollStart;
//let autoScrollInterval;
//const SPEED = 0.6;
//const TICK_MS = 16;

// Clone semua card agar looping mulus
//function setupSeamless() {
//  const children = Array.from(carousel.children);
//  children.forEach(node => {
//    const clone = node.cloneNode(true);
//    clone.classList.add('clone');
//    carousel.appendChild(clone);
//  });
//}
//setupSeamless();

//function getOriginalWidth() {
//  const totalChildren = carousel.children.length;
//  const origCount = totalChildren / 2;
//  let w = 0;
//  for (let i = 0; i < origCount; i++) {
//    w += carousel.children[i].offsetWidth + parseFloat(getComputedStyle(carousel).gap || 0);
//  }
//  return w;
//}

//function startAutoScroll() {
//  if (autoScrollInterval) clearInterval(autoScrollInterval);
//  autoScrollInterval = setInterval(() => {
//    if (isPointerDown) return;
//    carousel.scrollLeft += SPEED;
//    const origW = getOriginalWidth();
//    if (carousel.scrollLeft >= origW) carousel.scrollLeft -= origW;
//  }, TICK_MS);
//}
//startAutoScroll();

//carousel.addEventListener('mouseenter', () => { isPointerDown = true; });
//carousel.addEventListener('mouseleave', () => { isPointerDown = false; });
//carousel.addEventListener('pointerdown', e => {
//  isPointerDown = true;
//  startX = e.clientX;
//  scrollStart = carousel.scrollLeft;
//  carousel.setPointerCapture(e.pointerId);
//});
//carousel.addEventListener('pointermove', e => {
//  if (!isPointerDown) return;
//  const dx = e.clientX - startX;
//  carousel.scrollLeft = scrollStart - dx;
//});
//carousel.addEventListener('pointerup', e => {
//  isPointerDown = false;
//  carousel.releasePointerCapture(e.pointerId);
//});
//carousel.addEventListener('pointercancel', () => { isPointerDown = false; });

//carousel.addEventListener('touchstart', () => isPointerDown = true);
//carousel.addEventListener('touchend', () => isPointerDown = false);

// 🔥 INI BAGIAN PENTING — EVENT CLICK DIDELEGASIKAN
//carousel.addEventListener('click', e => {
//  const card = e.target.closest('.skill-card');
//  if (!card) return;
//  const skill = card.dataset.skill;
//  showModalForSkill(skill);
//});

// === MODAL ===
//function showModalForSkill(skillKey) {
//  const modal = document.getElementById('projectModal');
//  const content = document.getElementById('modalContent');
//  const projects = {
//    html: ['Personal Portfolio', 'Landing Page', 'Static Blog'],
//    css: ['Glassmorphism Card', 'Responsive Grid', 'Spotify-style Carousel'],
//    js: ['Weather App', 'Todo App', 'Typing Effect']
//  };
//  const list = (projects[skillKey] || ['Belum ada project']).map(p => `<li>${p}</li>`).join('');
//  content.innerHTML = `<h3 style="color:#e63946">${skillKey.toUpperCase()} Projects</h3>
  //                     <ul>${list}</ul>`;
  //modal.style.display = 'block';
 // modal.setAttribute('aria-hidden','false');
//}

// Tutup modal
//document.getElementById('modalClose').addEventListener('click', () => {
  //document.getElementById('projectModal').style.display = 'none';
//});
//document.getElementById('projectModal').addEventListener('click', e => {
 // if (e.target === e.currentTarget) document.getElementById('projectModal').style.display = 'none';
//});

const carousel = document.getElementById('skillsCarousel');
let isDragging = false;
let startX, scrollLeft;

// --- duplikasi isi biar loop halus ---
carousel.innerHTML += carousel.innerHTML;

// --- show modal ---
function showModalForSkill(skillKey) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const projects = {
    html: ['Portfolio Page', 'Landing Page', 'HTML Form'],
    css: ['hover effects', 'Spotify-style Carousel'],
    js: ['modal', 'light/dark mode'],
    python: ['gacha lotre logic', 'Simple Bot', 'Calculator'],
    finance: ['Cashflow Tracker', 'Budget Planner', 'Expense Analyzer'],
    crypto: ['Blockchain Explorer Mini', 'Hashing learning', 'Simple Wallet'],
    web3: [''],
    ai: ['pengertian ai', 'implementasi ai sederhana'],
    market: ['Market Stock, crypto, Commodity Analyss', 'trader']


  };
  const list = (projects[skillKey] || []).map(p => `<li>${p}</li>`).join('');
  content.innerHTML = `<h3>${skillKey.toUpperCase()} Projects</h3><ul>${list}</ul>`;
  modal.classList.add('show');
}

// --- drag scroll + click ---
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => isDragging = false);
carousel.addEventListener('mouseup', (e) => {
  if (Math.abs(e.pageX - startX) < 5) {
    const card = e.target.closest('.skill-card');
    if (card) showModalForSkill(card.dataset.skill);
  }
  isDragging = false;
});
carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.2;
  carousel.scrollLeft = scrollLeft - walk;
});

// --- auto scroll seamless loop ---
function autoScrollLoop() {
  if (!isDragging) {
    carousel.scrollLeft += 0.5;
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScrollLoop);
}
autoScrollLoop();

// --- modal close ---
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('projectModal').classList.remove('show');
});
document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') {
    document.getElementById('projectModal').classList.remove('show');
  }
});








const projectModal = document.getElementById('projectDetailModal');
const projectImages = document.getElementById('projectImages');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectSkills = document.getElementById('projectSkills');
const closeProjectModal = document.getElementById('closeProjectModal');

const projectData = {
  portfolio: {
    title: 'Portfolio Website',
    description: 'Website pribadi yang menampilkan pengalaman, skill, dan proyek-proyek saya dengan desain responsif dan dark/light mode.',
    images: ['project porto.png', 'portohitam.png'],
    skills: ['html.png', 'css.png', 'js.png']
  },
  weatherapp: {
    title: 'Weather App',
    description: 'Aplikasi cuaca real-time menggunakan API OpenWeather, menampilkan suhu, lokasi, dan kondisi langit.',
    images: ['weather-1.jpg', 'weather-2.jpg'],
    skills: ['logo-js.png', 'logo-api.png', 'logo-html.png']
  },
  dashboard: {
    title: 'Dashboard UI',
    description: 'Dashboard interaktif untuk monitoring data dan analisis dengan React dan Chart.js.',
    images: ['dashboard-1.jpg', 'dashboard-2.jpg'],
    skills: ['logo-react.png', 'logo-js.png', 'logo-css.png']
  }
};

// Open modal
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.project;
    const data = projectData[key];
    if (!data) return;

    projectTitle.textContent = data.title;
    projectDescription.textContent = data.description;

    projectImages.innerHTML = data.images.map(src => `<img src="${src}" alt="">`).join('');
    projectSkills.innerHTML = data.skills.map(src => `<img src="${src}" alt="">`).join('');

    projectModal.classList.add('show');
  });
});

// Close modal
closeProjectModal.addEventListener('click', () => projectModal.classList.remove('show'));
projectModal.addEventListener('click', (e) => {
  if (e.target.id === 'projectDetailModal') projectModal.classList.remove('show');
});





document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const msg = document.getElementById("successMsg");
    msg.classList.remove("hidden");
    
    setTimeout(() => {
        msg.classList.add("hidden");
    }, 2500);

    this.reset();
});

function enableDarkMode() {
    const msg = document.getElementById("successMsg");
    msg.classList.remove("success");
    msg.classList.add("success-dark");
}

function disableDarkMode() {
    const msg = document.getElementById("successMsg");
    msg.classList.remove("success-dark");
    msg.classList.add("success");
}
