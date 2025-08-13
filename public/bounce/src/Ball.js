function Ball (x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;

    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.move = function (bounds) {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        if (this.x - this.size < bounds.x && this.dx < 0) {
            this.dx = -this.dx;
            this.x -= 2 * (this.x - bounds.x - this.size);
        } else if ((this.x + this.size) > (bounds.x + bounds.width) && this.dx > 0) {
            this.dx = -this.dx;
            this.x -= 2 * ((this.x + this.size) - (bounds.x + bounds.width));
        }
        if (this.y - this.size < bounds.y && this.dy < 0) {
            this.dy = -this.dy;
            this.y -= 2 * (this.y - bounds.y - this.size);
        } else if ((this.y + this.size) > (bounds.y + bounds.height) && this.dy > 0) {
            this.dy = -this.dy;
            this.y -= 2 * ((this.y + this.size) - (bounds.y + bounds.height));
        }
    }
}

export default Ball;
