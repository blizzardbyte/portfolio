// Introduction
const numParticlesIntro = 50;

function createParticlesIntro() {
  const container = document.querySelector("#introduction");

  for (let i = 0; i < numParticlesIntro; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    container.appendChild(particle);
    setParticlePositionIntro(particle);
    animateParticleIntro(particle);
  }
}

function setParticlePositionIntro(particle) {
  const container = document.querySelector("#introduction");
  const x = Math.random() * container.clientWidth;
  const y = Math.random() * container.clientHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
}

function animateParticleIntro(particle) {
  const duration = Math.random() * 10 + 5;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  particle.animate(
    [
      { transform: `translate(0, 0)` },
      { transform: `translate(${x}vw, ${y}vh)` },
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "linear",
    }
  );
}

createParticlesIntro();

// Skills
const numTrianglesSkills = 10;

function createTrianglesSkills() {
  const container = document.querySelector("#skills");

  for (let i = 0; i < numTrianglesSkills; i++) {
    const triangle = document.createElement("div");
    triangle.className = "triangle";
    container.appendChild(triangle);
    setTrianglePositionSkills(triangle);
    animateTriangleSkills(triangle);
  }
}

function setTrianglePositionSkills(triangle) {
  const container = document.querySelector("#skills");
  const x = Math.random() * container.clientWidth;
  const y = Math.random() * container.clientHeight;
  triangle.style.left = `${x}px`;
  triangle.style.top = `${y}px`;
}

function animateTriangleSkills(triangle) {
  const duration = Math.random() * 10 + 5;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  triangle.animate(
    [
      { transform: `translate(0, 0)` },
      { transform: `translate(${x}vw, ${y}vh)` },
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "alternate",
    }
  );
}

createTrianglesSkills();

// Projects
const numLinesProjects = 30;
const projectsContainer = document.querySelector("#projects");

function createLinesProjects() {
  for (let i = 0; i < numLinesProjects; i++) {
    const line = document.createElement("div");
    line.className = "line";
    projectsContainer.appendChild(line);
    setLinePositionProjects(line);
    animateLineProjects(line);
  }
}

function setLinePositionProjects(line) {
  const x = Math.random() * projectsContainer.clientWidth;
  line.style.left = `${x}px`;

  const y = Math.random() * projectsContainer.clientHeight;
  line.style.top = `${y}px`;
}

function animateLineProjects(line) {
  const duration = Math.random() * 10 + 5;
  const y = -15;
  const delay = Math.random() * 2;
  line.animate(
    [
      { opacity: 1, transform: `translate(0, ${y}vh)` },
      { opacity: 0, transform: `translate(0, 100vh)` },
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "linear",
      delay: delay * 1000,
    }
  );
}

createLinesProjects();

// glow effect for icons every 5 seconds
document.addEventListener("DOMContentLoaded", function () {
  const skillContainers = document.querySelectorAll(".skill-container");

  let currentIndex = 0;

  function toggleGlowAndPopup(container) {
    const popup = container.querySelector(".skill-popup");
    container.classList.toggle("glow");
    popup.classList.toggle("show");
  }

  function activateNextSkill() {
    toggleGlowAndPopup(skillContainers[currentIndex]);

    setTimeout(() => {
      toggleGlowAndPopup(skillContainers[currentIndex]);
      currentIndex = (currentIndex + 1) % skillContainers.length;
      setTimeout(activateNextSkill, 1000);
    }, 1000);
  }

  // Start the sequence
  activateNextSkill();
});

// drawer
const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("active");
});
