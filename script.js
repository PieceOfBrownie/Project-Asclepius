// Bottom tab navigation: show one screen at a time
const tabs = document.querySelectorAll('.tabs button');
const screens = document.querySelectorAll('.screen');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    screens.forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// "Start workout" jumps to the Routine screen
document.getElementById('start-btn').addEventListener('click', () => {
  document.querySelector('[data-target="routine"]').click();
});

// Simple stopwatch (placeholder for exercise timers)
let seconds = 0, interval = null;
const timerEl = document.getElementById('timer');

document.getElementById('timer-btn').addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  } else {
    interval = setInterval(() => {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      timerEl.textContent = `${m}:${s}`;
    }, 1000);
  }
});
