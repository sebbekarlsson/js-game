class Enemy extends GameObject {
    constructor(x, y, ctx, game, width, height) {
        super(x, y, ctx);
        this.game = game;
        this.width = width;
        this.height = height;
        this.speed = getRandomNumber(3, 5);
    }

    draw() {
        this.ctx.drawImage(
            ASTEROID_IMAGE,     // bild vi vill rita
            this.x,             // horisontell koordinat
            this.y,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );
    }


    update() {
        this.y += this.speed;

        if (this.y + this.height > 480) {
            this.game.removeObject(this);
        }

        // rack upp handen nar asteroiderna eller dina enemies
        // aldrig slutar komma.
    }

}