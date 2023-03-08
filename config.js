function openPlayerConfig(event) {
  configoverlay.style.display = "block";
  backdrop.style.display = "block";
  editedplayer = +event.target.dataset["playerid"]; // this helps to determine which edit button was clicked
  // '+' before the event converts the sting into integer

}

function closeconfigOverlay() {
  configoverlay.style.display = "none";
  backdrop.style.display = "none";
  errormessage.textContent = "";
  formsubmission.firstElementChild.classList.remove("error-style");
  formsubmission.firstElementChild.children[1].value = ""
}

function savedata(event) {

  event.preventDefault();
  const formele = new FormData(formsubmission);
  const enteredname = formele.get("playername").trim(); // it trims extra white space from the input

  if (!enteredname) {
    //!enteredname === '';
    formsubmission.firstElementChild.classList.add("error-style");
    errormessage.textContent = "Invalid Input";
    return 
    // return statement will not execute the code after the if block
  }

  const updateuserdata = document.getElementById('player-' + editedplayer + '-data')
  updateuserdata.children[1].textContent = enteredname //selecting h3 element of the article
  players[editedplayer-1].name = enteredname

  closeconfigOverlay() // calling the function
  
}
