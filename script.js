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

// NEW TASK BUTTON
function newTask() {
  alert("New Task feature coming next step");
}
function openNewTask() {
  document.getElementById("newTaskForm").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}
