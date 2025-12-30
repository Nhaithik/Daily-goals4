// LOGIN CHECK
function checkLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// NAVIGATION
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

// LOGOUT
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// MODAL CONTROLS
function openNewTask() {
  document.getElementById("taskModal").style.display = "block";
}

function closeNewTask() {
  document.getElementById("taskModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (e) {
  const modal = document.getElementById("taskModal");
  if (e.target === modal) {
    closeNewTask();
  }
};
// SETTINGS POPUPS
function openReminder() {
  document.getElementById("reminderModal").style.display = "block";
}
function closeReminder() {
  document.getElementById("reminderModal").style.display = "none";
}

function openGoals() {
  document.getElementById("goalModal").style.display = "block";
}
function closeGoals() {
  document.getElementById("goalModal").style.display = "none";
}

function openTheme() {
  document.getElementById("themeModal").style.display = "block";
}
function closeTheme() {
  document.getElementById("themeModal").style.display = "none";
}
/* ===================== THEME LOGIC ===================== */

function openTheme() {
  document.getElementById("themeModal").style.display = "block";
}

function closeTheme() {
  document.getElementById("themeModal").style.display = "none";
}

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
  } 
  else if (theme === "light") {
    document.body.classList.remove("dark");
  } 
  else if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", prefersDark);
  }
}

/* APPLY ON EVERY PAGE LOAD */
applyTheme();
