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
  alert("Settings page coming soon");
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
