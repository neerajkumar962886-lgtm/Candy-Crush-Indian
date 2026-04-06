const foods = ["🍛","🥟","🍬","🧊","🍡","🍵","🫓","🟠"];
const board = document.getElementById("board");

let tiles = [];
let selectedTile = null;

// create board
for (let i = 0; i < 64; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");

  let food = foods[Math.floor(Math.random()*foods.length)];
  tile.innerText = food;

  tile.addEventListener("click", () => handleClick(tile));

  board.appendChild(tile);
  tiles.push(tile);
}

// click system
function handleClick(tile) {
  if (!selectedTile) {
    selectedTile = tile;
    tile.style.border = "2px solid red";
  } else {
    swap(tile, selectedTile);
    selectedTile.style.border = "1px solid white";
    selectedTile = null;
    checkMatch();
  }
}

// swap tiles
function swap(a, b) {
  let temp = a.innerText;
  a.innerText = b.innerText;
  b.innerText = temp;
}

// check match (simple row match)
function checkMatch() {
  for (let i = 0; i < 64; i++) {
    if (
      tiles[i].innerText === tiles[i+1]?.innerText &&
      tiles[i].innerText === tiles[i+2]?.innerText
    ) {
      tiles[i].innerText = "";
      tiles[i+1].innerText = "";
      tiles[i+2].innerText = "";
    }
  }
}
