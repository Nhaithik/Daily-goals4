// ================= LOGIN =================
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@dailygoals.com" && password === "admin123") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials");
  }
}

// ================= LOGOUT =================
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// ================= AUTH CHECK =================
// Call this on protected pages
function checkLogin() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
}

// ================= NAVIGATION =================
function goDashboard() {
  window.location.href = "dashboard.html";
}

function goTasks() {
  window.location.href = "mytasks.html";
}

function goProfile() {
  window.location.href = "profile.html";
}

// ================= PROFILE SAVE =================
function saveProfile() {
  const name = document.getElementById("name").value;
  localStorage.setItem("username", name);
  alert("Profile saved successfully!");
}

// ================= LOAD PROFILE NAME =================
function loadProfile() {
  const savedName = localStorage.getItem("username");
  if (savedName && document.getElementById("name")) {
    document.getElementById("name").value = savedName;
  }
}

// ================= PROFILE IMAGE PREVIEW =================
function loadImage(event) {
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(event.target.files[0]);
}
