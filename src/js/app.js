import setNodeInNewPlace from './setNodeInNewPlace';
import updateInfoPanel, { showGameOver } from './updateInfoPanel';

const goblin = document.getElementById('goblin');
const places = document.getElementsByClassName('grid-item');
const restart = document.getElementById('restart');
let curPlace = null;
let hits = 0;
let fails = 0;
let timeout;

const updateGoblin = () => {
  curPlace = setNodeInNewPlace(places, curPlace, goblin);
};

const dispatchGoblin = (fail = true) => document.dispatchEvent(new CustomEvent('goblin', {
  detail: { fail },
}));

// eslint-disable-next-line no-return-assign
const startTimeout = () => timeout = setTimeout(() => dispatchGoblin(true), 1000);

goblin.addEventListener('click', () => {
  clearTimeout(timeout);
  dispatchGoblin(false);
});

const gameOver = () => {
  goblin.hidden = true;
  showGameOver();
};

const update = () => {
  updateInfoPanel(hits, fails);
  if (fails < 5) {
    updateGoblin();
    startTimeout();
  } else {
    gameOver();
  }
};

document.addEventListener('goblin', (event) => {
  if (event.detail.fail) {
    fails += 1;
  } else {
    hits += 1;
  }
  update();
});

restart.addEventListener('click', () => document.location.reload());

update();
