class Graphics {
    // A simple polygon
    color = 'White';
    
    constructor (ctx) {
        this.ctx = ctx;
    }
    
    setColor (color) {
        this.color = color;
    }

    fillRect (x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Graphics;
