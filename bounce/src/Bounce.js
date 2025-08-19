import Ball from './Ball.js';
import Graphics from './Graphics.js';

class Bounce {
    // A bouncing ball applet
    bounds;
    ball;
    width;
    height;
    
    constructor (canvas) {
        this.ctx = canvas.getContext("2d");
        this.bounds = {
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height
        };
        this.width = canvas.width;
        this.height = canvas.height;
    }
    
    run () {
        this.ball.move(this.bounds);
        this.paint(this.ctx);
    }
    
    start () {
        this.ball = new Ball(
            this.width / 3,
            this.height / 4,
            1.5,
            2.3,
            12,
            "Blue"
        );
    }
    
    stop () {
    }
    
    paint (ctx) {
        let g = new Graphics(ctx);
        g.setColor('Gray');
        g.fillRect(0, 0, this.width / 2, this.height / 2);
        g.setColor('Gray');
        g.fillRect(this.width / 2, this.height / 2, this.width / 2, this.height / 2);
        g.setColor('White');
        g.fillRect(0, this.height / 2, this.width / 2, this.height / 2);
        g.setColor('White');
        g.fillRect(this.width / 2, 0, this.width / 2, this.height / 2);
        this.ball.draw(ctx);
    }
}

export default Bounce;
