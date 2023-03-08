function resetgame() {
  activeplayer = 0;
  currentround = 1;

  displaywinner.firstElementChild.innerHTML ="";
    // 'You Won, <span id="player-won">Player name</span>';
  
  displaywinner.style.display = "none";
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gamewinner[i][j] = 0;
      gameboard.children[count].textContent = "";
      gameboard.children[count].classList.remove("disabled");
      count++;
    }
  }
  gameisOver = false;
}

function displaygrid() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Enter custom names");
    return;
  }
  resetgame();
  gameboard.style.display = "grid";
  playerinfoturn.style.display = "block";
  playername.textContent = players[activeplayer].name;
}

function playerturn() {
  if (activeplayer === 0) {
    activeplayer = 1;
  } else {
    activeplayer = 0;
  }
  playername.textContent = players[activeplayer].name;
}

function gameplay(event) {
  if (event.target.textContent != "" || gameisOver) {
    return;
  } // remove this fucntion and see how the grid behaves when you click on it even when it is already clicked
  event.target.textContent = players[activeplayer].symbol;
  event.target.classList.add("disabled");

  const selectedcol = event.target.dataset["col"] - 1;
  const selectedrow = event.target.dataset["row"] - 1; // -1 because index of first element is 0,0 and likewise for other elements

  gamewinner[selectedrow][selectedcol] = activeplayer + 1;

  const check = endgame();
  if (check !== 0) {
    thankyou(check);
  }
  currentround += 1;
  playerturn();
}

function endgame() {
  for (let a = 0; a < 3; a++) {
    if (
      gamewinner[a][0] > 0 &&
      gamewinner[a][0] === gamewinner[a][1] &&
      gamewinner[a][1] === gamewinner[a][2]
    ) {
      return gamewinner[a][0];
    }
  }
  for (let b = 0; b < 3; b++) {
    if (
      gamewinner[0][b] > 0 &&
      gamewinner[0][b] === gamewinner[1][b] &&
      gamewinner[1][b] === gamewinner[2][b]
    ) {
      return gamewinner[0][b];
    }
  }
  if (
    gamewinner[0][0] > 0 &&
    gamewinner[0][0] === gamewinner[1][1] &&
    gamewinner[1][1] === gamewinner[2][2]
  ) {
    return gamewinner[0][0];
  }

  if (
    gamewinner[0][2] > 0 &&
    gamewinner[0][2] === gamewinner[1][1] &&
    gamewinner[1][1] === gamewinner[2][0]
  ) {
    return gamewinner[0][2];
  }

  if (currentround === 9) {
    return -1;
  }
  return 0;
}

function thankyou(gameid) {
  displaywinner.style.display = "block";
  gameisOver = true;
  if (gameid > 0) {
    playerwon.textContent = players[gameid - 1].name;
    displaywinner.firstElementChild.textContent = "You won " + playerwon.textContent + '!'
  
  } else {
    displaywinner.firstElementChild.textContent = "Game ended in a draw!!";
  }
}
