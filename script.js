function openNav() {
  document.getElementById("mySidepanel").style.width = "165px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 
 
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

/* Created timer here */ 

let timeLeft = exercises[currentExercise].duration;
let timer; 

/* Here get the shit from html */  

const exerciseElements = document.querySelectorAll(".exercise"); 

const workoutFinished =
    document.getElementById("workout-finished");

const finishButton =
    document.getElementById("finish-button");

const restartButton =
    document.getElementById("restart-button");

const nextButtons = document.querySelectorAll(".next-button");
const startButtons = document.querySelectorAll(".start-button");

/* Showing exercises (pls) */ 

function showExercise() { 
  if (!exerciseElements.length) {
    return;
  }

  exerciseElements.forEach(function(exercise) { 
    exercise.classList.remove("active"); 
  }); 

   
  exerciseElements[currentExercise].classList.add("active"); 
  
  /* timer */  
  timeLeft = exercises[currentExercise].duration; 
  updateTimer(); 
} 

/* Update the timet */ 

function updateTimer() {
    const currentElement = exerciseElements[currentExercise];
    const timerElement =
        currentElement.querySelector(".timer-value");
    timerElement.textContent = timeLeft;
}
 

function nextExercise() { 
   
  clearInterval(timer); 
  
  /* Was it the last? */  
  if (currentExercise >= exercises.length - 1) {
    clearInterval(timer);
    exerciseElements.forEach(function(exercise) {
        exercise.classList.remove("active");
    });
    workoutFinished.style.display = "block";
    return;
}
  
  currentExercise++; 

   
  showExercise(); 
   
} 
/* To put timer start here */  
function startTimer() { 
  timer = setInterval(function() { 
    timeLeft--; 
    updateTimer(); 
     
    if (timeLeft <= 0) { 
      nextExercise(); 
    } 
  }, 1000); 
} 

/* Buttttons yay */ 
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

if (restartButton) {
  restartButton.addEventListener("click", function() {
      clearInterval(timer);
      currentExercise = 0;
      workoutFinished.style.display = "none";
      showExercise();
  });
}

if (finishButton) {
  finishButton.addEventListener("click", function() {
      let growthStage = Number(localStorage.getItem("mushroomStage")) || 1;

      growthStage++;

      localStorage.setItem("mushroomStage", growthStage);

      window.location.href = "index.html";
  });
}

/* Start everything */ 
showExercise(); 
