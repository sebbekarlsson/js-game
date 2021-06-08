class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 18;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
    }


    update() {
        // right
        if (this.game.keys["d"]) {
            this.x += 5;
        }

        // left
        if (this.game.keys["a"]) {
            this.x -= 5;
        }

        // up
        if (this.game.keys["w"]) {
            this.y -= 5;
        }

        // down
        if (this.game.keys["s"]) {
            this.y += 5;
        }
    }
    // rack upp handen nar ni kan rora cirkeln at alla hall.
}