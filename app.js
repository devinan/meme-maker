const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 5, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 5, Math.PI, 2 * Math.PI);
ctx.moveTo(230, 100);
ctx.arc(250, 100, 20, 0, 0.2 * Math.PI);
ctx.fill();
