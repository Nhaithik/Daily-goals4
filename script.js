function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@dailygoals.com" && password === "admin123") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

function checkLogin() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function goTasks() { window.location.href = "mytasks.html"; }
function goProfile() { window.location.href = "profile.html"; }
function goSettings() { window.location.href = "settings.html"; }

function openNewTask() {
  document.getElementById("newTaskPage").style.display = "flex";
}

function closeNewTask() {
  document.getElementById("newTaskPage").style.display = "none";
}
