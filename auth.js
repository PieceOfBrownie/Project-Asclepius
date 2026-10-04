const PROFILE_KEY = "shroomfitProfile";
const SESSION_KEY = "shroomfitLoggedIn";

const defaultProfile = {
  name: "ShroomFit User",
  email: "demo@shroomfit.local",
  xp: 7,
  streak: 13,
  practiceMinutes: 0,
  healthImprovement: 12
};

function getProfile() {
  try {
    return { ...defaultProfile, ...JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") };
  } catch {
    return { ...defaultProfile };
  }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...getProfile(), ...profile }));
}

function isLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "true";
}

function signOut() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "login.html";
}

function protectPage() {
  if (!document.body.classList.contains("login-page") && !isLoggedIn()) {
    window.location.replace("login.html");
  }
}

function updateProgressDisplays() {
  const profile = getProfile();
  const streak = document.getElementById("streak");
  const xp = document.getElementById("xp");

  if (streak) {
    streak.value = profile.streak;
  }
  if (xp) {
    xp.value = profile.xp;
  }
}

protectPage();
document.addEventListener("DOMContentLoaded", updateProgressDisplays);
