import Circle from './Circle.js';
import Vec2D from './Vec2D.js';

class Ball extends Circle {
    vel = new Vec2D();
    tvec = new Vec2D();
    sunk = false;

    constructor (x, y, diam) {
        super(x, y, diam);
    }

    decelerate (magnitude) {
        if (magnitude >= this.vel.magnitude( )) {
            this.vel.set(0, 0);
        } else {
            this.tvec.set(this.vel.dx, this.vel.dy);
            this.tvec.unitVec();
            this.tvec.multiply(magnitude);
            this.vel.subtract(this.tvec);
        }
    }
    
    draw (ctx) {
        ctx.beginPath();
        ctx.arc(this.x + 2, this.y + 2, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "DarkGray";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "White";
        ctx.fill();
        ctx.closePath();
    }

    move (bounds, friction) {
        let hitHorz = false;
        let hitVert = false;

        this.decelerate(friction);
        this.x += this.vel.dx;
        this.y += this.vel.dy;
        hitHorz = ((this.x - this.radius) < bounds.x || (this.x + this.radius) > (bounds.x + bounds.width));
        if (hitHorz) {
            this.vel.dx = -this.vel.dx;
            this.x += this.vel.dx;
        }
        hitVert = ((this.y - this.radius) < bounds.y || (this.y + this.radius) > (bounds.y + bounds.height));
        if (hitVert) {
            this.vel.dy = -this.vel.dy;
            this.y += this.vel.dy;
        }
        if (hitHorz || hitVert) {
            this.decelerate(this.vel.magnitude() * 0.80);
        }
    }
    
    moving () {
        return this.vel.dx != 0 || this.vel.dy != 0;
    }
    
    putt (x, y) {
        this.vel.set((this.x - x) / 20, (this.y - y) / 20);
    }

    touches (x, y) {
        return (new Circle(x, y, 0)).distance(this) < this.radius;
    }
}

export default Ball;
