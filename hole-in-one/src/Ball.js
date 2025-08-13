function Ball (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.dx = 0;
    this.dy = 0;

    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x + 2, this.y + 2, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = "DarkGray";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = "White";
        ctx.fill();
        ctx.closePath();
    }

}

export default Ball;
