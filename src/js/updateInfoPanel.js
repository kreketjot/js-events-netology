const hits = document.getElementById('hits-counter');
const fails = document.getElementById('fails-counter');
const gameOver = document.getElementById('game-over');

// eslint-disable-next-line no-return-assign
const updateHitsInfo = (content) => hits.textContent = content;
// eslint-disable-next-line no-return-assign
const updateFailsInfo = (content) => fails.textContent = content;
// eslint-disable-next-line no-return-assign
export const showGameOver = () => gameOver.hidden = false;

const updateInfoPanel = (newHits, newFails) => {
  if (newHits !== undefined) updateHitsInfo(newHits);
  if (newFails !== undefined) updateFailsInfo(newFails);
};

export default updateInfoPanel;
