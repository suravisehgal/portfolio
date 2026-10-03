/**
 * Opening Sequence & Hero Entrance Animation Controller
 * Provides a high-tech AI neural boot sequence, progress telemetry,
 * sound synthesis chord, and staggered cinematic hero entrance.
 */

export function initIntroAnimation({ playUiSound, onComplete }) {
  const curtain = document.getElementById("intro-curtain");
  const counterEl = document.getElementById("intro-counter");
  const progressFill = document.getElementById("intro-progress-fill");
  const logLineEl = document.getElementById("intro-log-line");
  const skipBtn = document.getElementById("skip-intro-btn");
  const replayBtn = document.getElementById("replay-intro-btn");
  const logoBadge = document.querySelector(".nav-logo .logo-badge");
  const heroSection = document.getElementById("hero");
  const navbar = document.getElementById("navbar");

  if (!curtain) return;

  // Boot telemetry status steps
  const bootLogs = [
    { threshold: 0, text: "INITIALIZING QUANTUM NEURAL CORE..." },
    { threshold: 22, text: "CALIBRATING TENSOR RUNTIME & WEIGHTS..." },
    { threshold: 48, text: "COMPILING AGENT & VISION WORKFLOWS..." },
    { threshold: 74, text: "SYNCHRONIZING VERIFIED GITHUB REPOSITORIES..." },
    { threshold: 92, text: "SYNAPSE MESH CALIBRATED [OK]..." },
    { threshold: 100, text: "SURAVI SEHGAL // PORTFOLIO ONLINE" }
  ];

  let isCompleted = false;
  let animFrameId = null;
  const duration = 1800; // 1.8 seconds cinematic duration
  let startTime = null;

  function setLogText(text) {
    if (logLineEl && logLineEl.textContent !== text) {
      logLineEl.textContent = text;
    }
  }

  function finishIntro() {
    if (isCompleted) return;
    isCompleted = true;

    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
    }

    if (counterEl) counterEl.textContent = "100%";
    if (progressFill) progressFill.style.width = "100%";
    setLogText("SYSTEM ONLINE. WELCOME.");

    // Trigger audio feedback if sound engine is active
    if (typeof playUiSound === "function") {
      playUiSound("boot");
    }

    // Trigger background constellation burst effect
    window.dispatchEvent(new CustomEvent("canvas-burst"));

    // Curtain shutter opening animation
    curtain.classList.add("intro-finished");
    document.body.classList.remove("intro-active");

    // Activate staggered hero animations
    if (heroSection) heroSection.classList.add("hero-animate-in");
    if (navbar) navbar.classList.add("hero-animate-in");

    // Optional callback to trigger stat counters or interactive elements
    if (typeof onComplete === "function") {
      onComplete();
    }

    // Hide curtain from accessibility tree & pointer events after transition finishes
    setTimeout(() => {
      curtain.style.display = "none";
    }, 950);
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Smooth cubic ease-out for realistic loading physics
    const eased = 1 - Math.pow(1 - progress, 2.5);
    const percent = Math.floor(eased * 100);

    if (counterEl) counterEl.textContent = `${percent}%`;
    if (progressFill) progressFill.style.width = `${percent}%`;

    // Update telemetry log
    for (let i = bootLogs.length - 1; i >= 0; i--) {
      if (percent >= bootLogs[i].threshold) {
        setLogText(bootLogs[i].text);
        break;
      }
    }

    if (progress < 1) {
      animFrameId = requestAnimationFrame(step);
    } else {
      finishIntro();
    }
  }

  // Start sequence
  document.body.classList.add("intro-active");
  animFrameId = requestAnimationFrame(step);

  // Skip button click handler
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      if (typeof playUiSound === "function") playUiSound("click");
      finishIntro();
    });
  }

  // Escape key skip handler
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !isCompleted) {
      finishIntro();
    }
  });

  // Replay functionality
  function replay() {
    isCompleted = false;
    startTime = null;

    curtain.style.display = "flex";
    // Force browser reflow to reset transitions
    void curtain.offsetWidth;

    curtain.classList.remove("intro-finished");
    document.body.classList.add("intro-active");

    if (heroSection) heroSection.classList.remove("hero-animate-in");
    if (navbar) navbar.classList.remove("hero-animate-in");

    if (counterEl) counterEl.textContent = "0%";
    if (progressFill) progressFill.style.width = "0%";
    setLogText("REBOOTING NEURAL SYSTEM...");

    if (typeof playUiSound === "function") playUiSound("open");

    animFrameId = requestAnimationFrame(step);
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      replay();
    });
  }

  // Clicking logo badge triggers subtle replay
  if (logoBadge) {
    logoBadge.style.cursor = "pointer";
    logoBadge.setAttribute("title", "Click to replay intro animation");
    logoBadge.addEventListener("click", (e) => {
      e.preventDefault();
      replay();
    });
  }

  return {
    replay,
    skip: finishIntro
  };
}
