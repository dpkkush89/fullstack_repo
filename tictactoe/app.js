var origboard;
const huPlayer = "O";
const aiPlayer = "X";
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const cells = document.querySelectorAll(".cell");
startGame();
function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origboard = Array.from(Array(9).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}
function turnClick(square) {
  turn(square.target.id, huPlayer);
}
function turn(squareId, player) {
  origboard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origboard, player);
  if (gameWon) gameOver(gameWon);
}
function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => e === player) ? a.concat(i) : a,
    [];
}
