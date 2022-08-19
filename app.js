let numSelected = null;
let titleSelected = null;

let errors = 0;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

onload = () => {
  setGame();
};

// Digits
function setGame() {
  for (let i = 1; i <= 9; i++) {
    const number = document.createElement("div");
    number.id = i;
    number.innerHTML = i;
    number.addEventListener("click", selectedNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

// board
  for (let j = 0; j < 9; j++) {
    for (let k = 1; k < 9; k++) {
      const tile = document.createElement("div");
      tile.id = j.toString() + "-" + k.toString();
      if (board[j][k] != "-") {
        tile.innerText = board[j][k]
        tile.classList.add("tile-start");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectedNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }
    this.innerText = numSelected.id;
  }
}
