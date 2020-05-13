import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const yahooButton = document.querySelector("#yahoo");
yahooButton.addEventListener("click", () => {
  context.strokeStyle = "red";
  context.lineWidth = 16;
  context.moveTo(50, 120);
  context.lineTo(150, 120);

  context.moveTo(200, 140);
  context.lineTo(280, 140);

  context.moveTo(180, 200);
  context.lineTo(100, 120);

  context.moveTo(180, 200);
  context.lineTo(240, 140);

  context.moveTo(180, 200);
  context.lineTo(180, 240);

  context.moveTo(150, 240);
  context.lineTo(210, 240);
  context.stroke();
});

let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
