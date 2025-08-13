function rectangle () {
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.rect(160, 10, 100, 40);
        ctx.strokeStyle = "rgb(0 0 255 / 50%)";
        ctx.stroke();
        ctx.closePath();
    }
}

export default rectangle;
