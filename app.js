let gamewinner = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let currentround = 1
let activeplayer = 0;
let editedplayer = 0;
let gameisOver = false
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const configoverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formsubmission = document.querySelector("form");
const errormessage = document.getElementById("error");

const player1button = document.getElementById("player-1-button");
const player2button = document.getElementById("player-2-button");
const canceloverlaybutton = document.getElementById("cancel-overlay");
const startgamebutton = document.getElementById("start-game");
const gameboard = document.getElementById("game-board");
const gameboardlistelements = document.querySelectorAll("#game-board li");
const playerinfoturn = document.getElementById("playerturn");
const playername = document.getElementById("active-player");

const displaywinner = document.getElementById('game-winner')
const playerwon = document.getElementById('player-won')

player1button.addEventListener("click", openPlayerConfig);
player2button.addEventListener("click", openPlayerConfig);

canceloverlaybutton.addEventListener("click", closeconfigOverlay);
formsubmission.addEventListener("submit", savedata);

startgamebutton.addEventListener("click", displaygrid);

for (const boardelement of gameboardlistelements) {
  boardelement.addEventListener("click", gameplay);
}
