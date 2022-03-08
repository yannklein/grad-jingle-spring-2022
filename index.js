// Jingle steps
const STEPS = {
  longTimeAgo: 0, // from play to "Long Time Ago.." intro
  demoday: 4, // "Long time ago..." duration
  sad: 6, // demo day
};
for (const key in STEPS) {
  STEPS[key] = STEPS[key]*1000;
}

// HTML element selection
const playBtn = document.querySelector('#play');
const longTimeAgo = document.querySelector('#long-time-ago');
const demoday = document.querySelector('h1');
const rollText = document.querySelector('#text-roll');

// Hide/show util functions
const hide = el => el.classList.add('opacity-0', 'invisible');
const show = el => el.classList.remove('opacity-0', 'invisible');

// Steps action functions
const showLongTimeAgo = () => {
  hide(playBtn);
  show(longTimeAgo);
};
const showDemoDay = () => {
  hide(longTimeAgo);
  show(demoday);
};

// Main jngle function
const initJingle = (event) => {
  event.preventDefault();
  setTimeout(showLongTimeAgo, STEPS.longTimeAgo);
  setTimeout(showDemoDay, STEPS.demoday);

}

// Play button click listener
playBtn.addEventListener("click", initJingle);