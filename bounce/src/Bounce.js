import Ball from './Ball.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let ball = new Ball(canvas.width / 3, canvas.height / 4, 1.5, 2.3, 12, "Blue");

function drawPattern (ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillStyle = "Gray";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillStyle = "Gray";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(ctx.canvas.width / 2, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillStyle = "White";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(0, ctx.canvas.height / 2, ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillStyle = "White";
    ctx.fill();
    ctx.closePath();
}

function draw () {
    drawPattern(ctx);
    ball.move({x: 0, y: 0, width: canvas.width, height: canvas.height});
    ball.draw(ctx);
}

setInterval(draw, 10);
