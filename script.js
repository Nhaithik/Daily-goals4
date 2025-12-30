/* ================= LOGIN CHECK ================= */

function checkLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

/* ================= NAVIGATION ================= */

function goDashboard() {
  window.location.href = "dashboard.html";
}

function goTasks() {
  window.location.href = "mytasks.html";
}

function goProfile() {
  window.location.href = "profile.html";
}

function goSettings() {
  window.location.href = "settings.html";
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

/* ================= SAFE POPUP HELPERS ================= */

function show(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
}

function hide(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

/* ================= SETTINGS POPUPS ================= */

// Reminder
function openReminder() { show("reminderModal"); }
function closeReminder() { hide("reminderModal"); }

// Goals
function openGoals() { show("goalModal"); }
function closeGoals() { hide("goalModal"); }

// Theme
function openTheme() { show("themeModal"); }
function closeTheme() { hide("themeModal"); }

/* ================= THEME LOGIC ================= */

function saveTheme() {
  const system = document.getElementById("systemTheme")?.checked;

  if (system) {
    localStorage.setItem("theme", "system");
  } else {
    const selected = document.querySelector('input[name="theme"]:checked');
    if (!selected) return;
    localStorage.setItem("theme", selected.value);
  }

  applyTheme();
  closeTheme();
}

function applyTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  } else if (theme === "light") {
    document.body.classList.remove("dark");
  } else if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", prefersDark);
  }
}

/* ================= APPLY ON LOAD ================= */

applyTheme();
