function square () {
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
}

export default square;
