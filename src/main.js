import square from './square.js';
import circle from './circle.js';
import rectangle from './rectangle.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let square1 = new square();
let circ1 = new circle();
let rect1 = new rectangle();
square1.draw(ctx);
circ1.draw(ctx);
rect1.draw(ctx);
