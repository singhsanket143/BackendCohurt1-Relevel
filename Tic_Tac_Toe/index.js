let turn = true; // true -> p1, false -> p2
let boardCells = Array.from(document.getElementsByClassName("cell"));
let board = document.getElementById("board");
let winStatus = false;

boardCells.forEach(function(cell) {
  cell.addEventListener("click", cellClick);
});

function cellClick(event) {
  // event.target gives you the html element on which event happened
  if(winStatus == true) return;
  let currentCell = event.target;
  if(turn == true) {
    // this is player 1's turn
    currentCell.classList.add("x");
  } else {
    // this is player 2's turn
    currentCell.classList.add("circle");
  }

  // every time turn should change
  gameStatus();
  turn = !turn;
  setNextPlayerHint();
  
}

function setNextPlayerHint() {
  board.classList.remove("x"); // if there is an x class remove it
  board.classList.remove("circle"); // if there is a class circle remove it
  if(turn) {
    board.classList.add("x");
  } else {
    board.classList.add("circle");
  }
}

function gameStatus() {
  let r11 = boardCells[0].classList[1];
  let r12 = boardCells[1].classList[1];
  let r13 = boardCells[2].classList[1];
  let r21 = boardCells[3].classList[1];
  let r22 = boardCells[4].classList[1];
  let r23 = boardCells[5].classList[1];
  let r31 = boardCells[6].classList[1];
  let r32 = boardCells[7].classList[1];
  let r33 = boardCells[8].classList[1];

  if(r11 && r11 === r12 && r11 === r13) { // check the first row
    announceWinner();
    winStatus = true;
  }
  else if(r21 && r21 === r22 && r21 === r23) { // check the second row
    announceWinner();
    winStatus = true;

  }
  else if(r31 && r31 === r32 && r31 === r33) { // check the third row
    announceWinner();
    winStatus = true;

  }
  else if(r11 && r11 === r21 && r11 === r31) { // check the first column
    announceWinner();
    winStatus = true;

  }
  else if(r12 && r12 === r22 && r12 === r32) { // check the second column
    announceWinner();
    winStatus = true;

  }
  else if(r13 && r13 === r23 && r13 === r33) { // check the third column
    announceWinner();
    winStatus = true;

  }
  else if(r11 && r11 === r22 && r11 === r33) { // diaognal 1
    announceWinner();
    winStatus = true;

  } 
  else if(r13 && r13 === r22 && r13 === r31) {
    announceWinner();
    winStatus = true;

  } else {
    checkDraw();
  }
}

function announceWinner() {
  if(turn)
    document.getElementById("winning-message").innerHTML = "X Wins";
  else
    document.getElementById("winning-message").innerHTML = "O Wins";
}

function checkDraw() {
  for(let element of boardCells) {
    if(element.classList[1] === "x" || element.classList[1] === "circle") {
      continue;
    } else {
      return;
    }
  }
  document.getElementById("winning-message").innerHTML = "Its a draw";
}