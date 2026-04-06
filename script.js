const width = 8;
const foods = ["🍛","🥟","🍬","🧊","🍡","🍵","🫓","🟠"];
let board = document.getElementById("board");
let squares = [];
let score = 0;

let squareBeingDragged;
let squareBeingReplaced;

// create board
function createBoard() {
  for (let i = 0; i < width*width; i++) {
    const square = document.createElement("div");
    square.setAttribute("draggable", true);
    square.setAttribute("id", i);

    let food = foods[Math.floor(Math.random()*foods.length)];
    square.innerText = food;

    board.appendChild(square);
    squares.push(square);
  }
}
createBoard();

// drag events
squares.forEach(square => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", e => e.preventDefault());
  square.addEventListener("drop", dragDrop);
});

function dragStart() {
  squareBeingDragged = this;
}

function dragDrop() {
  squareBeingReplaced = this;

  let temp = squareBeingDragged.innerText;
  squareBeingDragged.innerText = squareBeingReplaced.innerText;
  squareBeingReplaced.innerText = temp;
}

// check matches
function checkRowMatch() {
  for (let i = 0; i < 61; i++) {
    let row = [i, i+1, i+2];
    let food = squares[i].innerText;

    if (row.every(index => squares[index].innerText === food && food != "")) {
      row.forEach(index => squares[index].innerText = "");
      score += 10;
    }
  }
}

// gravity
function moveDown() {
  for (let i = 0; i < 56; i++) {
    if (squares[i+8].innerText === "") {
      squares[i+8].innerText = squares[i].innerText;
      squares[i].innerText = "";
    }
  }
}

// game loop
setInterval(() => {
  checkRowMatch();
  moveDown();
}, 200);
