let foods = ["🍛","🥟","🍬","🧊","🍡","🍵","🫓","🟠"];
let board = document.getElementById("board");

for (let i = 0; i < 64; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  tile.innerText = foods[Math.floor(Math.random()*foods.length)];
  board.appendChild(tile);
}
