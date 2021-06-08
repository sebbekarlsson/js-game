class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 18, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
    }


    update() {
        if (this.game.keys["d"]) {
            this.x += 5;
        }

        // rack upp handen nar cirkeln ror pa sig nar ni trycker
        // pa knappen ni valt.
    }
}