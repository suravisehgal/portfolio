/**
 * Main Interactive Application Controller
 * Handles project filtering, modal architecture inspector, sound synthesis,
 * scroll reveals, contact handling, and interactive components.
 */

import {
  PERSONAL_INFO,
  PROJECTS_DATA,
  SKILLS_DATA,
  ACHIEVEMENTS_DATA,
  WORKSHOPS_DATA,
  CERTIFICATIONS_DATA,
  EXPERIENCE_DATA
} from "./data.js";
import { initNeuralCanvas } from "./canvas.js";
import { initTerminal } from "./terminal.js";
import { initIntroAnimation } from "./intro.js";

// Audio Synthesis Engine (Zero external audio files, pure Web Audio API)
let audioCtx = null;
let soundEnabled = false;

function playUiSound(type = "click") {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "tab") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.05);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "boot") {
      // Harmonic ascending power-up chord
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.exponentialRampToValueAtTime(523.25, now + 0.32); // C5
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(392.00, now); // G4
      osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.32); // G5
      gain2.gain.setValueAtTime(0.04, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 0.4);
      osc2.stop(now + 0.4);
    }
  } catch (err) {
    // Audio context may fail if restricted
  }
}

// Toast Notification Manager
function showToast(message, duration = 3000) {
  let toast = document.getElementById("portfolio-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "portfolio-toast";
    toast.className = "portfolio-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">✨</span> ${message}`;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, duration);
}

// -------------------------------------------------------------
// Render Projects Section
// -------------------------------------------------------------
function renderProjects(activeCategory = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = activeCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.includes(activeCategory));

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-projects">No projects found in this category.</div>`;
    return;
  }

  filtered.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    card.style.animationDelay = `${idx * 0.08}s`;

    const techPills = project.technologies
      .map(t => `<span class="tech-pill">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-media-wrap">
        <img src="${project.image}" alt="${project.name} preview" class="project-img" loading="lazy">
        <div class="project-overlay-glow"></div>
        <div class="project-badge-bar">
          <span class="category-badge">${project.categoryLabel}</span>
          ${project.award ? `<span class="award-badge">${project.award}</span>` : ""}
        </div>
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>

        <p class="project-desc">${project.detailedDesc}</p>

        <div class="project-tech-stack">
          ${techPills}
        </div>

        <div class="project-actions">
          <a href="${project.githubUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-github"
             title="Open ${project.name} on GitHub"
             aria-label="View ${project.name} repository on GitHub">
            <i class="fab fa-github" aria-hidden="true"></i>
            <span>View on GitHub &rarr;</span>
          </a>

          ${project.liveUrl ? `
            <a href="${project.liveUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn btn-live"
               title="Open ${project.name} Live Demo"
               aria-label="Open ${project.name} Live Demo">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
              <span>Live Demo &nearr;</span>
            </a>
          ` : ""}

          <button class="btn btn-details" 
                  data-inspect="${project.id}" 
                  title="Inspect Architecture Details"
                  aria-label="Inspect ${project.name} Architecture Details">
            <i class="fas fa-layer-group" aria-hidden="true"></i>
            <span>Architecture &hellip;</span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach inspection handlers
  grid.querySelectorAll("[data-inspect]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playUiSound("open");
      const id = btn.getAttribute("data-inspect");
      openProjectModal(id);
    });
  });

  // Also click on media wrap to open modal
  grid.querySelectorAll(".project-media-wrap").forEach(wrap => {
    wrap.addEventListener("click", () => {
      const card = wrap.closest(".project-card");
      if (card) {
        const id = card.getAttribute("data-id");
        playUiSound("open");
        openProjectModal(id);
      }
    });
  });
}

// -------------------------------------------------------------
// Project Modal Inspector
// -------------------------------------------------------------
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-body");
  if (!modal || !modalContent) return;

  let archHtml = "";
  if (project.architecture) {
    archHtml = `
      <div class="modal-arch-section">
        <h4 class="modal-subheading"><i class="fas fa-cubes"></i> Architecture & Engineering Highlights</h4>
        <div class="arch-grid">
          ${Object.entries(project.architecture).map(([key, val]) => `
            <div class="arch-item">
              <span class="arch-key">${formatKey(key)}:</span>
              <span class="arch-val">${val}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-header-hero">
      <img src="${project.image}" alt="${project.name}" class="modal-banner-img">
      <div class="modal-title-overlay">
        <div class="modal-badges">
          <span class="category-badge">${project.categoryLabel}</span>
          ${project.award ? `<span class="award-badge">${project.award}</span>` : ""}
        </div>
        <h2 class="modal-title">${project.name}</h2>
        <p class="modal-subtitle">${project.subtitle}</p>
      </div>
    </div>

    <div class="modal-inner-content">
      <div class="modal-section">
        <h4 class="modal-subheading"><i class="fas fa-info-circle"></i> Technical Overview</h4>
        <p class="modal-text">${project.detailedDesc}</p>
      </div>

      ${archHtml}

      <div class="modal-section">
        <h4 class="modal-subheading"><i class="fas fa-microchip"></i> Technologies & Frameworks</h4>
        <div class="modal-tech-list">
          ${project.technologies.map(t => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-section modal-links-box">
        <h4 class="modal-subheading"><i class="fas fa-link"></i> Project Verification & Code Access</h4>
        <div class="modal-actions-row">
          <a href="${project.githubUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-github btn-lg">
            <i class="fab fa-github"></i>
            <span>View Full Source on GitHub &rarr;</span>
          </a>

          ${project.liveUrl ? `
            <a href="${project.liveUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn btn-live btn-lg">
              <i class="fas fa-globe"></i>
              <span>Launch Live Deployment &nearr;</span>
            </a>
          ` : ""}
        </div>
        <div class="modal-repo-info">
          <span>Repository: <code>${project.githubUrl}</code></span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function openCertModal(certId) {
  const cert = CERTIFICATIONS_DATA.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-body");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-cert-hero">
      <div class="modal-cert-badge-wrap">
        <span class="cert-modal-icon">${cert.badge}</span>
      </div>
      <div class="modal-cert-head-info">
        <div class="cert-modal-issuer">${cert.issuer}</div>
        <h2 class="modal-title" style="font-size: 1.65rem;">${cert.title}</h2>
        <p class="modal-subtitle">${cert.subtitle} &bull; ${cert.date}</p>
        <div class="cert-verified-stamp">
          <i class="fas fa-check-circle"></i> Authenticated Credential
        </div>
      </div>
    </div>

    <div class="modal-inner-content">
      <div class="modal-section">
        <h4 class="modal-subheading"><i class="fas fa-info-circle"></i> Credential Scope</h4>
        <p class="modal-text">${cert.description}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-subheading"><i class="fas fa-fingerprint"></i> Credential Verification Registry</h4>
        <div class="arch-item">
          <span class="arch-key">Registry ID:</span>
          <span class="arch-val"><code>${cert.credentialId}</code></span>
        </div>
        <div class="arch-item" style="margin-top: 8px;">
          <span class="arch-key">Accreditation Body:</span>
          <span class="arch-val">${cert.issuer} Global Certification Authority</span>
        </div>
        <div class="arch-item" style="margin-top: 8px;">
          <span class="arch-key">Status:</span>
          <span class="arch-val" style="color: var(--emerald); font-weight: 600;"><i class="fas fa-shield-alt"></i> Active &amp; Verified</span>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="modal-subheading"><i class="fas fa-check-double"></i> Competencies & Topics Evaluated</h4>
        <div class="modal-tech-list">
          ${cert.skillsCovered.map(s => `<span class="tech-pill">${s}</span>`).join("")}
        </div>
      </div>

      <div class="modal-section modal-links-box">
        <h4 class="modal-subheading"><i class="fas fa-shield-alt"></i> Official Verification Link</h4>
        <p class="modal-text" style="margin-bottom: 1.1rem; font-size: 0.92rem;">
          Access the official verification portal to authenticate this credential directly from ${cert.issuer}.
        </p>
        <div class="modal-actions-row">
          <a href="${cert.verificationUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-primary btn-lg">
            <i class="fas fa-external-link-alt"></i>
            <span>Open ${cert.issuer} Credential Verification &nearr;</span>
          </a>
        </div>
        <div class="modal-repo-info">
          <span>Official Portal: <code>${cert.verificationUrl}</code></span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
}

// -------------------------------------------------------------
// Render Skills Matrix
// -------------------------------------------------------------
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = "";

  for (const [category, skills] of Object.entries(SKILLS_DATA)) {
    const card = document.createElement("div");
    card.className = "skills-category-card";

    let categoryIcon = "fa-brain";
    if (category.includes("Programming")) categoryIcon = "fa-code";
    if (category.includes("Full-Stack")) categoryIcon = "fa-layer-group";
    if (category.includes("Databases") || category.includes("Mobile")) categoryIcon = "fa-cubes";
    if (category.includes("Leadership") || category.includes("Product")) categoryIcon = "fa-lightbulb";

    const itemsHtml = skills.map(skill => `
      <div class="skill-item">
        <div class="skill-meta">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-tag">${skill.tag}</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="skills-card-head">
        <div class="skills-icon-wrap"><i class="fas ${categoryIcon}"></i></div>
        <h3 class="skills-category-title">${category}</h3>
      </div>
      <div class="skills-list">
        ${itemsHtml}
      </div>
    `;

    container.appendChild(card);
  }
}

// -------------------------------------------------------------
// Render Achievements & Certifications
// -------------------------------------------------------------
function renderAchievements() {
  const achContainer = document.getElementById("achievements-list");
  if (achContainer) {
    achContainer.innerHTML = ACHIEVEMENTS_DATA.map((item, idx) => `
      <div class="achievement-card" style="animation-delay: ${idx * 0.1}s">
        <div class="ach-icon-col">
          <span class="ach-medal">${item.icon}</span>
        </div>
        <div class="ach-info">
          <div class="ach-badge-row">
            <span class="ach-pill">${item.category}</span>
            <span class="ach-year">${item.date}</span>
          </div>
          <h3 class="ach-title">${item.title}</h3>
          <h4 class="ach-sub">${item.subtitle}</h4>
          <p class="ach-desc">${item.description}</p>
        </div>
      </div>
    `).join("");
  }

  const certContainer = document.getElementById("certifications-grid");
  if (certContainer) {
    certContainer.innerHTML = CERTIFICATIONS_DATA.map((cert) => `
      <div class="cert-card" data-cert-id="${cert.id}">
        <div class="cert-head">
          <div class="cert-issuer-group">
            <span class="cert-icon">${cert.badge}</span>
            <span class="cert-issuer">${cert.issuer}</span>
          </div>
          <span class="cert-verified-pill"><i class="fas fa-check-circle"></i> Verified</span>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-sub">${cert.subtitle} &bull; ${cert.date}</div>
        <div class="cert-id-tag">
          <i class="fas fa-fingerprint"></i>
          <span>ID: <code>${cert.credentialId}</code></span>
        </div>
        <p class="cert-desc">${cert.description}</p>
        <div class="cert-skills-row">
          ${cert.skillsCovered.map(s => `<span class="cert-skill-chip">${s}</span>`).join("")}
        </div>
        <div class="cert-actions">
          <a href="${cert.verificationUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-cert-verify"
             title="Verify ${cert.title} on official portal"
             aria-label="Verify ${cert.title} on official portal">
            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            <span>Verify Credential &nearr;</span>
          </a>
          <button class="btn btn-cert-inspect" 
                  data-cert-inspect="${cert.id}" 
                  title="Inspect Credential Details"
                  aria-label="Inspect ${cert.title} Details">
            <i class="fas fa-shield-alt" aria-hidden="true"></i>
            <span>Inspect &hellip;</span>
          </button>
        </div>
      </div>
    `).join("");

    // Attach inspect listeners for certificates
    certContainer.querySelectorAll("[data-cert-inspect]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        playUiSound("open");
        const id = btn.getAttribute("data-cert-inspect");
        openCertModal(id);
      });
    });
  }
}

// -------------------------------------------------------------
// Render Experience & Education
// -------------------------------------------------------------
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map((exp, idx) => `
    <div class="timeline-item" style="animation-delay: ${idx * 0.15}s">
      <div class="timeline-marker">
        <div class="marker-dot"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-head">
          <div>
            <span class="timeline-tag ${exp.type.toLowerCase()}">${exp.type}</span>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-company">${exp.company} &bull; <span class="timeline-loc">${exp.location}</span></h4>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-points">
          ${exp.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
        <div class="timeline-tech">
          ${exp.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------
// Render Attended Workshops & Masterclasses
// -------------------------------------------------------------
function renderWorkshops() {
  const container = document.getElementById("workshops-grid");
  if (!container) return;

  container.innerHTML = WORKSHOPS_DATA.map(w => `
    <div class="workshop-card">
      <div class="workshop-header">
        <span class="workshop-org">${w.organization}</span>
        <span class="workshop-date">${w.date}</span>
      </div>
      <h4 class="workshop-title">${w.title}</h4>
      <div class="workshop-focus"><i class="fas fa-bullseye"></i> ${w.focus}</div>
      <p class="workshop-desc">${w.description}</p>
      <div class="workshop-tags">
        ${w.tags.map(t => `<span class="tech-pill">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------
// Filter Tabs Interaction
// -------------------------------------------------------------
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      playUiSound("tab");
      const category = tab.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// -------------------------------------------------------------
// Navigation & Scroll Spy
// -------------------------------------------------------------
function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    // Scroll spy
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const active = hamburger.classList.toggle("active");
      navMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", active);
      playUiSound("click");
    });

    // Close on link click
    navLinks.forEach(l => {
      l.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: "smooth" });
        playUiSound("click");
      }
    });
  });
}

// -------------------------------------------------------------
// Audio Toggle Setup
// -------------------------------------------------------------
function setupAudioToggle() {
  const btn = document.getElementById("sound-toggle-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    btn.classList.toggle("sound-on", soundEnabled);
    btn.setAttribute("title", soundEnabled ? "Mute interactive audio" : "Enable interactive audio");
    btn.setAttribute("aria-label", soundEnabled ? "Mute sound" : "Enable sound");

    const icon = btn.querySelector("i");
    if (icon) {
      icon.className = soundEnabled ? "fas fa-volume-up" : "fas fa-volume-mute";
    }

    if (soundEnabled) {
      playUiSound("open");
      showToast("Interactive sound enabled");
    } else {
      showToast("Audio muted");
    }
  });
}

// -------------------------------------------------------------
// Contact Form & Clipboard
// -------------------------------------------------------------
function setupContact() {
  // Copy email button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
        playUiSound("click");
        showToast("Email copied to clipboard: " + PERSONAL_INFO.email);
      }).catch(() => {
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
      });
    });
  }

  // Contact form submission simulation
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending message...`;
      playUiSound("click");

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fas fa-check"></i> Message Transmitted!`;
        form.reset();
        showToast("Thank you! Your message has been sent to Suravi.");
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3000);
      }, 900);
    });
  }
}

// -------------------------------------------------------------
// Interactive Stats Counter Animation
// -------------------------------------------------------------
function setupStatsCounter() {
  const statElements = document.querySelectorAll("[data-count]");
  if (statElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersectEvent || entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        let current = 0;
        const step = Math.max(1, Math.floor(targetNum / 25));
        const timer = setInterval(() => {
          current += step;
          if (current >= targetNum) {
            el.textContent = targetNum + suffix;
            clearInterval(timer);
          } else {
            el.textContent = current + suffix;
          }
        }, 40);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));
}

// -------------------------------------------------------------
// Modal Events Setup
// -------------------------------------------------------------
function setupModalEvents() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      playUiSound("click");
      closeProjectModal();
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        playUiSound("click");
        closeProjectModal();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

// -------------------------------------------------------------
// Spotlight Glow Follower
// -------------------------------------------------------------
function setupCursorSpotlight() {
  const spotlight = document.getElementById("cursor-spotlight");
  if (!spotlight || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = -200, mouseY = -200;
  let curX = -200, curY = -200;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function update() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    spotlight.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
    requestAnimationFrame(update);
  }
  update();
}

// -------------------------------------------------------------
// Initialize App
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNeuralCanvas();
  renderProjects("all");
  renderSkills();
  renderAchievements();
  renderExperience();
  renderWorkshops();
  setupFilterTabs();
  setupNavigation();
  setupAudioToggle();
  setupContact();
  setupStatsCounter();
  setupModalEvents();
  setupCursorSpotlight();
  initTerminal();

  // Initialize High-Tech Opening Animation Sequence
  initIntroAnimation({
    playUiSound,
    onComplete: () => {
      // Smoothly trigger stat counter animations on entrance
      const statElements = document.querySelectorAll(".hero-stats-strip [data-count]");
      statElements.forEach(el => {
        const targetNum = parseInt(el.getAttribute("data-count"), 10);
        let current = 0;
        const step = Math.max(1, Math.floor(targetNum / 20));
        const timer = setInterval(() => {
          current += step;
          if (current >= targetNum) {
            el.textContent = targetNum;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 40);
      });
    }
  });

  // Button micro-sound triggers
  document.querySelectorAll(".btn, .filter-btn, .nav-link, .nav-social").forEach(el => {
    el.addEventListener("mouseenter", () => {
      // Subtle hover sound if enabled
    });
    el.addEventListener("click", () => {
      playUiSound("click");
    });
  });
});
