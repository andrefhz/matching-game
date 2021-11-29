import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/elements/base.css';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#app");
const $htmlBoardGame = BoardGame(1);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);