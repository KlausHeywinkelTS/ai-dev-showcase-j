const columns = [
  {
    id: "todo",
    title: "To Do",
    emptyTitle: "Alles bereit",
    emptyText: "Neue Aufgaben erscheinen hier, sobald sie erstellt wurden.",
  },
  {
    id: "progress",
    title: "In Bearbeitung",
    emptyTitle: "Bereit zum Start",
    emptyText: "Verschieben Sie Aufgaben hierher, wenn die Arbeit beginnt.",
  },
  {
    id: "done",
    title: "Erledigt",
    emptyTitle: "Bereit für Erfolge",
    emptyText: "Noch keine Aufgaben abgeschlossen. Verschieben Sie Karten hierher, um sie zu erledigen.",
  },
];

const tasks = [
  {
    id: "feat-102",
    code: "FEAT-102",
    title: "Auth Flow implementieren",
    description: "Entwicklung der OAuth2-Integration mit Google- und GitHub-Providern.",
    status: "todo",
    badge: "To Do",
    updatedAt: "24. Okt 2023",
    accent: "primary",
  },
  {
    id: "bug-404",
    code: "BUG-404",
    title: "CSS Grid Bug in Safari",
    description: "Spalten überlappen in Safari 15.2 und älter auf mobilen Geräten.",
    status: "todo",
    badge: "Priorität",
    updatedAt: "25. Okt 2023",
    accent: "tertiary",
  },
  {
    id: "design-05",
    code: "DESIGN-05",
    title: "Dark Mode Audit",
    description: "Überprüfung aller Kontrastverhältnisse für das kommende Dark-Mode-Release.",
    status: "progress",
    badge: "In Arbeit",
    updatedAt: "26. Okt 2023",
    accent: "secondary",
  },
];

const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root not found");
}

app.innerHTML = `
  <div class="app-shell">
    <div class="error-banner is-hidden" id="error-banner" role="alert">
      <div class="banner-content">
        <span class="material-symbols-outlined" aria-hidden="true">report</span>
        <span>Fehler beim Speichern. Bitte erneut versuchen.</span>
      </div>
      <button class="icon-button icon-button-on-error" id="dismiss-error" type="button" aria-label="Fehlermeldung schließen">
        <span class="material-symbols-outlined" aria-hidden="true">close</span>
      </button>
    </div>

    <aside class="side-nav" aria-label="Projekt Navigation">
      <div class="brand">
        <div class="brand-icon">
          <span class="material-symbols-outlined" aria-hidden="true">grid_view</span>
        </div>
        <div>
          <p class="brand-title">Project Alpha</p>
          <p class="brand-subtitle">Engineering Team</p>
        </div>
      </div>

      <nav class="nav-links" aria-label="Hauptnavigation">
        ${renderNavLink("dashboard", "Boards", true)}
        ${renderNavLink("analytics", "Analyse")}
        ${renderNavLink("group", "Team")}
        ${renderNavLink("settings", "Einstellungen")}
      </nav>

      <section class="upgrade-card" aria-labelledby="upgrade-title">
        <h2 id="upgrade-title">Upgrade Plan</h2>
        <p>Erhalten Sie unbegrenzte Boards und erweiterte Analysen.</p>
        <button type="button">Upgrade</button>
      </section>
    </aside>

    <main class="main-content">
      <header class="top-bar">
        <div class="title-group">
          <h1>Kanban To-Do</h1>
          <span class="title-divider" aria-hidden="true"></span>
          <div class="loading-indicator" id="loading-indicator" role="status" aria-live="polite">
            <span class="material-symbols-outlined sync-icon" aria-hidden="true">sync</span>
            <span>Synchronisiere...</span>
          </div>
        </div>

        <div class="top-actions">
          <button class="primary-action" id="open-modal" type="button">
            <span class="material-symbols-outlined" aria-hidden="true">add</span>
            <span>Neue Aufgabe</span>
          </button>
          <div class="profile-actions">
            <button class="notification-button" type="button" aria-label="Benachrichtigungen öffnen">
              <span class="material-symbols-outlined" aria-hidden="true">notifications</span>
              <span class="notification-dot" aria-hidden="true"></span>
            </button>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBscg-9F13mHLFp3NNwuC_mVJEieqRwEQsx9IquR7c0QlCUL0gyDW24wQmQ7v18JhnjW2--eu9LBy9zlvB5FBLAt6c-ExJiO0rYuxnqSqlUtKn51zjN8hufPfeFVSts_ZL0gVGBYORKQL-SmH-4qWXgsdZGWbYReAQLrRqH79RCkKgFbjZaGRodGudHMJ0UDBDEpSIuoUDOaoLaE8-LrTk4LU0IYbFB0umZ1u9hgmCRKxzQCfuKp-3ULOvxtPEAPNXAa1DhkKNZg2vu"
              alt="Nutzerprofil"
              class="avatar"
            />
          </div>
        </div>
      </header>

      <section class="board-container" aria-label="Kanban Board">
        <div class="board">
          ${columns.map(renderColumn).join("")}
        </div>
      </section>
    </main>

    <div class="modal-overlay is-hidden" id="task-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <section class="modal-card">
        <header class="modal-header">
          <div>
            <h2 id="modal-title">Neue Aufgabe erstellen</h2>
            <p>Füllen Sie die Details unten aus.</p>
          </div>
          <button class="icon-button" id="close-modal" type="button" aria-label="Dialog schließen">
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </header>

        <form class="task-form" id="task-form">
          <div class="field-group">
            <label for="task-title">Titel</label>
            <input id="task-title" name="title" placeholder="Was muss getan werden?" required type="text" />
          </div>
          <div class="field-group">
            <label for="task-desc">Beschreibung</label>
            <textarea id="task-desc" name="description" placeholder="Geben Sie etwas Kontext..." rows="4"></textarea>
          </div>
          <div class="field-group">
            <label for="task-status">Status</label>
            <div class="select-wrap">
              <select id="task-status" name="status">
                <option value="todo">To Do</option>
                <option value="progress">In Bearbeitung</option>
                <option value="done">Erledigt</option>
              </select>
              <span class="material-symbols-outlined" aria-hidden="true">expand_more</span>
            </div>
          </div>
          <div class="form-actions">
            <button class="secondary-action" id="cancel-modal" type="button">Abbrechen</button>
            <button class="primary-action" type="submit">Aufgabe speichern</button>
          </div>
        </form>
      </section>
    </div>
  </div>
`;

const modal = document.querySelector("#task-modal");
const loadingIndicator = document.querySelector("#loading-indicator");
const errorBanner = document.querySelector("#error-banner");
const taskForm = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");

function renderNavLink(icon, label, active = false) {
  return `
    <a class="nav-link ${active ? "is-active" : ""}" href="#" aria-current="${active ? "page" : "false"}">
      <span class="material-symbols-outlined" aria-hidden="true">${icon}</span>
      <span>${label}</span>
    </a>
  `;
}

function renderColumn(column) {
  const columnTasks = tasks.filter((task) => task.status === column.id);
  const countTone = column.id === "progress" ? "secondary" : "neutral";

  return `
    <article class="kanban-column" aria-labelledby="${column.id}-heading">
      <header class="column-header">
        <div class="column-title">
          <h2 id="${column.id}-heading">${column.title}</h2>
          <span class="task-count task-count-${countTone}" aria-label="${columnTasks.length} Aufgaben">${columnTasks.length}</span>
        </div>
        <button class="icon-button" type="button" aria-label="Optionen für ${column.title} öffnen">
          <span class="material-symbols-outlined" aria-hidden="true">more_horiz</span>
        </button>
      </header>
      ${
        columnTasks.length > 0
          ? `<div class="task-list">${columnTasks.map(renderTaskCard).join("")}</div>`
          : renderEmptyState(column.emptyTitle, column.emptyText)
      }
    </article>
  `;
}

function renderTaskCard(task) {
  return `
    <article class="task-card accent-${task.accent}">
      <div class="task-accent" aria-hidden="true"></div>
      <div class="task-meta">
        <span>${task.code}</span>
        <span class="status-pill status-${task.accent}">${task.badge}</span>
      </div>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="date-row">
        <span class="material-symbols-outlined" aria-hidden="true">event</span>
        <span>Geändert: ${task.updatedAt}</span>
      </div>
      <div class="card-actions">
        ${task.status !== "todo" ? renderMoveButton(task, "back") : ""}
        <div class="icon-actions">
          <button class="icon-button" type="button" aria-label="${task.title} bearbeiten">
            <span class="material-symbols-outlined" aria-hidden="true">edit</span>
          </button>
          ${
            task.status === "todo"
              ? `<button class="icon-button danger" type="button" aria-label="${task.title} löschen">
                  <span class="material-symbols-outlined" aria-hidden="true">delete</span>
                </button>`
              : ""
          }
        </div>
        ${task.status !== "done" ? renderMoveButton(task, "forward") : ""}
      </div>
    </article>
  `;
}

function renderMoveButton(task, direction) {
  const label = direction === "back" ? "Zurück" : "Verschieben";
  const icon = direction === "back" ? "arrow_back" : "arrow_forward";
  const iconMarkup = `<span class="material-symbols-outlined" aria-hidden="true">${icon}</span>`;

  return `
    <button class="move-button move-${direction}" type="button" aria-label="${task.title} ${label.toLowerCase()}">
      ${direction === "back" ? iconMarkup : ""}
      <span>${label}</span>
      ${direction === "forward" ? iconMarkup : ""}
    </button>
  `;
}

function renderEmptyState(title, text) {
  return `
    <div class="empty-state">
      <div class="empty-icon">
        <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
      </div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  `;
}

function toggleModal(show) {
  if (!modal) {
    return;
  }

  modal.classList.toggle("is-hidden", !show);
  document.body.classList.toggle("modal-open", show);

  if (show) {
    titleInput?.focus();
  }
}

document.querySelector("#open-modal")?.addEventListener("click", () => toggleModal(true));
document.querySelector("#close-modal")?.addEventListener("click", () => toggleModal(false));
document.querySelector("#cancel-modal")?.addEventListener("click", () => toggleModal(false));
document.querySelector("#dismiss-error")?.addEventListener("click", () => {
  errorBanner?.classList.add("is-hidden");
});

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleModal(false);
  }
});

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  toggleModal(false);
  errorBanner?.classList.remove("is-hidden");
  window.setTimeout(() => errorBanner?.classList.add("is-hidden"), 4000);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModal(false);
  }
});

window.setTimeout(() => {
  loadingIndicator?.classList.add("is-hidden");
}, 1500);
