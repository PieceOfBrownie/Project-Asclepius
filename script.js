/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 
// ======================================== // 
// WORKOUT DATA // 
// ======================================== 
const exercises = [ 
  { 
    name: "Jumping Jacks", duration: 10 
  }, 

  { 
    name: "Squats", duration: 15 
  },

  { 
    name: "Push Ups", duration: 12 
  }, 
  
  { 
    name: "Plank", duration: 20 
  } 
]; 



let currentExercise = 0; 

// ======================================== // 
// TIMER //
// ======================================== 

let timeLeft = exercises[currentExercise].duration;
let timer; 

// ======================================== // 
// GET HTML ELEMENTS // 
// ======================================== 

const exerciseElements = document.querySelectorAll(".exercise"); 
const nextButtons = document.querySelectorAll(".next-button");
const startButtons = document.querySelectorAll(".start-button");

// ======================================== // 
// SHOW CURRENT EXERCISE // 
// ======================================== //

function showExercise() { 
  // First, close every exercise 
  exerciseElements.forEach(function(exercise) { 
    exercise.classList.remove("active"); 
  }); 

  // Open the current exercise 
  exerciseElements[currentExercise].classList.add("active"); 
  
  // Set timer 
  timeLeft = exercises[currentExercise].duration; 
  updateTimer(); 
} 

// ======================================== // 
// UPDATE TIMER ON SCREEN // 
// ======================================== // 

function updateTimer() {
    const currentElement = exerciseElements[currentExercise];
    const timerElement =
        currentElement.querySelector(".timer-value");
    timerElement.textContent = timeLeft;
}
// ======================================== // GO TO NEXT EXERCISE // ======================================== // 

function nextExercise() { 
  // Stop current timer // 
  clearInterval(timer); 
  
  // Check if this is the last exercise // 
  if (currentExercise >= exercises.length - 1) { 
    alert("Workout complete!"); 
    return; 
  } 
  // Move to next exercise // 
  currentExercise++; 

  // Show next exercise // 
  showExercise(); 
   
} 
// ======================================== // START TIMER // ======================================== // 
function startTimer() { 
  timer = setInterval(function() { 
    timeLeft--; 
    updateTimer(); 
    // Timer finished // 
    if (timeLeft <= 0) { 
      nextExercise(); 
    } 
  }, 1000); 
} 

// ======================================== // BUTTON // ======================================== // 
nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        nextExercise();
    });
});

startButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        startTimer();
    });
});

// ======================================== // START WORKOUT // ======================================== // 
showExercise(); 
