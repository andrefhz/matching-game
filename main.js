import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/elements/base.css';
import CardGame from './src/components/CardGame';

const $root = document.querySelector("#app");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);