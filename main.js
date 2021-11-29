import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';

const $root = document.querySelector("#app");

$root.insertAdjacentHTML(
  "beforeend", 
  `
  ${ScoreBoard()}
  ${BoardGame(4)}
  `);