import Bounce from './Bounce.js';

const canvas = document.getElementById('myCanvas');
const main = new Bounce(canvas);

main.start();

setInterval(() => {main.run()}, 10);
