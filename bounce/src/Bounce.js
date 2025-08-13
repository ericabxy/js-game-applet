import Ball from './Ball.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

let ball = new Ball(width / 3, height / 4, 1.5, 2.3, 12, "Blue");

function drawPattern (ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, width / 2, height / 2);
    ctx.fillStyle = "Gray";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(width / 2, height / 2, width / 2, height / 2);
    ctx.fillStyle = "Gray";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(width / 2, 0, width / 2, height / 2);
    ctx.fillStyle = "White";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(0, height / 2, width / 2, height / 2);
    ctx.fillStyle = "White";
    ctx.fill();
    ctx.closePath();
}

function draw () {
    drawPattern(ctx);
    ball.move({x: 0, y: 0, width: width, height: height});
    ball.draw(ctx);
}

setInterval(draw, 10);
