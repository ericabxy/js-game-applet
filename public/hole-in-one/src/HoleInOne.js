import Ball from './Ball.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width / 2;
const height = canvas.height / 2;
const gap = 20;

ctx.beginPath();
ctx.rect(0, 0, 480, 320);
ctx.fillStyle = "DarkGreen";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.ellipse(width, height, width - gap, height - gap, 0, Math.PI * 2, false);
ctx.fillStyle = "LightGreen";
ctx.fill();
ctx.closePath();

let ball = new Ball(100, 100, 10);
ball.draw(ctx);
