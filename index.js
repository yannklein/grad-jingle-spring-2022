// Jingle steps

const STEPS = {
  longTimeAgo: 0, // from play to "Long Time Ago.." intro
  demoday: 4, // "Long time ago..." duration
  sad: 6, // demo day
};
for (const key in STEPS) {
  STEPS[key] = STEPS[key]*1000;
}

const playBtn = document.querySelector('#play');
const longTimeAgo = document.querySelector('#long-time-ago');
const demoday = document.querySelector('h1');
const rollText = document.querySelector('#text-roll');

const hide = el => el.classList.add('opacity-0', 'invisible');
const show = el => el.classList.remove('opacity-0', 'invisible');

const showLongTimeAgo = () => {
  hide(playBtn);
  show(longTimeAgo);
};
const showDemoDay = () => {
  hide(longTimeAgo);
  show(demoday);
};

const startJingle = (event) => {
  event.preventDefault();
  setTimeout(showLongTimeAgo, STEPS.longTimeAgo);
  setTimeout(showDemoDay, STEPS.demoday);

}

playBtn.addEventListener("click", startJingle);