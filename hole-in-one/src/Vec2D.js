class Vec2D {
    dx = 0.00;
    dy = 0.00;
    
    set (dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
    
    magnitude () {
        return Math.sqrt(
            this.dx * this.dx +
            this.dy * this.dy
        )
    }
    
    add (vec) {
        this.dx += vec.dx;
        this.dy += vec.dy;
    }
    
    subtract (vec) {
        this.dx -= vec.dx;
        this.dy -= vec.dy;
    }
    
    unitVec () {
        const mag = this.magnitude();
        this.set(this.dx / mag, this.dy / mag);
    }
    
    multiply (scale) {
        this.set(this.dx * scale, this.dy * scale);
    }
}

export default Vec2D;
