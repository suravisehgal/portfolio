/**
 * Interactive Developer Terminal CLI
 * Allows recruiters & engineers to interrogate Suravi's technical profile via CLI
 */

import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, ACHIEVEMENTS_DATA, WORKSHOPS_DATA, CERTIFICATIONS_DATA, EXPERIENCE_DATA } from "./data.js";

export function initTerminal() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const terminalContainer = document.getElementById("terminal-container");
  const terminalToggle = document.getElementById("terminal-toggle-btn");
  const terminalClose = document.getElementById("terminal-close-btn");

  if (!terminalInput || !terminalOutput) return;

  const history = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="cli-cmd-list">
  <span class="cli-hl">Available Commands:</span>
  <div><span class="cli-cmd">whoami</span>        - Learn about Suravi's focus and engineering background</div>
  <div><span class="cli-cmd">projects</span>      - List all 9 verified projects and repositories</div>
  <div><span class="cli-cmd">project &lt;id&gt;</span>  - Deep dive on specific project (safestep, mira, sentinel, sonar, stock-alerts)</div>
  <div><span class="cli-cmd">skills</span>        - Technical skills matrix & tools breakdown</div>
  <div><span class="cli-cmd">awards</span>        - Hackathon titles & Startup Pitch award (SafeStep, Aqualens, Syntax2Code)</div>
  <div><span class="cli-cmd">workshops</span>     - View attended technical masterclasses, summits & founder roundtables</div>
  <div><span class="cli-cmd">certs</span>         - Verified industry certifications (Oracle, Microsoft, MongoDB)</div>
  <div><span class="cli-cmd">experience</span>    - Digital Head, E-Cell Coordinator, Internship & Education</div>
  <div><span class="cli-cmd">github</span>        - Inspect connected GitHub profile & repos</div>
  <div><span class="cli-cmd">linkedin</span>      - Open LinkedIn profile in a new tab</div>
  <div><span class="cli-cmd">contact</span>       - Get direct contact details & email</div>
  <div><span class="cli-cmd">clear</span>         - Clear the terminal screen</div>
</div>`,

    whoami: () => `
<div>
  <p><strong class="cli-hl">${PERSONAL_INFO.name}</strong> — ${PERSONAL_INFO.headline}</p>
  <p class="cli-dim">Location: ${PERSONAL_INFO.location} | Education: ${PERSONAL_INFO.university}</p>
  <p style="margin-top: 6px;">${PERSONAL_INFO.bio}</p>
  <p class="cli-accent" style="margin-top: 6px;">Status: ${PERSONAL_INFO.status}</p>
</div>`,

    projects: () => {
      let out = `<div class="cli-hl" style="margin-bottom: 6px;">Verified Repositories on GitHub:</div>`;
      PROJECTS_DATA.forEach((p, i) => {
        out += `
<div style="margin-bottom: 8px;">
  <span class="cli-accent">[${i + 1}] ${p.name}</span> <span class="cli-tag">(${p.categoryLabel})</span>
  ${p.award ? `<span class="cli-badge">★ ${p.award}</span>` : ""}
  <div class="cli-dim">${p.shortDesc}</div>
  <div>Repo: <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="cli-link">${p.githubUrl} ↗</a></div>
</div>`;
      });
      out += `<div class="cli-dim">Tip: Run 'project &lt;id&gt;' (e.g. 'project safestep', 'project sentinel') for deep architecture.</div>`;
      return out;
    },

    skills: () => {
      let out = `<div class="cli-hl">Technical Stack & Competencies:</div>`;
      for (const [category, list] of Object.entries(SKILLS_DATA)) {
        out += `<div style="margin-top: 8px;"><strong class="cli-accent">${category}:</strong><br>`;
        out += list.map(s => `<span class="cli-chip">${s.name}</span>`).join(" ");
        out += `</div>`;
      }
      return out;
    },

    awards: () => {
      let out = `<div class="cli-hl">Hackathon Wins & Achievements:</div>`;
      ACHIEVEMENTS_DATA.forEach(a => {
        out += `
<div style="margin-top: 6px;">
  <span class="cli-accent">${a.icon} ${a.title}</span> [${a.date}]
  <div class="cli-dim">${a.subtitle}</div>
  <div>${a.description}</div>
</div>`;
      });
      return out;
    },

    workshops: () => {
      let out = `<div class="cli-hl">Attended Workshops, Masterclasses & Founder Roundtables:</div>`;
      WORKSHOPS_DATA.forEach(w => {
        out += `
<div style="margin-top: 8px;">
  <span class="cli-accent">${w.title}</span> [${w.organization}, ${w.date}]
  <div class="cli-dim"><i class="fas fa-bullseye"></i> Focus: ${w.focus}</div>
  <div style="margin-top: 2px;">${w.description}</div>
  <div class="cli-dim" style="margin-top: 2px;">Tags: ${w.tags.join(", ")}</div>
</div>`;
      });
      return out;
    },

    certs: () => {
      let out = `<div class="cli-hl">Verified Industry Credentials & Certifications:</div>`;
      CERTIFICATIONS_DATA.forEach(c => {
        out += `
<div style="margin-top: 8px;">
  <span class="cli-accent">${c.badge} ${c.title}</span> [${c.issuer}]
  <div class="cli-dim">${c.subtitle} &bull; ID: <code>${c.credentialId}</code> &bull; ${c.date}</div>
  <div>${c.description}</div>
  <div class="cli-dim">Validated: ${c.skillsCovered.join(", ")}</div>
  <div>Verify: <a href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer" class="cli-link">${c.verificationUrl} ↗</a></div>
</div>`;
      });
      return out;
    },

    experience: () => {
      let out = `<div class="cli-hl">Experience & Education:</div>`;
      EXPERIENCE_DATA.forEach(e => {
        out += `
<div style="margin-top: 8px;">
  <span class="cli-accent">${e.role}</span> @ <strong>${e.company}</strong> (${e.period})
  <div class="cli-dim">${e.description}</div>
  <ul style="margin: 4px 0 4px 18px;">
    ${e.points.map(pt => `<li>${pt}</li>`).join("")}
  </ul>
</div>`;
      });
      return out;
    },

    github: () => {
      window.open(PERSONAL_INFO.github, "_blank", "noopener,noreferrer");
      return `Opening <a href="${PERSONAL_INFO.github}" target="_blank" class="cli-link">${PERSONAL_INFO.github}</a> in a new tab...`;
    },

    linkedin: () => {
      window.open(PERSONAL_INFO.linkedin, "_blank", "noopener,noreferrer");
      return `Opening <a href="${PERSONAL_INFO.linkedin}" target="_blank" class="cli-link">${PERSONAL_INFO.linkedin}</a> in a new tab...`;
    },

    contact: () => `
<div>
  <p class="cli-hl">Contact Information:</p>
  <div>Email: <a href="mailto:${PERSONAL_INFO.email}" class="cli-link">${PERSONAL_INFO.email}</a></div>
  <div>LinkedIn: <a href="${PERSONAL_INFO.linkedin}" target="_blank" class="cli-link">${PERSONAL_INFO.linkedin} ↗</a></div>
  <div>GitHub: <a href="${PERSONAL_INFO.github}" target="_blank" class="cli-link">${PERSONAL_INFO.github} ↗</a></div>
  <p class="cli-dim" style="margin-top: 4px;">Available for interviews, collaborations, and engineering roles.</p>
</div>`,

    clear: () => {
      terminalOutput.innerHTML = "";
      return null;
    }
  };

  function executeCommand(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    history.push(trimmed);
    historyIndex = history.length;

    // Echo input
    const echoLine = document.createElement("div");
    echoLine.className = "cli-line";
    echoLine.innerHTML = `<span class="cli-prompt">suravi@portfolio:~$</span> <span class="cli-cmd-text">${escapeHtml(trimmed)}</span>`;
    terminalOutput.appendChild(echoLine);

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    const responseLine = document.createElement("div");
    responseLine.className = "cli-response";

    if (cmd === "project") {
      if (!arg) {
        responseLine.innerHTML = `<span class="cli-err">Usage: project &lt;id&gt; (e.g. project safestep, project mira, project sentinel, project sonar, project stock-alerts)</span>`;
      } else {
        const found = PROJECTS_DATA.find(p => p.id.toLowerCase() === arg || p.name.toLowerCase().includes(arg));
        if (found) {
          responseLine.innerHTML = `
<div style="border-left: 2px solid var(--accent); padding-left: 10px; margin: 4px 0;">
  <div class="cli-hl">${found.name} — ${found.subtitle}</div>
  <p style="margin: 4px 0;">${found.detailedDesc}</p>
  <div class="cli-dim"><strong>Tech:</strong> ${found.technologies.join(", ")}</div>
  <div style="margin-top: 6px;">
    <strong>Repository:</strong> <a href="${found.githubUrl}" target="_blank" rel="noopener noreferrer" class="cli-link">${found.githubUrl} ↗</a>
    ${found.liveUrl ? `<br><strong>Live Demo:</strong> <a href="${found.liveUrl}" target="_blank" rel="noopener noreferrer" class="cli-link">${found.liveUrl} ↗</a>` : ""}
  </div>
</div>`;
        } else {
          responseLine.innerHTML = `<span class="cli-err">Project '${arg}' not found. Run 'projects' to see all available project IDs.</span>`;
        }
      }
    } else if (commands[cmd]) {
      const result = commands[cmd]();
      if (result !== null) {
        responseLine.innerHTML = result;
      }
    } else {
      responseLine.innerHTML = `<span class="cli-err">Command not recognized: '${escapeHtml(cmd)}'. Type <span class="cli-cmd">help</span> for a list of available commands.</span>`;
    }

    if (responseLine.innerHTML) {
      terminalOutput.appendChild(responseLine);
    }

    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = "";
      executeCommand(val);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = "";
      }
    }
  });

  // Toggle terminal display
  if (terminalToggle && terminalContainer) {
    terminalToggle.addEventListener("click", () => {
      const isHidden = terminalContainer.classList.contains("hidden");
      if (isHidden) {
        terminalContainer.classList.remove("hidden");
        terminalInput.focus();
      } else {
        terminalContainer.classList.add("hidden");
      }
    });
  }

  if (terminalClose && terminalContainer) {
    terminalClose.addEventListener("click", () => {
      terminalContainer.classList.add("hidden");
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    }[tag] || tag));
  }
}
