import "./styles.css";

const main = document.querySelector("#game");
const grid = { x: 4, y: 3 };
const total = grid.x * grid.y;
const colors = [
  "red",
  "lime",
  "magenta",
  "hotpink",
  "slateblue",
  "skyblue",
  "red",
  "lime",
  "magenta",
  "hotpink",
  "slateblue",
  "skyblue"
];

function maker(parent, content, background) {
  const ele = document.createElement("div");
  ele.textContent = content;
  ele.classList.add("box");
  ele.style.background = `${background}`;
  parent.appendChild(ele);
}

function makeGrid() {
  generateRandomColors();
  for (let i = 0; i < total; i++) {
    const content = `${i + 1}`;
    maker(main, content, colors[i]);
  }
  main.style.setProperty(`grid-template-columns`, `repeat(${grid.y},1fr)`);
}

function generateRandomColors() {
  colors.sort(() => {
    return Math.random() - 0.5;
  });
}

document.addEventListener("DOMContentLoaded", makeGrid());
